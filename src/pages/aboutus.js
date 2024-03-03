import About from '@/Component/AboutPage/About'
import Footer from '@/Component/Footer/Footer'
import Navbar from '@/Component/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import Head from "next/head";
const aboutus = () => {
  return (
   <>
    <Head>
        <title>About us</title>
      </Head>
   <Navbar/>
    <About/>
   <Footer/>
   </>
  )
}

export default aboutus
