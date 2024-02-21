import React from 'react'
import Image from 'next/image'
import logo  from "../../../public/Picture/LegalAI.png"
import Link from 'next/link'

const Navbar = () => {
  return (
   <>
   <div className="navbar mx-2">
    <div className="logo pl-[2vh] w-[15vh] h-[13vh] b">
    <Image src={logo}  height={120} width={120} className='w-[100%] h-[100%]' />
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
    <div className="buttons flex place-items-center gap-4 ">
    <Link href="/signup">
         <p>Login</p>
    </Link>
        <div className="Button bg-[#2C60EA] text-white  font-bold py-3.5 px-7 rounded-3xl">
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
