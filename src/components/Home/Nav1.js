import logo from '../assets/home/logo1.png'
import Nav from './Nav.js'
import disco from "../assets/disco.gif";

export default function Nav1(){





return(
<header className='mb-10 lg:mb-0 z-20 relative  px-4 lg:px-0'
    data-aos ='fade-down' data-aos-delay='1200' data-aos-duration='1000'
>
    <div className='container mx-auto'>
    <img className='absolute top-[-50px] lg:top[-74px] left-[33%] lg:left-[40%] h-[80px] md:h-[150px] lg:h-[200px]' src={disco} alt='avatar'></img>   
        <div className='flex items-center justify-between  '>



            
        <div className=' px-4 flex  gap-x-[120px] lg:mb-[50px]'>
         
                        <img className='logoGlow h-12 md:h-20 rounded-full ' src={logo} alt='tag'></img>
                     
         </div>
         
 
 
         <div className=''>
             <Nav></Nav>
         </div>
         
 
        </div>

    </div>
</header>

)
}
