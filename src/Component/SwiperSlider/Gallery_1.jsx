import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';
import Image_1 from "../../../public/Picture/illustration-02.png";
import Image_2 from "../../../public/Picture/illustration-03.png";
import Image_3 from "../../../public/Picture/illustration-04.png"
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
         <section className="card bg-[#f1efef] flex justify-center items-center flex-col rounded-2xl pb-8">
           <div className="ImageTag   flex">
         <Image src={Image_1} className='h-56  object-cover' />
         </div>
         <h1 className='text-center font-medium text-2xl w-[70%]'>Available data of previous cases</h1>
         <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
        <div className="Links mt-5">
         <Link href='/' className='text-[#2C60EA]'>
         See Previous Data <i className="fa-solid fa-arrow-right"></i>
         </Link>
         </div>
         </section>
       </SwiperSlide>
       <SwiperSlide><section className="card bg-[#f1efef] flex justify-center items-center flex-col rounded-2xl pb-8">
           <div className="ImageTag   flex">
         <Image src={Image_2} className='h-56  object-cover' />
         </div>
         <h1 className='text-center font-medium text-2xl w-[70%]'>Intelligent system for help</h1>
         <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
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
         <h1 className='text-center font-medium text-2xl w-[70%]'>Security you can count on</h1>
         <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
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
         <h1 className='text-center font-medium text-2xl w-[70%]'>Security you can count on</h1>
         <p className='text-center w-[70%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
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
