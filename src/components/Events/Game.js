
import duetDhamaka from '../assets/dance/duetDhamaka.jpg';
import megaTaal from '../assets/dance/megaTaal.jpg';
import soloStriker from '../assets/dance/SoloStriker.jpg';
import Xerox from '../assets/dance/Xerox.jpg';
import Preview from './Preview';
import { useState,useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { getUserEvents } from '../helper/axiosHelper';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Monk from "./M4.jsx";


import bgmi from "../assets/bgmi.jpg";
import bgmi2v2 from "../assets/bgmi2v2.jpg";
import callOfDuty from "../assets/callOfDuty.jpg";
import dota from "../assets/dota2.jpg";
import fifa from "../assets/fifa2023.jpg";
import magicChess from "../assets/magicChess.jpg";
import mobileLegend from "../assets/mobileLegend.jpg";
import mortal from "../assets/mortalKombat.jpg";
import needForSpeed from "../assets/needForSpeed.jpg";
import subway from "../assets/subway.jpg";
import takken from "../assets/takken7.jpg";
import valorant from "../assets/valorant.jpg";



const cards = [
    {
      id: 1,
      title: "BGMI",
      image: bgmi,
      text : <><h3>Rules:</h3> <br></br>1.iPad is not allowed.<br></br>2.every device will be played in 60 or 30 fps.<br></br>3.bring your own powder / finger gloves<br></br>4.if caught cheating the Team will be disqualified on spot.</>,
     
    },
    {
      id: 2,
      title: "BGMI 2V2",
      image: bgmi2v2,
      text : <><h3>Rules:</h3> <br></br>1. Cheating if prohibited 
      <br></br>2. Aim assist and slide will be turn off
<br></br>3.bring your own powder / finger gloves<br></br></>,
    },

    
    {
      id: 3,
      title: "CALL OF DUTY",
      image: callOfDuty,
      text : "For rules and Requirements contact Respective persons given in the poster",
    },
    {
      id: 4,
      title: "FIFA",
      image: fifa,
      url: "#",
      text : "For rules and Requirements contact Respective persons given in the poster",
    },
    {
      id: 5,
      title: "Dota",
      image: dota,
      url: "#",
      text : "For rules and Requirements contact Respective persons given in the poster",
    },
    {
      id: 6,
      title: "magicChess",
      image: magicChess,
      url: "#",
      text :<><h3>Rules:</h3> <br></br>1.iPad is not allowed.<br></br>2.Draft Pick.<br></br>3.Commander is upto player Choice<br></br></>,
    },

    {
      id: 7,
      title: "Mobile Legend",
      image: mobileLegend,
      url: "#",
      text : <><h3>Rules:</h3> <br></br>1.iPad is not allowed.<br></br>2.Draft Pick.<br></br>3. Bring your own requirements<br></br></>,
    },

{
      id: 8,
      title: "Mortal Combat",
      image: mortal,
      url: "#",
      text : "For rules and Requirements contact Respective persons given in the poster",
    },
    {
      id: 9,
      title: "Need For Speed",
      image: needForSpeed,
      url: "#",
      text :  <><h3>Rules:</h3> <br></br>1. Player need to bring there own console/ keyboard<br></br>2. Laptop will be provided<br></br></>,
    },
    {
      id: 10,
      title: "Subway",
      image: subway,
      url: "#",
      text : "For rules and Requirements contact Respective persons given in the poster",
    },
    {
      id: 11,
      title: "Takken",
      image:takken,
      url: "#",
      text : "For rules and Requirements contact Respective persons given in the poster",
    },
    {
      id: 12,
      title: "Valorant",
      image: valorant,
      url: "#",
      text : <><h3>Rules:</h3> <br></br>1. 5v5 (if less player then up to player choice)
      <br></br>3. Cheating is prohibited<br></br>3. Bring your own requirements<br></br></>,
    },





  ]
  
 
export default function Game() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [userEvents, setUserEvents] = useState(["Loading"]);
  useEffect(() => {
    const tokenTest = localStorage.getItem('token');
    if (tokenTest) {
      let getUserEvent = getUserEvents(tokenTest);
      getUserEvent.then((res) => {
        const { data } = res.data;
        setUserEvents(data);
        let eventString = JSON.stringify(data);
        localStorage.setItem("events", eventString);
      }).catch(err => {
        console.log(err);
      })
    }
  }, [])

  const [loadPreview, setLoadPreview] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rules, setRules] = useState("");
  const previewCall = (eventTitle, eventImg, eventRules) => {
    setTitle(eventTitle);
    setImage(eventImg);
    setRules(eventRules);
    setLoadPreview(true)
  }
  return (
    <div className="flex  flex-col min-h-screen items-center justify-center  py-6 flex items-center justify-center">
      
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className=' flex flex-col items-center mb-8   justify-center'>
        <h2 className='heading text-5xl lg:text-8xl text-green-600'>ESPORTS RACAF 2K23</h2>
        {/* <Canvas className='' >
                

                <PerspectiveCamera makeDefault position={[0,10,200]} />
           


                <ambientLight intensity={12} />
               

                <Suspense fallback={null}>
                  <Monk></Monk>

                </Suspense>
              </Canvas> */}
     

      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((items) => (
          <div key={items.id} onClick={() => { previewCall(items.title, items.image, items.text) }} className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125 rounded-lg" src={items.image} alt="" />
            </div>
            {/* <div className=" absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif relative t-[100px] text-3xl font-bold text-white">{items.title}</h1>
             </div> */}
          </div>
        ))
        }
        {loadPreview &&
          <Preview setLoadPreview={setLoadPreview} title={title} rules={rules} image={image} clubName={"Game Zone"} userEvents={userEvents} setUserEvents={setUserEvents} />
        }
      </div>
    </div>
  );
}



