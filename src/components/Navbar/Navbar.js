import React from 'react'
import "./Navbar.scss"
import { FaPatreon, FaInstagram, FaFacebookF, FaYoutube} from 'react-icons/fa';
import { FiMail} from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className={"navBar"}>
           <p>ONLY €75 LEFT FOR FREE SHIPPING!</p>
           <ul className={"navbarList"}>
               <li><FaPatreon size="1.25em" /></li>
               <li><FaInstagram size="1.25em" /></li>
               <li><FaFacebookF size="1.25em"/></li>
               <li><FaYoutube size="1.25em"/></li>
               <li><FiMail size="1.25em"/></li>
           </ul>
        </div>
    );
}

export default Navbar
