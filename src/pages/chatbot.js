import Chatbot from '@/Component/Chatbot/Chatbot'
import React from 'react'
import Head from "next/head";
const chatbot = () => {
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
