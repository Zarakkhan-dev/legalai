import Chatbot from '@/Component/Chatbot/Chatbot'
import React from 'react'
import Head from "next/head";
import axios from 'axios';
import { useEffect ,useState} from 'react';
import { useRouter } from 'next/router';
import Screen_Loading from "@/Component/Screen_Loading/Screen_Loading";
const chatbot = () => {
  const router = useRouter();
  const { id } = router.query;
  async  function Token_verify(){
    let token = localStorage.getItem("accessToken")
    const response =  await axios.post("api/verify_token",{token});
    if(response.status ===201){
      
    }else{
      router.push("/")
    }
    }
  useEffect(()=>{

    
    Token_verify();
  },[])
  const [Loading_Page,setPage] =useState("");
  const delayedFunction =()=>{
    setPage("True")
  }
  useEffect(()=>{
    const timeoutId = setTimeout(delayedFunction, 2000);
    return () => clearTimeout(timeoutId);
  })
  return (
    <>
     <Head>
        <title>AI-Chatbot </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LegalAI.png" type="image/png" sizes="128 x 128"  />
      </Head>
      {Loading_Page ===""?<Screen_Loading/> :(
      <>
      <div className='Section_Chat-bot overflow-hidden h-screen'>
      <Chatbot/>
      </div>
      </>
      )}
    </>
  )
}

export default chatbot
