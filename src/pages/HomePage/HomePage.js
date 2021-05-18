import React, {useState,useEffect} from 'react'
import "./HomePage.scss"
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Patreon from '../../components/Patreon/Patreon'
import shop from '../../images/shop.png'
import { Modal} from 'react-bootstrap';
import AddProductModal from '../../modals/AddProductModal/AddProductModal'
import SearchBar from '../../components/SearchBar/SearchBar'
import AreYouSureModal from '../../modals/AreYouSureModal/AreYouSureModal'
import EditModal from '../../modals/EditModal/EditModal'

const HomePage = () => {
    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [defaultItems, setdefaultItems] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);
    const [show, setShow] = useState(false);
    const [newid, setId] = useState(0);
    const [input, setInput] = useState('');



    const fetchData = async() =>{
        return await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((products)=>{
            setIsLoaded(true);
            setItems(products);
            setdefaultItems(products);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }

    const updateInput = async (input) => {
        const filtered = defaultItems.filter(product => {
         return product.title.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setItems(filtered);
     }

     useEffect( () => {fetchData()},[]);

    const handleClick =(id)=>{

        setShow(true);
        setId(id);
    }

    const deleteIslemi =(id)=>{
        setdeleteModal(true);
        setId(id);
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if(!isLoaded){
        return <div> Loading... </div>;
    }
    else{
    return (
        <> 
         <Navbar/> 
         <Header/>
         <div className="homeDiv">
         <div className="homeHeader">
             <img src={shop} alt="shop"/>
             <div className="homeInfo">
                 <h1>
                     <b>Shop</b>
                 </h1>
                 <p>
                 <b>#RECLAIMYOURBODY!</b> 
                 <u>Own your own</u> <i>SELF</i>
                   in this altered society. Influence others to
                 <b>reclaim their own unique, flawless and REAL bodies by shouting it louder:</b> 
                  wear it on your clothes or showcase it on your walls for everyone to see, you’ll sure find something here that will help 
                  <b>raise your voice!</b> 
                  <u>BE DIFFERENT, BE REAL</u>
                 </p>
                 <button onClick={() => setModalShow(true)}>ADD PRODUCT</button>
                 <Modal
                    className="Modal" 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter" className="title"> 
                        Add Product
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddProductModal/>
                    </Modal.Body>
                </Modal>
                <div className="SearchDiv">
                    <SearchBar
                        input={input}
                        onChange={updateInput}
                    />
                </div>
             </div>
         </div>
         <div className={"homeProducts"}>
            {items.map(item => (
                <div className="homeCards" key={item.id}>
                <img src={item.image} alt="products"/>
                <div className="cardBody">
                    <h5><b>{item.title}</b></h5>
                    <p>
                     €{item.price}
                    </p>
                    <button onClick={()=>handleClick(item.id)}>Edit</button>  
                     <EditModal
                         newid={newid}
                         show={show}
                         onHide={setShow}
                     />
                    <button onClick={() => deleteIslemi(item.id)}>Delete</button>
                    <AreYouSureModal                        
                        newid={newid}
                        deleteModal={deleteModal}
                        onHide={setdeleteModal} 
                    />
                </div>
                </div>
            ))}
         </div>
         <hr/>
         </div>
         <Patreon/>
         <Footer/>
        </>
    )
    }
}

export default HomePage
