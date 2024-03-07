import React from 'react'
import Image from 'next/image'
import header_pic from "../../../public/Picture/Header_Image.png";
import { useRouter } from 'next/router';
const About = () => {

  const router = useRouter();
  return (
 
<div className=" About-Section">

<div className="relative mx-auto flex flex-col  sm:max-w-xl md:max-w-screen-xl md:flex-row">

  <div className="mx-auto  w-full max-w-xl md:mt-10 lg:max-w-screen-xl">
    <div className="mb-16 lg:mb-0 lg:max-w-lg">
      <div className="mb-6 max-w-xl">
        <div>
          <p className="bg-teal-accent-400 mb-2 inline-block rounded-full py-px text-xs font-semibold uppercase tracking-wider text-[#F29F66]">Chatbot </p>
        </div>
        <h2 className="mb-6 max-w-lg text-4xl font-bold tracking-tight text-slate-700 sm:text-6xl sm:leading-snug">
          <span className="inline-block font-bold Title_Name">Driven by data, powered by AI, controlled  <span className='text-[#2C60EA]'>by you</span></span>
        </h2>
      </div>
      <div className='my-8 ml-14'> 
        <span  className='bg-[#2C60EA] text-white font-medium  text-lg py-4 px-8 rounded-full cursor-pointer' onClick={()=> router.push("/chatbot")}>
        Click here to try chatbot <i className="fa-solid fa-arrow-right ml-6 rotate-[-45deg] "></i>
        </span>
      </div>
      <div className="flex  ml-14 gap-6">
        <div className="Disc-1 text-[#51555B] flex items-center gap-3"> <i className="fa-solid fa-check"></i>Free 14-day trial</div>
        <div className="Disc-2 text-[#51555B] flex items-center gap-3"><i className="fa-solid fa-check"></i>No credit card required</div>
      </div>
    </div>
  </div>

  <div className="flex h-full w-full space-x-3 overflow-hidden px-2 md:justify-center">

  <div className="Header-image  w-[100%] h-[100%] flex-col space-y-0 md:mt-1  ">
     
     <Image src={header_pic} width={500} height={500} alt='pic' className=' w-[100%] h-[100%]  ' />
   </div>
  </div>

</div>
</div>


  )
}

export default About
