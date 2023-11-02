
import {Data} from './clubsInfo.js'

import { Swiper, SwiperSlide } from 'swiper/react'; 
import {  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Pagination, Autoplay } from 'swiper';

import './clubs.css'


export default function Slider() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const navigate = useNavigate();
    return (
      <div className='mt-[-40px] flex items-center justify-center flex-col h-screen px-6' data-aos="fade-right" data-aos-anchor="top-center">
        <h1 className='heading  text-2xl sm:text-3xl lg:text-6xl  text-yellow-600 tracking-wide mb-6 px-1 text-center'>SONABYSS CLUBS PRESENTS</h1>
        <p className='cosplayText text-center ml-5 pb-8 pt-4 text-sm lg:text-2xl text-white'>Sonabyss allow participation of massive Events!! Register Yourself Now
        </p>
        <p className='cosplayText text-center ml-5 pb-8 pt-4 text-sm lg:text-2xl text-white'>Click to View Events</p>

        <Swiper 
        
        breakpoints={{
                          340:
                                {
                                    slidesPerView:2,
                                    spaceBetween:15
                                },
                          700:
                              {
                                slidesPerView:3,
                                spaceBetween:15
                              }
                      }}
                      
        freeMode={true}
        autoplay={{delay:1000}}
        pagination={{clickable:true}}
        modules={[FreeMode, Pagination, Autoplay]}
                      
      className='max-w-[90%] lg:max-w-[80%]'
        
        
      >

                    {
                      Data.map((item)=>(

                        <SwiperSlide key={item.Title}>
                          <div onClick={() =>{navigate(`${item.url}`)}}  className='flex flex-col gap-6 relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w[215px] lg:h-[400px] lg:w-[350px] cursor-pointer'>

                                            <div  className='absolute inset-0 bg-cover bg-center rounded-lg'  style={{backgroundImage:`url(${item.backgroundImage})`}}/>
                                            <div className='absolute inset-0 bg-black opacity-10 hover:opacity-50' />
                                            <div className='relative flex flex-col gap-3'>
                                                {/* <h1 className='text-xl lg:text-2xl text-[#B68973]'>{item.Title}</h1>
                                                <p className='lg:text-[18px] text-[#FAF3E0]'>{item.content}</p> */}
                                                {/* <p className='lg:text-[18px] text-[#FAF3E0]'>Click to View Events</p> */}
                                            </div>
                                          
                          </div>

                        </SwiperSlide>
                      ))
                    }




</Swiper>
        </div>
    );
}

