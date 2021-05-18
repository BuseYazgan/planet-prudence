import React, { useState } from 'react'
import "./Header.scss"
import logo from '../../logos/logo-1.png'
import { IoEarthOutline } from 'react-icons/io5';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { BsPerson, BsHeart } from 'react-icons/bs';
import { NavLink } from "react-router-dom";
import { Modal} from 'react-bootstrap';
import signUp from '../../images/sign-in.png';
import LoginModal from '../../modals/LoginModal/LoginModal';


const Header = () => {


  const [modalShow, setModalShow] = useState(false)  
  
    return (
       
        <div className={"mainDiv"}>
        <div className={"headerDiv"}>
           <img src={logo} alt="Planet Prudence Logo"/>
           <div className={"headerRight"}>
               <ul className={"headerIcons"}>
                   <li><IoEarthOutline size="1.5em"/></li>
                   <li><BsPerson onClick={() => setModalShow(true)} size="1.5em"/></li>
                   <li><BsHeart size="1.3em"/></li>
                   <li><RiShoppingBasket2Line  size="1.5em" /> <div> 0 </div> </li>
               </ul>       
               <ul className={"headerList"}>
                   <li>
                     <NavLink to='/' className="linkStyle">SHOP</NavLink>
                   </li>
                   <li>
                      <NavLink to='/commissions' className="linkStyle">COMMISSIONS</NavLink>
                    </li>
                    <li>
                      <a href="https://www.patreon.com/planetprudence" className="linkStyle" >PATREON</a>
                    </li>
                    <li>
                      <NavLink to='/about' className="linkStyle">ABOUT ME</NavLink>
                    </li>
                    <li>
                      <NavLink to='/contact' className="linkStyle">CONTACT</NavLink>
                    </li>
               </ul>  
            </div>
           </div>
           <hr/>
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
                <img src={signUp} alt="sign-up"/>
                  Sign in
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <LoginModal/>
              </Modal.Body>
              </Modal>
        </div>
        
    )
}

export default Header
