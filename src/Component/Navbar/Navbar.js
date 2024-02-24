import React from 'react'
import Image from 'next/image'
import logo  from "../../../public/Picture/LegalAI.png"
import Link from 'next/link'

const Navbar = () => {
  return (
   <>
    <div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <span>
      <Image src={logo}  height={120} width={120} className='md:w-[100%] md:h-[100%] sm:w-[50%] sm:h-[50%] ' />
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
  </div>
</div>
   </>
  )
}

export default Navbar
