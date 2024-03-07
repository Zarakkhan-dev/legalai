import About from '@/Component/AboutPage/About'
import Footer from '@/Component/Footer/Footer'
import Navbar from '@/Component/Navbar/Navbar'
import Screen_Loading from "@/Component/Screen_Loading/Screen_Loading";
import React from 'react'
import Head from "next/head";
import { useEffect ,useState} from "react";
const aboutus = () => {
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
        <title>About us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/LegalAI.png" type="image/png" sizes="128 x 128"  />
      </Head>
      {Loading_Page ===""?<Screen_Loading/> :(
      <>
      <Navbar/>
      <About/>
   <Footer/>
      </>
      )}

   </>
  )
}

export default aboutus
