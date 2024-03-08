import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from "../../../public/Picture/LegalAI.png"
import Signup_Image from "../../../public/Picture/sign.jpg"
import Button_Load from "../Button_Loader/Button_Load";
const Signup = () => {
    
const [inputText,update_text] = useState({
    username:"",
    email:"",
    confirm_password:"",
    password:""
})
const [Button_Loader,Update_Loader] =useState("");
const [alertmessage,updateAlert] = useState("");

const submit_Input =(e)=>{
    const {name,value} = e.target;
    update_text((previous_value)=>{
        return {
            ...previous_value,
            [name] :value
        }
    })

}
const validateEmail = (email) => {
    // Define a regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  
    // Additional check: Ensure there is at least one word after the @ symbol
    const [, domain] = email.split('@');
    const domainParts = domain.split('.');
    
    return emailPattern.test(email) && domainParts.length > 1;
  };
    const router = useRouter();
    const submission =async (e)=>{
        e.preventDefault();
        Update_Loader("True")
        const {username,email,password,confirm_password} = inputText;
        const verification_email= validateEmail(email)
        

        if(verification_email && username && password === confirm_password){
            alert("All working");
            // const response = await axios.post("api/signup" ,{username,email,password});
            // username
            // if (response.status === 201)
            // {
            //     localStorage.setItem("accessToken",response.data.token);
            //     router.push("/");
    
            // }
            // else{
            //     alert("error");
            // }
            // update_text(()=>{
            //     return {
            //         email:"",
            //         confirm_password:"",
            //         password:""
            //     }
            // })
    
        
        }
        else{
        if(!verification_email){
            updateAlert("Email-Box")
            Update_Loader("")
        }
        else if(!username){
            updateAlert("Username-Box")
            Update_Loader("")
        }
        else if(password !== confirm_password){
            updateAlert("Password-Box")
            Update_Loader("")
            }
   
        else{
            alert("technical error")
            Update_Loader("")
        }
    }
    }
  return (
<>
<div className="Signup_Container ">
 <div className="Signup_Page">
    <div className="Signup_Side">

        <div className="logo">
        <Image  src={Logo} width={150} height={150}/>
        </div>
         <div className="SignupForm">

            <h1 className='text-center text-[20px] Title_Name '>Try 7 days for free</h1>
            <div className="Form_Navigation flex gap-5 my-2">
            <Link href="/signup">
                <button className="bg-[#2C60EA] text-white font-bold px-7 py-4 rounded-xl text-[20px] "> Sign Up</button>
                </Link>
                <Link href="/signin">
                <button className="bg-transparent text-black border-[1px] border-solid border-black px-7 py-4 rounded-xl text-[20px]" > Sign In</button>
                </Link>
            </div>
            <form onSubmit={submission} >
                <div className="Inputs flex flex-col">
                    <div className={`${alertmessage ==="Username-Box" ?"Username-Box"  :"" }`} >
            <input type="text" placeholder='Your name' name="username" value={inputText.username} onChange={submit_Input} required  className='w-[100%]'/>
            </div>
            <div className={`${alertmessage === "Email-Box" ?"Email-Box":"" } w-[100%]`}>
            <input type="email" name="email" placeholder='Email' value={inputText.email} onChange={submit_Input} required className='w-[100%]' />
         </div>
         <div className={`${alertmessage=== "Password-Box"?"Password-Box":"" } `}>
            <input type="password" name="password" placeholder='Password' value={inputText.password} onChange={submit_Input} required  className='w-[100%]'/>
            </div>
            <div className={`${alertmessage=== "Password-Box"?"Password-Box":""}`}>
            <input type="password" name="confirm_password" placeholder='Confirm Password' value={inputText.confirm_password}  onChange={submit_Input} required  className='w-[100%]'/>
            </div>
            </div>
            <div className="Term_Policy flex gap-2 my-2 ">
            <input type="checkbox" name="" id="" required/>
            <p>I agree to the <span className='text-[#2C60EA]'>Terms</span> and <span className='text-[#2C60EA]'>Privacy Policy</span></p>
            </div>
            <button type='submit' className="py-4 px-3 bg-[#2C60EA] rounded-lg text-white font-semibold">{Button_Loader ===""?<> Get Started</>:<Button_Load/> }</button>
            </form>
         </div>
    </div>
    <div className="Image_1_Side">
    <Image src={Signup_Image}  className="w-[100%] object-contain"/>
    </div>
 </div>
 </div>
</>
  )
}

export default Signup
