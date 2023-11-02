
import Header from '../Home/Header.js'
import Nav1 from '../Home/Nav1.js';
import '../Home/Animate.css'
import Monkey from "../Home/Monkeys.jsx"
import radio from "../assets/home/radio.png";
import saturn from "../assets/home/saturn.png";
import cd from "../assets/home/26765249_2112.q703.030.S.m004.c12.vinyl record melting realistic.png"
import all from "../assets/home/all.png"

//threejs//

import { Canvas} from '@react-three/fiber';
import { Suspense} from 'react';




export default function About() {
   
   


   return (
      <section className=" sm:min-h-screen py-12 "> 

         <Nav1></Nav1>

         <div className="container mx-auto h-full bg-transparent relative lg:mt-16">
            <div className='bg-transparent flex flex-col xl:flex-row items-center h-full md:py-24'>




               <div className='text-center  md:mt-8 xl:text-left xl:absolute top-[-300px]'>
                  <div>
                  <h1 data-text="SONABYSS..2" className="myText text-[35px] text-center md:text-left xl:max-w-[700px] lg:my-[160px] mb-1 lg:mb-2 md:text-3xl lg:text-5xl text-[#B68973]"
                     data-aos='fade-down' data-aos-delay='45' > <span className='lg:text-7xl'>SONABYSS</span> <span className='teraBaap relative lg:top-[-7px] lg:text-3xl'>2K23</span></h1> 
                     

                  </div>
               



                  <p className='myCo text-xl lg:text-2xl text-red-800 font-bold font-sans mb-6 md:mb-10'>
                 
                                              "Through The Ages"
                  </p>

                  
                  
                  <p className="para xl:max-w-[650px]  text-[#B68973]   text-[5px] sm:text-lg lg:text-sm" data-aos='fade-down' data-aos-delay='140' >
                  Step into a Time Machine with <span className='myCoSpan text-red-500 font-bold'>Sonabyss </span> 2023: 'Through the Ages'! Journey through the captivating eras of the early '80s,
                   the dynamic present, and the awe-inspiring future of 2100. Get ready to embark on a thrilling 
                   adventure through time, as we bring history to life, celebrate the present, and explore the limitless possibilities of tomorrow.
                    Join us at <span className='myCoSpan  relative  text-red-500 font-bold'>NERIST's</span>  annual cultural extravaganza and be part of this incredible journey!
                  </p>
                
                  <br></br>
                 


               </div>

               <div className="py-2 h-[300px] w-[300px] xl:absolute xl:-right-1 xl:top-[-85px] flex flex-col items-center justify-center lg:h-[530px] lg:w-[530px]">
                   <div className='flex flex-col items-center justify-center w-full h-full'>
                     
                     {/* <img src={cd} alt='avatar' className='h-[200px] w-[200px] relative left-[250px]'></img>
                  

                     <div className='flex flex-row'>
                     <img src={saturn} alt='avatar' className='h-[100px] w-72 relative top-[20px]'></img>  
                     <img src={radio} alt='avatar' className='rotate-6 z-2 h-[250px] relative top-[-100px]'></img>
                     </div>
                    */}
                    <img src={all}></img>
                     
                   
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                     {/* <Canvas className='h-full w-full flex items-center justify-center'>
                      
                        <ambientLight intensity={1}/>
                       <Suspense  fallback={null}>
                        
                           <Monkey ></Monkey>
                        </Suspense>
                     </Canvas> */}
                     </div>
               </div>

              


            </div>


           


               </div>

             
                     <Header></Header>
                 
              
         































                     <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4 className="underline">About</h4>
                        <p>Page developed by Neristians

                        </p>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4 className="underline">Pages</h4>
                        <Link className="organiser" to='/organiser'>Organiser</Link> 
                                     
                                                      
                    </div>
                    <div className="sb__footer-links-div">
                        <h4 className="underline">Contact</h4>
                        
                    
                        <p><img src={email} alt="" />sonabyss2k23@yahoo.com</p>
                        
                        <p><img src={home} alt="" />NERISTS Nirjulli, Arunachal Pradesh
                                            <br></br>
                                            791109
                        </p>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4 className="underline">Follow Us On</h4>
                        <div className="socialmedia">  
                       
                        
                        <Link to={'https://instagram.com/sonabyss2k23?igshid=MzRlODBiNWFlZA=='}>
                        <p><img src={insta} alt="" /></p>
                        </Link>
                        
                        <Link >
                        <p><img src={yt} alt="" /></p>
                        </Link>
                        
                     
                        </div>
                      
                    </div>
                </div>
                <hr />
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>©copyright</p>
                    </div>
                    <div className="sb__footer-below-links">
                        <Link ><div><p>Terms & Conditions</p></div></Link>
                        <Link ><div><p>Privacy</p></div></Link>
                    </div>
                </div>











                




























      </section>

   )


}