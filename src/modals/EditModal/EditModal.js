import React, {useState} from 'react'
import { Modal} from 'react-bootstrap';

const EditModal = ({
 newid,
 show,
 onHide:setShow

}) => {

    const [newitem, setItem] = useState({
        title:"", 
        price: 0,
        description: 'dfkdşdhdfh',
        image: 'https://cdn.planetprudence.com/wp-content/uploads/shop.png',
        category: 'category'
    })

    const editProduct = (e,id) =>{
        e.preventDefault();
        console.log(newitem);
        console.log(id);
       fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: newitem.title,
                    price: newitem.price,
                    description: newitem.description,
                    image: newitem.image,
                    category: newitem.category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            
       
    }
    return (
        <>
           <Modal
                    show={show}
                    newid={newid}
                    onHide={() => setShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter" className="title"> 
                            {newid}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <form>
                            <input
                                name="title"
                                label="Title"
                                type="text"
                                value={newitem.title}
                                onChange={(e) =>
                                setItem({
                                    ...newitem,
                                    title: e.target.value,
                                })
                                }
                            >                      
                            </input>

                            <input
                                name="price"
                                type="number"
                                label="Price"
                                value={newitem.price}
                                onChange={(e) =>
                                setItem({
                                    ...newitem,
                                    price: e.target.value,
                                })
                                }
                            >
                            </input>
                            <button onClick={(e)=>editProduct(e,newid)}>Submit</button>
                        </form>
                        </Modal.Body>
                    </Modal>                    
        </>
    )
}

export default EditModal
