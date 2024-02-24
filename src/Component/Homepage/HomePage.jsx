import React, { useState } from 'react'
import Image from 'next/image';
import header_pic from "../../../public/Picture/thom-holmes-J2e34-1CVVs-unsplash.jpg";
import axios from 'axios';
const HomePage = () => {

  const [email,Setemail] = useState("");

  const sendMail = async(e)=>{
    const response = await axios.post("api/email" ,{email});
    if(response.status === 202){
      alert(response.data);
    }
    else{
      alert("fault")
    }
  }
  return (
    <>
      <header>
      <div className="w-screen">

<div className="relative mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
  
  <div className="mx-auto mt-5 w-full max-w-xl md:mt-50 lg:max-w-screen-xl  ">
    <div className="mb-16 lg:mb-0 lg:max-w-lg">
      <div className="mb-6 max-w-xl">
        <div>
          <p className="bg-teal-accent-400 mb-2 inline-block rounded-full  py-px text-xs font-semibold uppercase tracking-wider text-[#F29F66]">Efficient Case</p>
        </div>
        <h2 className="mb-6 max-w-lg text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
        Simplify Legal Workflow AI Case Management
        </h2>
        <p className="text-base text-gray-700 md:text-lg">The software comes with AI management features to access data bases, assign tasks and track progress of various activities related to a case.</p>
      </div>

      <div className="header-email-box  flex ">
        <span className='border-[#3292A30] border-[1px] rounded-3xl py-1 flex'>
        <input type="email" name="email" id="" placeholder='Email Address' className='ml-5 w-[40vh] outline-none' onChange={(e)=>Setemail(e.target.value)} value={email}/>
        <div className="icon bg-[#2C60EA] rounded-full py-2 px-3  mx-[5px] cursor-pointer" onClick={sendMail}>
        <i className="fa-solid fa-paper-plane " style={{color:"white"}}></i>
        </div>
        </span>
      </div>
      <div className="flex items-center bg-slate-500">

      </div>
    </div>
  </div>

  <div className="header-flex-2 flex h-full w-full space-x-3  px-2 md:justify-end ">
  
   
    <div className="Header-image  w-[60%] h-[50vh] flex-col space-y-3 md:mt-20 lg:flex ">
     
      <Image src={header_pic} width={500} height={500} alt='pic' className=' w-[100%] h-[100%] rounded-[6vh] ' />
    </div>
  </div>

</div>
</div>
      </header>

      <div className="partener-section mt-[15vh]">
        <h1 className='text-center text-2xl font-semibold'>Partnered with over 50 bar associations</h1>
      </div>
    </>
  )
}

export default HomePage
