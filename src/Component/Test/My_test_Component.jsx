import React from 'react'
import logo  from "../../../public/Picture/LegalAI.png";
import Image from 'next/image';
import Link from 'next/link';
const My_test_Component = () => {
  return (
    <div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <span>
      <Image src={logo}  height={120} width={120} className='w-[100%] h-[100%]' />
      </span>
    </div>
    <div className="hidden lg:block">
      <ul className="inline-flex space-x-8">
        <li>
          <Link
            href="/"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/contactus"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Contact us
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
    <div className="hidden lg:block">
      <button
        type="button"
        className="rounded-md bg-[#2C60EA] px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Button text
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

  )
}

export default My_test_Component
