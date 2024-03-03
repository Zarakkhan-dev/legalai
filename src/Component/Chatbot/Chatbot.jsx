import React, { useState } from 'react'
import axios from 'axios';
import Chat from './Chat';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from "../../../public/Picture/LegalAI.png"
import Send_Message_Arrow from "../../../public/Picture/Send_Message_Arrow.png";
import Input_Image_Logo from "../../../public/Picture/Input_Image_Logo.png"
const Chatbot = () => {
  const router = useRouter();
  const [fields, updateFields] = useState("");
  const [chatbox, updatechatbox] = useState([]);
  const handler = (e) => {
    updateFields(e.target.value)
  }

  const submission = async (e) => {

    e.preventDefault();
    const response = await axios.post("http://127.0.0.1:8000/predict/", { fields });

    if (response) {
      updatechatbox([...chatbox, { person: fields, bot: response.data.response }])
      updateFields("");
    }
  }

  const newChat =()=>{
    alert("New Chat ALert");
    
  }
  return (
    <>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <aside
          className="sidebar w-64  transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-[#F4F4F4]"
        >
          <div className="sidebar-header flex items-center justify-center ">
            <div className="inline-flex justify-center ">
              <Image src={Logo} width={500} height={500} className='w-[50%] ' />
            </div>
          </div>
          <div className="sidebar-content px-4 py-6">
            <ul className="flex flex-col w-full">
              <li className="flex " onClick={newChat}>
                <span className="cursor-pointer ml-3 mt-[-5vh] border border-1 border-[#292A30] text-[#51555B]  rounded-full py-2 px-5 flex items-center gap-3"> <i className="fa-solid fa-plus text-[#2C60EA]"></i> New Chat </span>
              </li>
              <li className="">
                <span className="flex font-medium text-sm text-[#51555B] px-4 my-4 uppercase">Recent</span>
              </li>

            </ul>
          </div>
        </aside>
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in bg-[#F4F4F4]" >
          <header className="header  py-4 px-4" >
            <div className="header-content flex items-center  justify-end">

              <div className="flex ml-auto mt-6 ">
                <div className="User bg-[#51555B] mr-[7vh] py-3.5 px-4 rounded-full">
                  <i className="fa-solid fa-user-large fa-lg" style={{ color: "#F4F4F4" }}></i>
                </div>
              </div>
            </div>
          </header>
          <div className="main-content flex flex-col flex-grow p-4">
            <div
              className="chat-Room flex flex-col flex-grow   bg-white rounded-2xl mt-2 mb-6 mr-6"
            >
             <div className="Interface_Bot  p-10 h-[65vh] overflow-y-auto ">
             {chatbox.length ===0 ? <Welcome_Interface_Chat/>:   <Interface_Chat chatbox={chatbox}/>}
              </div>
              
          
              <form onSubmit={submission} >

                <div className=" flex  w-3/4 mx-auto  text-center items-center gap-3">
                <button className=" rounded-full ml-3 hover:opacity-70  text-[#51555B] flex justify-end" ><Image src={Input_Image_Logo} width={100} height={500} className='w-[25%]'/></button> 

                  <input
                    type="text"
                    onChange={handler} value={fields} placeholder='Enter The Promopt here ...'
                    className="flex-1 py-2 px-3 rounded-full bg-[#F4F4F4] focus:outline-none border-1 border-[#292A30] border"
                  />
                  <button className=" rounded-fullhover:opacity-70  text-[#51555B] " type='submit' ><Image src={Send_Message_Arrow} width={100} height={500} className='w-[25%]'/></button>      
                </div>
              </form>
              <h1 className='text-center'>Ai may display inaccurate info, including about people, so double-check its responses.</h1>

            </div>
          </div>

        </main>
      </div>
    </>
  )
}

export default Chatbot


const Welcome_Interface_Chat =()=>{
  return(
    <>
    <section className="Welcome-Screen-Chatbot w-[90%] mx-auto">
      <h1 className='text-[#2C60EA] text-4xl'>Hello again</h1>
      <p className='text-lg' >Tell me what’s on your mind, or pick a suggestion.</p>
      <div className="Welcome-Screen-Chatbot-Grid grid grid-cols-3 mt-7 gap-6">
        <div className="Grid-Bot-1 border border-[#292A30] py-6 px-9 rounded-2xl bg-[#F4F4F4]">
        <h1 className='text-[#2C60EA] text-3xl'>Understand</h1>
        <div className="Description mt-5 flex flex-col gap-4 ">
          <div className="Description-1 w-[60%] h-[4.5vh] rounded-3xl bg-white"></div>
          <div className="Description-1 w-[60%] h-[4.5vh] rounded-3xl bg-white"></div>
          <div className="Description-1 w-[60%] h-[4.5vh] rounded-3xl bg-white"></div>
        </div>
        </div>
        <div className="Grid-Bot-2 border border-[#292A30] py-6 px-9 rounded-2xl bg-[#F4F4F4]">
          <h1 className='text-[#2C60EA] text-3xl'>Create</h1>
          <div className="Description mt-5 flex flex-col gap-4 ">
          <div className="Description-1 w-[60%] h-[4.5vh] rounded-3xl bg-white"></div>
          <div className="Description-1 w-[60%] h-[4.5vh] rounded-3xl bg-white"></div>
          <div className="Description-1 w-[60%] h-[4.5vh] rounded-3xl bg-white"></div>
        </div>
        </div>
        <div className="Grid-Bot-3 border border-[#292A30] py-6 px-9 rounded-2xl bg-[#F4F4F4]">
          <h1 className='text-[#2C60EA] text-3xl'>Explore</h1>
          <div className="Description mt-5 flex flex-col gap-4 ">
          <div className="Description-1 w-[60%] h-[4.5vh] rounded-3xl bg-white"></div>
          <div className="Description-1 w-[60%] h-[4.5vh] rounded-3xl bg-white"></div>
          <div className="Description-1 w-[60%] h-[4.5vh] rounded-3xl bg-white"></div>
        </div>
        </div>
      </div>
    </section>
    </>
  )
}
const Interface_Chat =({chatbox})=>{
  return(
    <>
              {chatbox.map((items, index) => {
                return <Chat person={items.person} bot={items.bot} key={index} />
              })}
    
    </>
  )
}