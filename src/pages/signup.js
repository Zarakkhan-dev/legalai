
import Signup from '@/Component/Signup/Signup'
import React from 'react'
import Navbar from "@/Component/Navbar/Navbar"
import Footer from '@/Component/Footer/Footer'

const signup = () => {
  return (
    <>
   
    <Navbar/>
    <Signup/>
    <div className="Footer-Section mt-8">
    <Footer/>
    </div>
    </>
  )
}

export default signup
