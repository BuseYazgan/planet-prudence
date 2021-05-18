import React from 'react'
import { FaPatreon, FaInstagram, FaFacebookF, FaYoutube} from 'react-icons/fa';
import "./Footer.scss"
import logo from '../../logos/Rectangle-83-1.png'

const Footer = () => {
    return (
        <div className={"footerDiv"}>
          <div className={"footerTop"}>
           <img src={logo} alt="logo"/>
           <ul className={"footerList"}>
               <li>SHOP</li>
               <li>COMMISSIONS</li>
               <li>PATREON</li>
               <li>ABOUT ME</li>
               <li>CONTACT</li>
           </ul>
           </div>
           <hr/>
           <div className={"footerBottom"}>
           <ul className={"footerIcons"}>
               <li><FaPatreon size="1em" /></li>
               <li><FaInstagram size="1em" /></li>
               <li><FaFacebookF size="1em"/></li>
               <li><FaYoutube size="1em"/></li>
           </ul>          
           <p><span>&#169;</span> 2021 Planet Prudence | Made by <a href="#"> Growl </a></p>
           <div className={"footerLinks"}>
           <a href="#"> Terms and conditions </a> 
           <a href="#">Cookie Policy</a>
           </div>
           </div>
        </div>
    )
}

export default Footer


