import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image';
import Logo from "../../../public/Picture/LegalAI.png"
import Signup_Image from "../../../public/Picture/Signin_Image.jpg"
import Button_Load from "../Button_Loader/Button_Load";
const Signin = () => {

  const [Button_Loader,Update_Loader] =useState("");
  const router = useRouter();
  const [inputText,update_text] = useState({
    email:"",
    password:""
})
const submit_Input =(e)=>{
  const {name,value} = e.target;
  update_text((previous_value)=>{
      return {
          ...previous_value,
          [name] :value
      }
  })

}
const Submission  = async(e)=>{
  e.preventDefault();
  const {email,password} = inputText;
  Update_Loader("True")
  console.log(email+"" +password)
  const response = await axios.post("api/signin" ,{email,password});
  if(response.status ===201){
    localStorage.setItem("accessToken",response.data.token);
    router.push("/");
  }
  else{
    alert("Not valid person ");
  }
}
  return (
    <>
     
     <div className="Signup_Container h-[100vh] ">
 <div className="Signup_Page">
    <div className="Signup_Side">

        <div className="logo">
        <Image  src={Logo} width={150} height={150}/>
        </div>
         <div className="SignupForm">

            <h1 className='text-center text-[25px] Title_Name '>Welcome Back!</h1>
            <div className="Form_Navigation flex gap-5 my-3">
                <Link href="/signup">
                <button className="bg-transparent text-black border-[1px] border-solid border-black px-7 py-4 rounded-xl text-[20px]"> Sign Up</button>
                </Link>
                <Link  href="/signin">
                <button className="bg-[#2C60EA] text-white font-bold px-7 py-4 rounded-xl text-[20px] "> Sign In</button>
                </Link>
            </div>
            <form onSubmit={Submission} >
                <div className="Inputs flex flex-col">
            <input type="email" name="email" placeholder='Email' value={inputText.email} onChange={submit_Input} required/>
            <input type="password" name="password" placeholder='Password' value={inputText.password} onChange={submit_Input} required/>
            </div>
            <div className="Term_Policy flex gap-2 my-2 ">
            <input type="checkbox" name="" id="" />
            <p>I agree to the <span className='text-[#2C60EA]'>Terms</span> and <span className='text-[#2C60EA]'>Privacy Policy</span></p>
            </div>
            <button type='submit' className="py-4 px-3 bg-[#2C60EA] rounded-lg text-white font-semibold"  > {Button_Loader ===""?<> Login</>:<Button_Load/> } </button>
            </form>
         </div>
    </div>
    <div className="Image_1_Side">
    <Image src={Signup_Image}  className="w-[100%] h-[80%] "/>
    </div>
 </div>
 </div>
    </>
  );
};

export default Signin;
