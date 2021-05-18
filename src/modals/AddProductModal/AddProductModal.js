import React, { useState} from 'react'
import './AddProductModal.scss'

const AddProductModal = () => {

    const [product, setNewProduct] = useState({
        title:"", 
        price: 0,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    })

    const handleSubmit = (e) =>{
       e.preventDefault();
       console.log(product);
       fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.image,
                    category: product.category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            
       
    }

    return (
        <>
              <form onSubmit={(e)=>handleSubmit(e)}>
                    <input
                        name="title"
                        label="Title"
                        type="text"
                        value={product.title}
                        onChange={(e) =>
                        setNewProduct({
                            ...product,
                            title: e.target.value,
                        })
                        }
                    >                      
                    </input>

                    <input
                        name="price"
                        type="number"
                        label="Price"
                        value={product.price}
                        onChange={(e) =>
                        setNewProduct({
                            ...product,
                            price: e.target.value,
                        })
                        }
                    >
                    </input>
                    <button>Submit</button>
            </form>
        </>
    )
}

export default AddProductModal
