
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation,Pagination } from 'swiper/modules';
import Review_1 from "../../../public/Picture/Review_1.jpg";
import Review_2 from "../../../public/Picture/Review_2.jpg";
import Image from 'next/image';
import Mark_quote_icon  from "../../../public/Picture/Mark_quote_icon.png";
const Gallery_2 = () => {
  return (
   <>
<div className="gallery-2 mb-10">

<Swiper navigation={true}
  
  pagination={{
   dynamicBullets: true,
 }}
modules={[Navigation,Pagination]} className="swiper">
       <SwiperSlide >
         <section className="Testimonial-1 grid grid-cols-2 justify-center gap-[14vh]">
            <div className="Reviews">
                <h1 className='text-[#F29F66] text-2xl'> 1 lakh</h1>
                <h1 className='text-4xl w-[80%] mt-3 Title_Name'>Word of praise from our users.</h1>
                <div className="Message bg-[#FFEEE2] py-[11vh] mt-[13vh] px-10 rounded-3xl relative">
               <p className='text-xl'> AI Legal Assistant has significantly helped me tackle with the loopholes in laws. It's like lawyer training for a better presentation in court. Suggestions from AI Legal Assistant make me more confident in myself</p>
                <Image  src={Mark_quote_icon } width={500} height={500} className='w-[30%] absolute rotate-180 top-[-80px] left-[70px]'/>
                </div>
            </div>
            <div className="Image rounded-2xl">
            <Image src={Review_1} width={500} height={500} className='rounded-2xl ' />
            </div>
         </section>
       </SwiperSlide>
       <SwiperSlide>
       <section className="Testimonial-1 grid grid-cols-2 justify-center gap-[14vh]">
            <div className="Reviews">
                <h1 className='text-[#F29F66] text-2xl'> 1 lakh</h1>
                <h1 className='text-4xl w-[80%] mt-3 Title_Name'>Word of praise from our users.</h1>
                <div className="Message bg-[#FFEEE2] py-[11vh] mt-[13vh] px-10 rounded-3xl relative">
               <p className='text-xl'> For a multitasker individual like a legal professional, errors are inevitable but AI Legal Assistant is a saviour for me as it helps me with quick solutions whenever I am stuck or confused. </p>
                <Image  src={Mark_quote_icon } width={500} height={500} className='w-[30%] absolute rotate-180 top-[-80px] left-[70px]'/>
                </div>
            </div>
            <div className="Image rounded-2xl">
            <Image src={Review_2} width={600} height={500} className='rounded-2xl ' />
            </div>
         </section>
        </SwiperSlide>
        <SwiperSlide>
       <section className="Testimonial-1 grid grid-cols-2 justify-center gap-[14vh]">
            <div className="Reviews">
                <h1 className='text-[#F29F66] text-2xl'> 1 lakh</h1>
                <h1 className='text-4xl w-[80%] mt-3 Title_Name'>Word of praise from our users.</h1>
                <div className="Message bg-[#FFEEE2] py-[11vh] mt-[13vh] px-10 rounded-3xl relative">
               <p className='text-xl'>It is the first time in Pakistan that I have heard of such an intelligent system in the judicial field. It is just the need of the hour </p>
                <Image  src={Mark_quote_icon } width={500} height={500} className='w-[30%] absolute rotate-180 top-[-80px] left-[70px]'/>
                </div>
            </div>
            <div className="Image rounded-2xl">
            <Image src={Review_2} width={600} height={500} className='rounded-2xl ' />
            </div>
         </section>
        </SwiperSlide>
      
     </Swiper>
     </div>
   </>
  )
}

export default Gallery_2
