
import insta from "../assets/instagram.png";
import yt from "../assets/youtube.png";
import email from "../assets/email.png";
import home from "../assets/home.png";

import { Data } from './sponsor.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper';

import './footer.css'
import { Link } from "react-router-dom"



const Footer = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen px-2 py-10">
            <div className="">


                <div className='mt-[-40px] flex  items-center justify-center flex-col h-[300px]  lg:h-[430px]' >
                    <h1 className='footerHeader text-center text-white my-4 text-lg sm:text-xl md:text-3xl'>Our Sponsors</h1>


                    <Swiper

                        breakpoints={{
                            340:
                            {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            700:
                            {
                                slidesPerView: 5,
                                spaceBetween: 15
                            }
                        }}

                        freeMode={true}
                        autoplay={{ delay: 1000 }}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Autoplay]}

                        className='min-w-[90%] lg:min-w-[80%]'


                    >

                        {
                            Data.map((item) => (

                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className='flex flex-col gap-6 h-[60px] w-[60px] relative shadow-lg text-white rounded-full px-6 py-8  lg:h-[100px] lg:w-[100px] cursor-pointer '>

                                            <div className='absolute inset-0 bg-cover bg-center rounded-full' style={{ backgroundImage: `url(${item.backgroundImage})` }} />




                                        </div>
                                        <p className=' z-10 text-center font-bold  text-sm lg:text-md text-white'>{item.Title}</p>



                                    </div>



                                </SwiperSlide>
                            ))
                        }




                    </Swiper>
                </div>


                <div className="footer px-10 rounded-2xl">
                    <div className="flex flex-col lg:flex-row gap-4  md:gap-24 px-10 py-4 items-start lg:items-start lg:justify-center backdrop-blur-[5px]">



                        <div className="w-[100px]">
                            <h2 className="footHead text-left lg:text-center text-2xl md:text-3xl ">About</h2>
                            <p className="md:text-lg text-sm text-left md:text-center">Page Developed by Neristians</p>
                        </div>

                        <div className="w-[100px]">
                            <h2 className="footHead text-left md:text-center text-2xl md:text-3xl ">Pages</h2>
                            <Link className="text-lg md:text-xl text-[#7fffd4]" to='/organiser'>Organiser</Link>

                        </div>

                        <div className="flex flex-col w-[150px] gap-6">
                            <h2 className="footHead text-left lg:text-center text-2xl lg:text-3xl ">Contact</h2>

                            <div className="flex">

                                <img src={email} alt="avatar"></img>
                                <p className="text-center">sonabyss2k23@yahoo.com</p>
                            </div>


                            <div className="flex gap-2">

                                <img className="h-6" src={home} alt="avatar"></img>
                                <p>NERIST, Nirjulli Arunachal Pradesh</p>
                            </div>
                        </div>

                        <div className="w-[150px]">
                            <h2 className="footHead text-left md:text-center text-2xl md:text-3xl ">Follow Us</h2>
                            <div className="flex gap-2 mt-2 items-center justify-center">
                                <Link to="https://instagram.com/sonabyss2k23?igshid=MzRlODBiNWFlZA=="><img className="h-6" src={insta} alt="avatar"></img></Link>
                                <Link> <img className="h-6" src={yt} alt="avatar"></img></Link>
                            </div>
                        </div>



                    </div>
                    <h1 className='custom drop-shadow-xl relative top-[-550px] md:top-[-850px] lg:top-[-340px] left-[0%] z-[-10] text-4xl md:text-6xl lg:text-8xl font-bold text-center bg-gradient-to-r from-[#7410ef] to-[#8634ea] bg-clip-text text-transparent'>THROUGH THE AGES</h1>



                </div>




















            </div>
        </div>
    )
}

export default Footer;
