import React from 'react'
import Image from 'next/image'
import logo  from "../../../public/LegalAI.png"
import Link from 'next/link'
const Navbar = () => {
  return (
   <>
   <div className="navbar mx-2">
    <div className="logo pl-[2vh]">
    <Image src={logo}  height={100} width={100}  />
    </div>
    <div className="menu">
    <ul className='flex justify-center gap-6'>
        <Link href='/'>
        <li className="hover:bg-black">
            Menu
        </li>
        </Link>
        <Link href='/chatbot'>
        <li>
            Chatbot
        </li>
        </Link>
        <Link href="/about">
        <li>
            About 
        </li>
        </Link>
    </ul>
    </div>
    <div className="buttons flex place-items-center gap-3 ">
    <Link href="/signin">
         <p>Login</p>
    </Link>
        <div className="Button bg-[#2C60EA] text-white  font-bold py-2 px-4 rounded-3xl">
            <Link href="/chatbot">
                <h1>Try The chatbot for free</h1>
            </Link>
        </div>
    </div>
   </div>
   </>
  )
}

export default Navbar
