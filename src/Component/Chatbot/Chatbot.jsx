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
       <div className="main_Screen  ">
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
        </div>
    
    
    </>
  )
}

export default Chatbot
