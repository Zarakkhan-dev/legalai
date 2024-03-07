
import Signup from '@/Component/Signup/Signup'
import React from 'react'
import Navbar from "@/Component/Navbar/Navbar"
import Footer from '@/Component/Footer/Footer'
import Head from "next/head";
import { useEffect ,useState} from "react";
const signup = () => {
  const [Loading_Page,setPage] =useState("");
  const delayedFunction =()=>{
    setPage("True")
  }
  useEffect(()=>{
    const timeoutId = setTimeout(delayedFunction, 3000);

  
    return () => clearTimeout(timeoutId);
  })
  
  return (
    <>
   <Head>
        <title>Legal Ai-Signup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LegalAI.png" type="image/png" sizes="128 x 128"  />
      </Head>
      {Loading_Page ==="False"?<Screen_Loading/> :(
      <>
      <Navbar/>
      <Signup/>
    <div className="Footer-Section mt-8">
    <Footer/>
    </div>
      </>
      )}
    </>
  )
}

export default signup
