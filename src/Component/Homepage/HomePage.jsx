import React, { useState } from 'react'
import Image from 'next/image';
import header_pic from "../../../public/Picture/Header_Image.png";
import axios from 'axios';
import Punjab_Bar_Council from "../../../public/Picture/Punjab_Bar_Council.png"
import Tuf_logo from "../../../public/Picture/Tuf_logo.png";
import Home_Page_Detail_1 from "../../../public/Picture/Home_Page_Detail_1.png"
import Home_Page_Detail_2 from "../../../public/Picture/Home_Page_Detail_2.png"
import Gallery_1 from '../SwiperSlider/Gallery_1';
import Link from 'next/link';
import Gallery_2 from '../SwiperSlider/Gallery_2';
import Trail_Image from "../../../public/Picture/Trail_Section_Image.png"
import Footer from '../Footer/Footer';
import { useRouter } from 'next/router';
const HomePage = () => {

  const [email, Setemail] = useState("");
const router = useRouter();
  const sendMail = async (e) => {
    Setemail("")
    const response = await axios.post("api/email", { email });
    if (response.status === 202) {
        alert("Thank you for subscribe our newsleter")
    }
  }
  return (
    <>
      <header className='HomePage '>
        <section>

          <div className="relative mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">

            <div className="mx-auto mt-5 w-full max-w-xl md:mt-50 lg:max-w-screen-xl  ">
              <div className="mb-16 lg:mb-0 lg:max-w-lg">
                <div className="mb-6 max-w-xl">
                  <div>
                    <p className="bg-teal-accent-400 mb-2 inline-block rounded-full  py-px text-xs font-semibold uppercase tracking-wider text-[#F29F66]">Efficient Case</p>
                  </div>
                  <h2 className="Title_Name mb-6 max-w-lg text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl sm:leading-snug">
                  AI Legal Genius: Decision Facilitator Extraordinaire!

                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
Revolutionize your legal approach with the AI Legal Assistant! This cutting-edge tool, powered by advanced artificial intelligence, is your all-in-one solution for swift access to legal information, insightful analysis, and invaluable perspectives. Say goodbye to the complexities of legal research </p>
                </div>

                <div className="header-email-box  flex  ">
                  <span className='border-[#3292A30] border-[1px] rounded-3xl py-1 flex ml-[5vh]'>
                    <input type="email" name="email" id="" placeholder='Email Address' className='ml-5 w-[33vh] outline-none' onChange={(e) => Setemail(e.target.value)} value={email} />
                    <div className="icon bg-[#2C60EA] rounded-full py-2 px-3  mx-[5px] cursor-pointer" onClick={sendMail}>
                      <i className="fa-solid fa-paper-plane " style={{ color: "white" }}></i>
                    </div>
                  </span>
                </div>
                <div className="flex items-center mt-6 gap-3 ml-9">
                  <div className="stars flex gap-2">
                    <i className="fa-solid fa-star fa-xl" style={{ color: '#F5A620' }}></i>
                    <i className="fa-solid fa-star fa-xl" style={{ color: '#F5A620' }}></i>
                    <i className="fa-solid fa-star fa-xl" style={{ color: '#F5A620' }}></i>
                    <i className="fa-solid fa-star fa-xl" style={{ color: '#F5A620' }}></i>
                    <i className="fa-solid fa-star fa-xl" style={{ color: '#F5A620' }}></i>
                  </div>
                  <p className=' font-normal text-lg'>Rated 5 star by satisfied clients</p>
                </div>
              </div>
            </div>

            <div className="header-flex-2 flex h-full w-full space-x-3  px-2 md:justify-end ">
              <div className="Header-image  w-[100%] h-[100%] flex-col space-y-0 md:mt-1  ">
                <Image src={header_pic} width={500} height={500} alt='pic' className=' w-[100%] h-[100%]  ' />
              </div>
            </div>

          </div>
        </section>
      </header>

      <div className="partener-section mt-[15vh]">
        <h1 className='text-center text-2xl font-semibold'>Partnered with over 2 bar associations</h1>
        <div className="Parteners w-[80%] mx-auto flex justify-center gap-9 mt-10 items-center">
          <Image src={Punjab_Bar_Council} width={100} height={100} />
          <Image src={Tuf_logo} width={150} height={150} />
        </div>
      </div>
      <section className='Detail-Section-1  '>
        <div className="Detail-Section-Image-1 ">
          <Image src={Home_Page_Detail_1} width={1500} height={1500} className='w-[100%] h-[100%]' />
        </div>
        <div className="Detail-Section-content flex flex-col  place-items-start w-[60%] mt-10">
          <h1 className='text-[#F29F66]'>Fast Track</h1>
          <h1 className=" text-4xl Title_Name">Empowerment Unleashed: Elevate with AI Legal Wisdom</h1>
          <p className='my-3'>Step into a Future of Effortless Legal Tasks: Streamlined, Automated, and Accessible to All</p>
          <ul >
            <li>Experience User-Friendly Design, Tailored for Any Legal Background.</li>
            <li>Supercharge Productivity and Elevate Client Service with Our Intelligent Legal Research and Analysis Tools.</li>
            <li>Unlock case potential with <span className='font-bold'>machine learning</span> , making confident decisions informed by insights.</li>
          </ul>
          <button className='mt-4 py-3 px-10 bg-[#2C60EA] text-white font-semibold rounded-full '>See Product Description  <i className="fa-solid fa-arrow-right ml-6 rotate-[-45deg]"></i></button>
        </div>
      </section>

      <section className='Detail-Section-2 grid grid-cols-2  w-[60%] mx-auto justify-center p-1 items-center '>
        <div className="Detail-Section-2-Content flex flex-col  place-items-start  mt-0">
          <h1 className='text-[#F29F66]'>Easily Generate</h1>
          <h1 className=" text-4xl Title_Name">Organize Effortlessly with AI Legal Assistant.</h1>
          <p className='my-3'>Navigate Legal Challenges with Confidence. Partner with AI Legal Assistant for the Future of Empowerment.</p>
          <ul >
            <li> <span className='font-bold'>Optimized Efficiency:</span> Streamline your workflow, save hours through automated legal research. Focus on building a robust case.</li>
            <li><span className='font-bold'>Empowered Confidence:</span>  Navigate legal complexities with a deeper understanding of your rights and options. The AI Legal Assistant guides you for informed decisions on your legal journey.</li>
            <li><span className='font-bold'>Stay Informed at Every Turn:</span> Our AI engine is always adapting and evolving, guaranteeing you immediate access to the most up-to-date legal information.</li>
          </ul>
          <button className='mt-4 py-3 px-10 bg-[#2C60EA] text-white font-semibold rounded-full '>See Product Description   <i className="fa-solid fa-arrow-right ml-6 rotate-[-45deg] "></i></button>
        </div>
        <div className="Detail-Section-2-Image w-[100%] h-[100%] flex justify-center ml-[10vh] mt-[5vh] items-center">
          <Image src={Home_Page_Detail_2} width={600} height={500} alt='Image' className='w-[100%] h-[100%]  object-cover' />
        </div>
      </section>

      <section className="slider-1 my-12">
        <h1 className='text-center text-3xl text-[#F29F66] my-2'>AI Legal Assistant</h1>
        <h1 className='text-center text-4xl Title_Name'>Do More With AILegal <span className='text-xl'>Assistant</span></h1>
        <p className='text-center'>We have the details covered, so you can worry less.</p>
      </section>
      <Gallery_1 />
      <Gallery_2 />
      <section className='relative'>
        <section className="Trial-Section bg-[#F8F8F8]  w-[70%] mx-auto  grid grid-cols-2 justify-center items-center rounded-3xl">
          <div className="Trial-Section-Content flex flex-col  w-[80%] ml-auto items-start">
            <h1 className='text-4xl'>Revolutionize Your Workflow with Us!</h1>
            <p className='my-4 text-lg'>Start your 14 days free trial today.</p>
            <span  className='bg-[#2C60EA] text-white font-semibold py-3 px-6 rounded-3xl cursor-pointer' onClick={()=>router.push("/signin")}>
              <p>Start Now <i className="fa-solid fa-arrow-right ml-6 rotate-[-45deg] "></i></p>
            </span>
          </div>
          <div className="Trail-Section-Image">
            <Image src={Trail_Image} width={500} height={500} className=' h-[70%]' />
          </div>
        </section>
        <div className="rigid bg-[#1F232E] w-[100%] h-[30vh] absolute"></div>
      </section>
      <Footer />
    </>
  )
}

export default HomePage
