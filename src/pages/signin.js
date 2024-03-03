
import Signin from '@/Component/Signin/Signin'
import React from 'react'
import Navbar from "@/Component/Navbar/Navbar"
import Footer from '@/Component/Footer/Footer'
import Head from "next/head";
const signin = () => {
  return (
    <>
     <Head>
        <title>Legal Ai-Signin</title>
      </Head>
    <Navbar/>
    <Signin/>
    <div className="Footer-Section mt-[12vh]">
    <Footer/>
    </div>
    </>
  )
}

export default signin
