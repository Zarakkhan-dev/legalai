import React from 'react'
import logo  from "../../../public/Picture/Footer_Logo.png";
import Image from 'next/image';
const Footer = () => {
  return (
    <>
   <footer className="bg-[#1F232E]">
  <div className="mx-auto  space-y-8 px-1 py-16 lg:space-y-16  max-w-screen-lg">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="w-[120px]  h-[90px] flex items-end bg-black">
       <Image src={logo} width={500} height={500} className='w-[100%]'/>
        </div>

        <p className="mt-1 max-w-xs text-white w-[50%]">
        A complete AI based law firm assistant
        </p>

        <ul className="mt-8 flex gap-4">
          <li>
            <a
              href="#"
              className="text-white transition hover:opacity-75 text-2xl bg-[#373F51] py-2 px-4 rounded-full "
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>

          <li>
            <a
              href="#"
              target="_blank"
              className="text-white transition hover:opacity-75 text-2xl bg-[#373F51] py-2 px-3 rounded-full"
            >
              <i className="fa-brands fa-linkedin-in"></i>
          
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75 text-2xl py-2 px-3 rounded-full bg-[#373F51] "
            >
             <i className="fa-brands fa-instagram"></i>
            </a>
          </li>

        </ul>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div>
          <p className="font-medium text-white">Product</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Lorem ipsum </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Lorem ipsum </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Lorem ipsum </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Lorem ipsum </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white">Solutions</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Lorem ipsum  </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Lorem ipsum </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Lorem ipsum</a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Lorem ipsum</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white ">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white  transition hover:opacity-75"> Lorem ipsum</a>
            </li>

            <li>
              <a href="#" className="text-white  transition hover:opacity-75"> Lorem ipsum</a>
            </li>

            <li>
              <a href="#" className="text-white  transition hover:opacity-75"> Lorem ipsum</a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Lorem ipsum</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    
  </div>
  <hr />
  <div className="licence-section mx-auto max-w-screen-lg space-y-2 py-3 lg:space-y-3 lg:px-8">
  <div className="licence grid grid-cols-1 gap-8 lg:grid-cols-2 justify-between">
    <p className="text-xs text-[#B4B9C1]">&copy; Copyright 2023 AI Legal Assistant. All Rights Reserved.Designed by Zarak Khan</p>
    <p className="text-xs text-[#B4B9C1] lg:ml-9">Terms and conditions   |   Privacy policy</p>

    </div>
    </div>
</footer>

    </>
  )
}

export default Footer
