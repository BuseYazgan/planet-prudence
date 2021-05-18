import React, {useEffect} from 'react'
import { useForm } from "react-hook-form";
import './ContactPage.scss'
import illustration from '../../images/illustration-1024x576.jpg'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import contact from '../../images/contact-1187x1536.png'
import { NavLink } from 'react-router-dom'


const ContactPage = () => {

    const { register, handleSubmit,formState:{errors} } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }; 

    useEffect(() => {

        window.scrollTo(0, 0);
        
    }, [])

    return (
        <div className={"contactPage"}>
            <Navbar/>
            <Header/>
            <div className="contactTopDiv">
                <h1><b>Contact me</b></h1>
                <p>Send me a question via the form below and I'll get back to you as soon as <br/> possible!</p>
            </div>
             <div className={"contactFormDiv"}>
               <div className={"formLeft"}>
                <img src={contact} alt="contact"/>
               </div>
               <div className={"formRight"}>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <b>Full name</b>
                        <input {...register("fullName", {
                            required:true,
                            pattern: /^[A-Za-z]+$/i
                        })}/>   

                        {errors?.fullName?.type === "required" && <p>This field is required.</p>}
                        {errors?.fullName?.type === "pattern" && (
                            <p>Alphabetical characters only.</p>
                        )}                 
                    </label>                        
                    <label>
                        <b>Email</b>  
                        <input {...register("email", {
                            required:true,
                            pattern: /^\S+@\S+$/i
                        })}/>
                        {errors?.email?.type === "required" && <p>This field is required.</p>}
                        {errors?.email?.type === "pattern" && (
                            <p>Enter a valid email.</p>
                        )}
                                      
                    </label>
                    <label>
                         <b>Message</b>
                    <textarea {...register("textArea", {
                        required:true,
                    })}/>
                    {errors?.textArea?.type === "required" && <p>This field is required.</p>}                    
                    </label>
                    <input type="submit" value="SEND ME A MESSAGE" className="inputButton" />
                </form>
               </div>
             </div>
             <div className="contactBottomDiv">
               <div className="BottomLeft">
                 <h2><b>Commission your portrait</b></h2>
                 <p>Interested in a custom made gift for yourself or your loved one(s)?  Check out my <br/> commission pricing and information.</p>
                 <NavLink to='/commissions' className="linkStyle">COMMISSIONS</NavLink>
                </div>
                <div className="BottomRight">
                    <img src={illustration} alt="illustration"/>
                </div>
             </div>
            <Footer/>
        </div>
    )
}

export default ContactPage
