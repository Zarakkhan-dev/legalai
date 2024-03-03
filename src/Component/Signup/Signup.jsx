import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from "../../../public/Picture/LegalAI.png"
import Signup_Image from "../../../public/Picture/Signup_Image.jpg"
const Signup = () => {
const [inputText,update_text] = useState({
    username:"",
    email:"",
    confirm_password:"",
    password:""
})

const [alertmessage,updateAlert] = useState("");
const[response,updateresponse] = useState("false");
const submit_Input =(e)=>{
    const {name,value} = e.target;
    update_text((previous_value)=>{
        return {
            ...previous_value,
            [name] :value
        }
    })

}
    const router = useRouter();
    const submission =async (e)=>{
        e.preventDefault();
        const {email,password,confirm_password} = inputText;

        if(password ==confirm_password){
        const response = await axios.post("api/signup" ,{email,password});

        if (response.status === 201)
        {
            router.push("/");
            updateresponse("True")

        }
        else{
            alert("error");
        }
        update_text(()=>{
            return {
                email:"",
                confirm_password:"",
                password:""
            }
        })
    }else{
        updateAlert("Invalid Username or Password")
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
            <input type="text" placeholder='Your name' name="username" value={inputText.username} onChange={submit_Input} required/>
            <input type="email" name="email" placeholder='Email' value={inputText.email} onChange={submit_Input} required/>
            <input type="password" name="password" placeholder='Password' value={inputText.password} onChange={submit_Input} required/>
            <input type="password" name="confirm_password" placeholder='Confirm Password' value={inputText.confirm_password}  onChange={submit_Input} required/>
            </div>
            <div className="Term_Policy flex gap-2 my-2 ">
            <input type="checkbox" name="" id="" required/>
            <p>I agree to the <span className='text-[#2C60EA]'>Terms</span> and <span className='text-[#2C60EA]'>Privacy Policy</span></p>
            </div>
            <button type='submit' className="py-3 px-3 bg-[#2C60EA] rounded-lg text-white font-semibold">Get Started</button>
            </form>
         </div>
    </div>
    <div className="Image_1_Side">
    <Image src={Signup_Image}  className="object-cover"/>
    </div>
 </div>
 </div>
</>
  )
}

export default Signup
