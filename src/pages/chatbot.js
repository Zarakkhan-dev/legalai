import Chatbot from '@/Component/Chatbot/Chatbot'
import React from 'react'
import Head from "next/head";
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const chatbot = () => {
  const router = useRouter();
  const { id } = router.query;
  async  function Token_verify(){
    let token = localStorage.getItem("accessToken")
    console.log(token);
    const response =  await axios.post("api/verify_token",{token});

    if(response.status ===201){
  
    } 
    }
  useEffect(()=>{

    alert(id);
    Token_verify();
  },[])
  return (
    <>
     <Head>
        <title>AI-Chatbot </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LegalAI.png" type="image/png" sizes="128 x 128"  />
      </Head>
    <Chatbot/>
    </>
  )
}

export default chatbot
