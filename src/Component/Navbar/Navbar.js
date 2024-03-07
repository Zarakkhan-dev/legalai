import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo  from "../../../public/Picture/LegalAI.png"
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
const Navbar = () => {

  const router = useRouter();
  const [menu_icon,SetIcon] = useState("bars");
  const currentPage = router.pathname;
  const [Remove_Nav , SetNavbar]  =useState("");
const [Token,SetToken] = useState("");
  const Verificationtoken =()=>{
      if(Token ==="True"){
          router.push("/chatbot");
      }
      else{
        router.push("/signin");
      }
  }
  async  function Token_verify(){
    let token = localStorage.getItem("accessToken")
    console.log(token);
    const response =  await axios.post("api/verify_token",{token});

    if(response.status ===201){
      SetNavbar("active_Login");
      SetToken("True")
    } 
    }
  useEffect(()=>{
    Token_verify();
    if(currentPage === "/signin" || currentPage ==="/signup")
    { 
      SetNavbar("active_Login");
    }
  },[])
  return (
   <>
    <div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-1 sm:px-6 lg:px-7">
    <div className="inline-flex items-center space-x-2">
      <span>
      <Image src={logo}  height={120} width={120} className='active-Logo w-[100%] h-[100%]  ' />
      </span>
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <Link
            href="/"
            className="text-lg font-semibold text-gray-800 hover:text-gray-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/contactus"
            className="text-lg font-semibold text-gray-800 hover:text-gray-600 "
          >
            Contact us
          </Link>
        </li>
        <li>
          <Link
            href="/aboutus"
            className="text-lg font-semibold text-gray-800 hover:text-gray-600"
          >
            About us
          </Link>
        </li>
      </ul>
    </div>
    <div className="hidden lg:block">
        <Link href='/signin' className={`text-lg font-semibold text-gray-800 hover:text-gray-600 mr-3 ${Remove_Nav}`} >
            Signin
        </Link>
      <span
        onClick={Verificationtoken}
        className="Chatbot-font bg-[#2C60EA] px-[5vh] py-3 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-3xl cursor-pointer"
      >
        Try AILegal Assistant Free <i className="fa-solid fa-arrow-right ml-6 rotate-[-45deg] "></i>
      </span>
    </div>
    <div className="lg:hidden">
    <i className={`fa-solid fa-${menu_icon} fa-2xl`} onClick={()=>menu_icon ==="bars" ?SetIcon("xmark"):SetIcon("bars") }></i>
    </div>
  </div>
</div>

   </>
  )
}

export default Navbar
