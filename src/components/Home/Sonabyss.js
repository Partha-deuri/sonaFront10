

//materials for 3d //

import sonaUp from "../assets/home/sonaUp1.png"
import {Link} from 'react-router-dom'




export default function Sonabyss() {




  return (

    <section className="sm:min-h-screen py-20 mb-2 px-6" data-aos="fade-up-right"  data-aos-anchor-placement="top-bottom">
     

      <div className="relative   container mx-auto shadow-2xl rounded-lg bg-yellow-300 py-6" >

        <div className='flex px-6 py-2 flex-col lg:flex-row pl-1 '>
                        <img className='z-[2]' src={sonaUp} alt='avatar'/>
                        <div className=' flex flex-col z-[2] relative left-[-12px] lg:left-[10px] items-center justify-center text-center lg:pr-10 ml-12 '>
                                  
                                  <h2 className='SonaHeading  text-2xl sm:text-3xl md:text-5xl lg:text-6xl  text-blue-700 tracking-wide  mb-6 px-1 text-center'>
                                    SONABYSS <span className='text-gray-700'>TITLES</span>
                                  </h2>
                                  <p className='para max-w-[474px] text-center font-bold  text-white text-lg md:text-xl lg:text-2xl  leading-[20px] tracking-wide '>

                                    Join us On 11th november to witness the winner of the  
                                    Mr and Miss Sonabyss 2k23.
                                    The winner of this event will get direct entry into Set Wet Mister Mega Northeast 
                                    and  Sunsilk Miss Mega Northeast
                                    <br></br>
                                    Wanna participate ?
                                  </p>
                                  <button className='mt-4 rounded-md px-2 py-1 bg-[#E1306C] text-center cursor-default hover:bg-[#FD1D1D]'>
                                      <Link className='but1 text-[#E19898] font-seminormal md:text-xl tracking-widest text-center bg-[#E1306C] hover:bg-[#FD1D1D] rounded-md py-1 px-1' to="/sonabyss/title">Register</Link>
                                  </button>
                                 

                        </div>
                       
        </div>
        <h1 className='custom absolute z-[1] top-[340px] md:top-[900px] lg:top-[200px]  lg:left-[40%] md:left-[15%]   left-[4%] drop-shadow-xl text-5xl md:text-7xl lg:text-8xl font-bold text-center bg-gradient-to-r from-yellow-400 to-yellow-400 bg-clip-text text-transparent'>THE PRESENT</h1>

  





   
                    
                    
                    
                   



  
          
        




      </div>
  
    </section>

  )
}


