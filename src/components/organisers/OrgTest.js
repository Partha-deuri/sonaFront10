import home  from "../assets/home/logo1.png"
import { useNavigate,Link } from "react-router-dom";
import { useEffect } from "react";

import { UilInstagramAlt } from '@iconscout/react-unicons'

import { girlsRe, jos, secretary, volunteer } from './headInfo.js';
import { creativeHeads } from './headInfo.js';
import { infoAndPub } from './headInfo.js';
import { eventManager } from './headInfo.js';
import {pubBranding} from './headInfo.js';
import {Auditor} from './headInfo.js';
import {stagesIncharge} from './headInfo.js';
import { hobbyIncharge } from './headInfo.js';
import { gameIncharge } from './headInfo.js';
import { elocutionIncharge } from './headInfo.js';
import { danceIncharge } from './headInfo.js';
import { electricalIncharge } from './headInfo.js';
import { photography } from './headInfo.js';
import { videography } from './headInfo.js';
import { musicClub } from './headInfo.js';
import { sonabyss } from './headInfo.js';
import { writterForum } from './headInfo.js';
import { quiz } from './headInfo.js';
import { drama } from './headInfo.js';
import { hospityLity } from './headInfo.js';
import { cosplay } from './headInfo.js';
import { attendance } from './headInfo.js';
import { decoration } from './headInfo.js';
import { refreshment } from './headInfo.js';
import { webdev } from './headInfo.js';



export default  function Org() {
    
  
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate()
   const sections = [secretary,eventManager,infoAndPub,jos,pubBranding,creativeHeads,girlsRe,
    Auditor,volunteer,decoration,stagesIncharge,electricalIncharge,sonabyss,
    quiz,writterForum,hobbyIncharge,drama,danceIncharge,elocutionIncharge,
    musicClub,photography,videography,gameIncharge,cosplay,
    attendance,hospityLity,refreshment,webdev]
    const sectionTitles = ["RACAF HEADS","EVENT MANAGER","Info and Pub","JOINT ORGANIZING SECRETARY","PUB AND BRANDING","CREATIVE HEADS","GIRLS REPRESENTATIVE",
    "AUDITORS","CHIEF VOLUNTEER","DECORATION INCHARGES","STAGE INCHARGES","ELECTRICAL INCHARGES","SONABYSS INCHARGES",
    "QUIZ CLUB INCHARGES","WRITER'S FORUM","HOBBY CLUB INCHARGES","DRAMA CLUB INCHARGES","DANCE CLUB INCHARGES","ELOCUTION CLUB INCHARGES",
    "MUSIC CLUB INCHARGES","PHOTOGRAPHY CLUB INCHARGES","VIDEOGRAPHY CLUB INCHARGES","GAME ZONE INCHARGES","COSPLAY INCHARGES",
    "ATTENDANCE INCHARGES","HOSPITALITY INCHARGES","REFRESHMENT INCHARGES","WEB DEVELOPERS TEAM"]
    var idx = 0;
    return (
      <div className="w-full min-h-screen py-10 bg-login bg-cover bg-no-repeat bg-fixed">
         
         <nav   className="px-20 lg:fixed">
                    <img onClick={()=>{navigate("/")}}  className="h-16" src={home} alt="avatar"></img>
        </nav>
        
        
        <div className='container mx-auto mt-10 py-16 px-10 flex flex-col'>
            <h2 className="text-center text-white org-head">organiser</h2>


        {
                                            sections.map((organisers)=>(
                                              <div key={idx} className=''>
                                          <h3 className='text-white text-center  mt-20 mb-8  mb-6'>{sectionTitles[idx++]}</h3>
                                            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                                            {organisers.map((items)=>(
                                              <div key={items.sl} className="group relative cursor-pointer rounded-lg items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
                                                        <div className="md:h-64 md:w-48 h-96 w-80">
                                                        {/* <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg" src={items.img} alt="" /> */}
                                                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rounded-lg group-hover:blur-sm" src={items.img} alt="" />
                                                        </div>
                                                        {/* <div className=" absolute hover:backdrop-blur inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"> */}
                                                        <div className=" absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                                        <h1 className="font-dmserif relative t-[100px] text-lg md:text-2xl font-bold text-white">{items.Name}</h1>
                                                        <p className="mb-3 text-lg italic text-white opacity-0  transition-opacity duration-300 group-hover:opacity-100">{items.Post}</p>
                                                        { sectionTitles[idx-1]==="WEB DEVELOPERS TEAM" && 
                                                          <Link to={items.contact.insta} className="relative w-[20px]  h-[30px]  top-[60px]   py-3 text-sm ">
                                                                <UilInstagramAlt />
                                                            </Link>
                                                            }
                                                        </div>
                                                    </div>
                                                    )) 
                                                  } 
                                          </div>
                                          </div>
                                                  ))
                                          }
           

        </div>     
    
    </div>
    );
  }
  
