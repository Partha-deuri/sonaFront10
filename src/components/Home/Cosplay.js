

//materials for 3d //

import rocket from "../assets/home/rocket.png"

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Monk from './Kyuko.jsx'
import {Link} from 'react-router-dom'
import Ufo from "./Ufo.jsx"



export default function Sonabyss() {




  return (

    <section className="min-h-screen py-14 mb-6 px-2 "  data-aos='fade-up-right' data-aos-delay="10">
     

      <div className="container relative lg:top-[100px] mx-auto h-[800px] sm:h-[800px] md:h-[1000px] lg:h-[600px] shadow-2xl rounded-lg bg-[#85C1E9] py-20">

        <div className='w-full rounded-[25px] min-h-screen px-12 pb-12 flex flex-col text-center lg:flex-row xl:items-center lg:justify-center xl:text-left xl:gap-x-[60px] xl:pb-0'>

        <div className=' flex-1 items-center mb-6 justify-center text-center lg:pr-12 lg:py-5 xl:relative xl:top-[-150px] '>
            <h2 className='cosplayHeading  text-xl sm:text-3xl md:text-4xl lg:text-6xl  text-yellow-600 tracking-wide mb-6 px-1 text-center'>
              COSPLAY
            </h2>
            <p className='cosplayText max-w-[474px] text-center text-[#B68973] text-[9px] mob:text-[13px] leading-4 sm:text-lg lg:text-sm mx-auto xl:mx-0 tracking-wide  '>

              Gear up and paint your faces with beautiful design. Show us on <span className='myCoSpan text-pink-500 font-bold'>11th november</span>.Get your costume and hit us with your
              <span className='myCoSpan text-pink-500 font-bold'> punch line</span>. <br></br> This is the time, this the place, Sonabyss cosplay is where 
              you will shine.
              <br></br>
               To show us your costume register now.
            </p>
           
            <button className='mt-4 rounded-md px-2 py-1 bg-[#FAF3E0] hover:bg-[#ffffff] text-center cursor-default'>
                <Link className='but1 text-[#E19898] font-seminormal md:text-xl tracking-widest text-center bg-[#FAF3E0] hover:bg-[#ffffff] rounded-md py-1 px-1' to="/sonabyss/cosplay">Register</Link>
            </button>


          </div>

          <h1 className='custom absolute z-[-] top-[400px] sm:top-[500px] sm:left-[20%] md:top-[500px] lg:top-[300px]  lg:left-[40%] md:left-[11%] left-[10%] drop-shadow-xl text-5xl md:text-8xl lg:text-8xl font-bold text-center bg-gradient-to-r from-[#85C1E9] to-[#85C1E9] bg-clip-text text-transparent'>THE FUTURE</h1>

          <div className='flex-1  items-center justify-center'>
            <div className='h-[450px] md:py-4 lg:ml-[20px] md:px-10 md:h-[780px] md:w-[550px] rotate-2 w-full flex items-center justify-center lg:relative lg:top-[0px] lg:left[20px]'>

              <Canvas className='relative pb-5 md:right-20 md:left-[2px]' >
                

                <PerspectiveCamera makeDefault position={[3.7, 1.83, 159.9]} />
           


                <ambientLight intensity={1} />
               

                <Suspense fallback={null}>
                  <Monk></Monk>

                </Suspense>
              </Canvas>


            </div  >
            {/* <img  className="rocket h-36 lg:h-72 left-[20px] lg:left-[45%]" src={rocket}></img> */}
            <div className='rocket'>
                 
            <Canvas className='rocket relative pb-5 md:right-20 md:left-[-100px]' >
                

                <PerspectiveCamera makeDefault position={[3.7, 1.83, 159.9]} />
           


                <ambientLight intensity={1} />
               

                <Suspense fallback={null}>
                <Ufo></Ufo>

                </Suspense>
              </Canvas>

            </div>
           
          </div>

         
        </div>




      </div>
    </section>

  )
}


