import React from 'react'
import './SignUpPage.scss'
import signup from '../../images/sign-in.png'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useForm } from "react-hook-form";

const SignUpPage = () => {

    const { register, handleSubmit,formState:{errors} } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }; 


    return (
        <>
           <Navbar/> 
           <Header/>
          <div className="signUpMain">
           <h2>Create an account</h2>
           <div className={"signUpDiv"}>
               <div className={"formLeft"}>
                <img src={signup} alt="contact"/>
               </div>
               <div className={"formRight"}>
                <form className="signUpForm" onSubmit={handleSubmit(onSubmit)}>
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
                         <b>Password</b>
                    <input type="password" {...register("password", {
                        required:true,
                    })}/>
                    {errors?.password?.type === "required" && <p>This field is required.</p>}                    
                    </label>
                    <label className="radioButtons">
                            <b>Do you want to receive updates on promotions and upcoming products?</b>                    
                    </label>                    
                    <div className="Options">
                    <div className="d-flex">
                            <input {...register("Developer", { required: true })}type="radio" value="Yes"/>
                            <label>Yes</label>
                    </div>
                    <div className="d-flex">
                            <input {...register("Developer", { required: true })}type="radio" value="No"/>                            
                            <label>No</label>
                    </div>
                    </div>
                    <input type="submit" value="CREATE ACCOUNT" className="inputButton" />
                </form>
               </div>
             </div>
             </div>
             <Footer/>
        </>
    )
}

export default SignUpPage
