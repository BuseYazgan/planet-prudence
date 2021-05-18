import React from 'react'
import { Modal, Button} from 'react-bootstrap';

const AreYouSureModal = (
{
    newid,
    deleteModal,
    onHide: setdeleteModal
}
) => { 

    const deleteProduct = (id) =>{
        
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
        
    }

    return (
        <>
           <Modal
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={deleteModal}
            onHide={() => setdeleteModal(false)}
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    <b>Are You Sure?</b>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete this product?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setdeleteModal (false)}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => deleteProduct (newid)}>
                    Yes
                </Button>
                </Modal.Footer>
            </Modal> 
        </>
    )
}

export default AreYouSureModal
