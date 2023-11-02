// import { UilInstagramAlt } from '@iconscout/react-unicons'

// import { girlsRe, jos, secretary, volunteer } from './headInfo.js';
// import { creativeHeads } from './headInfo.js';
// import { infoAndPub } from './headInfo.js';
// import { eventManager } from './headInfo.js';
// import {pubBranding} from './headInfo.js';
// import {Auditor} from './headInfo.js';
// import {stagesIncharge} from './headInfo.js';
// import { hobbyIncharge } from './headInfo.js';
// import { gameIncharge } from './headInfo.js';
// import { elocutionIncharge } from './headInfo.js';
// import { danceIncharge } from './headInfo.js';
// import { audioIncharge } from './headInfo.js';
// import { electricalIncharge } from './headInfo.js';
// import { photography } from './headInfo.js';
// import { videography } from './headInfo.js';
// import { musicClub } from './headInfo.js';
// import { sonabyss } from './headInfo.js';
// import { writterForum } from './headInfo.js';
// import { quiz } from './headInfo.js';
// import { drama } from './headInfo.js';
// import { hospityLity } from './headInfo.js';
// import { cosplay } from './headInfo.js';
// import { attendance } from './headInfo.js';
// import { decoration } from './headInfo.js';
// import { refreshment } from './headInfo.js';
// import { advisor } from './headInfo.js';
// import { webdev } from './headInfo.js';



// export default  function Org() {
//    const sections = [secretary,eventManager,infoAndPub,jos,pubBranding,creativeHeads,girlsRe,
//     Auditor,volunteer,decoration,stagesIncharge,electricalIncharge,audioIncharge,
//     quiz,writterForum,hobbyIncharge,drama,danceIncharge,elocutionIncharge,
//     musicClub,photography,videography,gameIncharge,cosplay,sonabyss,
//     attendance,hospityLity,refreshment,advisor,webdev]
//     const sectionTitles = ["RACAF HEADS","EVENT MANAGER","Info and Pub","JOINT ORGANIZING SECRETARY","PUB AND BRANDING","CREATIVE HEADS","GIRLS REPRESENTATIVE",
//     "AUDITORS","CHIEF VOLUNTEER","DECORATION INCHARGES","STAGE INCHARGES","ELECTRICAL INCHARGES","AUDIO INCHARGES",
//     "QUIZ CLUB INCHARGES","WRITER'S FORUM","HOBBY CLUB INCHARGES","DRAMA CLUB INCHARGES","DANCE CLUB INCHARGES","ELOCUTION CLUB INCHARGES",
//     "MUSIC CLUB INCHARGES","PHOTOGRAPHY CLUB INCHARGES","VIDEOGRAPHY CLUB INCHARGES","GAME ZONE INCHARGES","COSPLAY INCHARGES","SONABYSS INCHARGES",
//     "ATTENDANCE INCHARGES","HOSPITALITY INCHARGES","REFRESHMENT INCHARGES","ADVISORS","WEB DEVELOPERS TEAM"]
//     var idx = 0;
//     return (
//       <div className="flex  flex-col min-h-screen items-center justify-center bg-login bg-center bg-no-repeat bg-cover py-6 flex items-center justify-center">     
//             <div className=' flex items-center mb-8   justify-center w-full '>
//                         <h2 className='text-white leading-wide bg-gradient-to-r from-purple-800 to-yellow-800 bg-clip-text text-transparent text-5xl underline'>ORGANISERS</h2>                                
       
//             </div>

//                         <div className='clubsContainer'>
//                                           {
//                                             sections.map((organisers)=>(
//                                               <div key={idx} className=''>
//                                           <h3 className='text-white text-center  mt-20 mb-8  mb-6'>{sectionTitles[idx++]}</h3>
//                                             <div className="flex flex-col items-center justify-center sm:grid  gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                                             {organisers.map((items)=>(
//                                               <div key={items.sl} className="group relative cursor-pointer rounded-lg items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
//                                                         <div className="md:h-96 md:w-72 h-60 w-40">
//                                                         {/* <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 rounded-lg" src={items.img} alt="" /> */}
//                                                         <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rounded-lg group-hover:blur-sm" src={items.img} alt="" />
//                                                         </div>
//                                                         {/* <div className=" absolute hover:backdrop-blur inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"> */}
//                                                         <div className=" absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
//                                                         <h1 className="font-dmserif relative t-[100px] text-xl md:text-3xl font-bold text-white">{items.Name}</h1>
//                                                         <p className="mb-3 text-lg italic text-white opacity-0  transition-opacity duration-300 group-hover:opacity-100">{items.Post}</p>
//                                                         { sectionTitles[idx-1]==="WEB DEVELOPERS TEAM" && 
//                                                           <button className="relative w-[20px] mt-2 h-[30px]  top-[100px] rounded-full  py-3 px-3.5 font-com text-sm capitalize text-white">
//                                                             <UilInstagramAlt ></UilInstagramAlt>
//                                                         </button>}
//                                                         </div>
//                                                     </div>
//                                                     )) 
//                                                   } 
//                                           </div>
//                                           </div>
//                                                   ))
//                                           }

//                           </div>    
//     </div>
//     );
//   }
  