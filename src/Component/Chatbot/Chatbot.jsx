import React, { useState } from 'react'
import axios from 'axios';
import Chat from './Chat';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from "../../../public/Picture/LegalAI.png"
const Chatbot = () => {
    const router = useRouter();
    const [fields,updateFields] =useState("");
    const[chatbox,updatechatbox] = useState([]);
    const handler=(e)=>{
        updateFields(e.target.value)
    }

    const submission=async(e)=>{

        e.preventDefault();
        const response = await axios.post("http://127.0.0.1:8000/predict/",{fields});

        if(response){          
            updatechatbox([...chatbox,{person:fields,bot:response.data.response}])
            updateFields("");
        }
    }
  return (
    <>
       {/* <div className="main_Screen  ">
        <div className="menubar flex justify-between p-2 place-items-center">
          <Image src={logo} width={125} height={250}/>
          <button onClick={()=>router.push("/")} className='bg-[#2C60EA] text-white font-semibold py-2 px-3 rounded'>Logout</button>
        </div>
        <div className="ChatRoom ">
        <div className="message_container_1">
         {chatbox.map((items,index)=>{
           return  <Chat person={items.person} bot={items.bot} key={index} />
         })}
         <chat/>
        </div>

        <form onSubmit={submission} >
            <div className="container">
            <input type="text" name="message" id="" onChange={handler} value={fields} placeholder='Enter The Promopt here'/>
            <button type='submit'><i className="fa-solid fa-paper-plane"></i></button>
            </div>
        </form>
      
        </div>
        </div> */}
    
    <div className="Chatbot-Interface w-full h-full grid grid-cols-2 overflow-hidden">
      <section className='Sidebar   w-[30%] '> 
      <aside class="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
  <a href="#" className='flex justify-center'>
    <Image src={logo} width={500} height={500} className='w-[60%]' />
  </a>
  <div class="mt-6 flex flex-1 flex-col justify-between">
    
    <div class="mt-6">
    
      <div class="mt-6 flex items-center justify-between">
        <a href="#" class="flex items-center gap-x-2">
          <img
            class="h-7 w-7 rounded-full object-cover"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="avatar"
          />
          <span class="text-sm font-medium text-gray-700">Zarak Khan</span>
        </a>
        <a
          href="#"
          class="rotate-180 text-gray-800 transition-colors duration-200 hover:text-gray-900"
        >
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
            class="h-5 w-5"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </a>
      </div>
    </div>
  </div>
</aside>
      </section>
        <div className="chatbot-Interface">

         
        </div>
    </div>
    </>
  )
}

export default Chatbot
