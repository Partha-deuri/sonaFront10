
import Header from '../Home/Header.js'
import Nav1 from '../Home/Nav1.js';
import '../Home/Animate.css'
import all from "../assets/home/all.png"






export default function About() {
   
   


   return (
      <section className=" sm:min-h-screen py-12"> 
               <Nav1></Nav1>
               
               
               <div className='container mx-auto flex flex-col'>
                  
                  
                  <div className='headingSection flex'>
                     <h1 data-aos="fade-out" className='heading text-5xl md:text-6xl lg:text-8xl text-yellow-600'>SONABYSS <span className='text-2xl lg:text-5xl'>2k23</span></h1>
                     

                  </div>
                  <h1 data-aos="fade-out" className='heading text-2xl lg:text-5xl  text-black tracking-widest lg:tracking-wide'>"Through The Ages"</h1>
                  
                  <div className='aboutSection flex flex-col lg:flex-row items-center justify-center py-10 lg:relative lg:top-[-80px]'>
                    
                    <p className="para xl:max-w-[650px] text-md md:text-xl lg:text-2xl text-yellow-500 leading-[20px] tracking-wide " data-aos='fade-down' data-aos-delay='140' >
                        Step into a Time Machine with <span className='myCoSpan text-red-500 font-bold'>Sonabyss </span> 2023: 'Through the Ages'! Journey through the captivating eras of the early '80s,
                        the dynamic present, and the awe-inspiring future of 2100. Get ready to embark on a thrilling 
                        adventure through time, as we bring history to life, celebrate the present, and explore the limitless possibilities of tomorrow.
                        Join us at <span className='myCoSpan  relative  text-red-500 font-bold'>NERIST's</span>  annual cultural extravaganza and be part of this incredible journey!
                     </p>
                     <img data-aos="slide-up" className='h-[230px] mob:h-[300px] md:h-[400px]  lg:h-[400px]' src={all} alt='avatar'></img>
                



                       
                  </div>
                  <h1 className='custom drop-shadow-xl absolute top-[450px] md:top-[500px] lg:top-[310px] left-[30%] md:left-[36%] z-[-10] text-6xl md:text-8xl lg:text-9xl font-bold text-center bg-gradient-to-r from-[#7410ef] to-[#8634ea] bg-clip-text text-transparent'>THE PAST</h1>

                  







               </div>

             
                     <Header></Header>
                 
              
         



      </section>

   )


}
