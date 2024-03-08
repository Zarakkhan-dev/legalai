import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';
import Image_1 from "../../../public/Picture/Slider_Image_1.png";
import Image_2 from "../../../public/Picture/Slider_Image_2.png";
import Image_3 from "../../../public/Picture/Slider_Image_3.png"
import Link from 'next/link';


const Gallery_1 = () => {
  return (
  <>
<div className="gallery-1 mb-10">

<Swiper navigation={true}
   slidesPerView={3}
   spaceBetween={30}
  pagination={{
   dynamicBullets: true,
 }}
modules={[Navigation,Pagination]} className="swiper">
       <SwiperSlide >
         <section className="card bg-[#f1efef] flex justify-center items-center flex-col rounded-2xl pb-9">
           <div className="ImageTag   flex">
         <Image src={Image_1} className='h-56  object-cover' />
         </div>
         <h1 className='text-center font-medium text-2xl w-[70%]'>Seamless Document Comprehension</h1>
         <p className='text-center w-[79%] text-sm'>Swiftly analyze legal documents, contracts, or case files with our AI engine, delivering clear and concise summaries within seconds. </p>
        <div className="Links mt-5">
         <Link href='/' className='text-[#2C60EA]'>
         See Previous Data <i className="fa-solid fa-arrow-right"></i>
         </Link>
         </div>
         </section>
       </SwiperSlide>
       <SwiperSlide><section className="card bg-[#f1efef] flex justify-center items-center flex-col rounded-2xl pb-10 ">
           <div className="ImageTag   flex">
         <Image src={Image_2} className=' h-52  object-cover h-' />
         </div>
         <h1 className='text-center font-medium text-2xl w-[70%]'>Smart Suggestions</h1>
         <p className='text-center w-[75%] text-sm'>Navigate Legal Complexities with Ease: The AI Legal Assistant analyzes your case, suggesting relevant acts, case laws, and judgments—saving you time and effort on research. </p>
        <div className="Links mt-5">
         <Link href='/' className='text-[#2C60EA]'>
         See AI Legal Assistant <i className="fa-solid fa-arrow-right ml-6 rotate-[-45deg] "></i>
         </Link>
         </div>
         </section></SwiperSlide>
       <SwiperSlide><section className="card bg-[#f1efef] flex justify-center items-center flex-col rounded-2xl pb-8">
           <div className="ImageTag   flex">
         <Image src={Image_3} className='h-56  object-cover' />
         </div>
         <h1 className='text-center font-medium text-2xl w-[70%]'>Fingertip Predictive Power Unleashed</h1>
         <p className='text-center w-[75%] text-sm'>Ease Case Worries: Harness machine learning for valuable insights into potential outcomes based on historical data. </p>
        <div className="Links mt-5">
         <Link href='/' className='text-[#2C60EA]'>
         Learn about security<i className="fa-solid fa-arrow-right ml-6 rotate-[-45deg] "></i>
         </Link>
         </div>
         </section></SwiperSlide>
       <SwiperSlide><section className="card bg-[#f1efef] flex justify-center items-center flex-col rounded-2xl pb-8">
           <div className="ImageTag   flex">
         <Image src={Image_1} className='h-56  object-cover' />
         </div>
         <h1 className='text-center font-medium text-2xl w-[70%]'>Legal Access Made Simple for Everyone</h1>
         <p className='text-center w-[75%] text-sm'>From Seasoned Attorneys to First-Time Legal Encounters, AI Legal Assistant Ensures User-Friendly Accessibility for All. </p>
        <div className="Links mt-5">
         <Link href='/'  className='text-[#2C60EA]'>
         See Product Description <i className="fa-solid fa-arrow-right ml-6 rotate-[-45deg] "></i>
         </Link>
         </div>
         </section></SwiperSlide>
      
     </Swiper>
     </div>
  </>
  )
}

export default Gallery_1
