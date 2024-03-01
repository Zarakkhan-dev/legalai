import About from '@/Component/AboutPage/About'
import Footer from '@/Component/Footer/Footer'
import Navbar from '@/Component/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'

const aboutus = () => {
  return (
   <>
   <Navbar/>
    <About/>
   <Footer/>
   </>
  )
}

export default aboutus
