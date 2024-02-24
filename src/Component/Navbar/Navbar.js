import React, { useState } from 'react'
import Image from 'next/image'
import logo  from "../../../public/Picture/LegalAI.png"
import Link from 'next/link'

const Navbar = () => {
  const [menu_icon,SetIcon] = useState("bars");
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
            href="/about"
            className="text-lg font-semibold text-gray-800 hover:text-gray-600"
          >
            About us
          </Link>
        </li>
      </ul>
    </div>
    <div className="hidden lg:block">
        <Link href='/signin' className='text-lg font-semibold text-gray-800 hover:text-gray-600 mr-3' >
            Login
        </Link>
      <button
        type="button"
        className=" bg-[#2C60EA] px-[5vh] py-3 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-3xl"
      >
        Try AILegal Assistant Free
      </button>
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
