import React from 'react'
import './LoginModal.scss'
import {Form, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const LoginModal = () => {
    return (
        <Form className="LoginForm">
          <Form.Group>
            <label>Email</label>
            <Form.Control
               type="text"
               required
               className="Input"
            />
          </Form.Group>
          <Form.Group>
           <label>Password</label>
           <Form.Control
               type="password"
               required
               className="Input"
            />
          </Form.Group> 
          <div className="formBottom">  
          <Button variant="success" type="submit" className="button">
                SIGN IN
          </Button>  
          <NavLink to='/signup' className="linkStyle">Don't have an account? Create one now!</NavLink> 
          </div>         
        </Form>
    )
}

export default LoginModal
