import p1 from '../assets/photography/p1.jpg'
import p2 from '../assets/photography/p2.jpg'
import p3 from '../assets/photography/p3.jpg'
import p4 from '../assets/photography/p4.jpg'
import p5 from '../assets/photography/p5.jpg'
import p6 from '../assets/photography/p6.jpg'
import toast, { Toaster } from 'react-hot-toast';
import { deletEvent, getUserEvents, updateEvent, verifyToken } from '../helper/axiosHelper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Preview from './Preview'


const cards = [
  {
    id: 1,
    title: "Spot Photography",
    image: p1,
    text: "on 6th Nov 2023, NERIST campus. Register for more details",

  },
  {
    id: 2,
    title: "Landscape Photography",
    image: p2,
    text: "landscape photography captures the beauty of nature and the outdoors. These photographs bring the viewers into the scenery and perfectly captures the setting, mood, and feeling in the location.",
  },
  {
    id: 3,
    title: "Long Exposure",
    image: p3,
    text: "The resulting image captures the trail of moving objects in front of the camera, while showing still elements razor sharp.",
  },
  {
    id: 4,
    title: "Macro Photography",
    image: p4,
    url: "#",
    text: "Macro photography is all about showcasing a subject larger than it is in real life — an extreme close-up of something small.",
  },
  {
    id: 5,
    title: "Street Photography",
    image: p5,
    url: "#",
    text: "street photography, a genre of photography that records everyday life in a public place. The very publicness of the setting enables the photographer to take candid pictures of strangers.",
  },
  {
    id: 6,
    title: "Anything Retro",
    image: p6,
    url: "#",
    text: "Retro photography refers to images that provide an aesthetic or feel from the past.",
  },
]

export default function Photography() {
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
    <div className="flex  flex-col min-h-screen items-center justify-center  py-6">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className=' flex items-center mb-8   justify-center'>
        <h2 className='heading text-black leading-wide  text-5xl'>PHOTOGRAPHY CLUB</h2>
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
          <Preview setLoadPreview={setLoadPreview} title={title} rules={rules} image={image} clubName={"Photography Club"} userEvents={userEvents} setUserEvents={setUserEvents} />
        }
      </div>
    </div>
  );
}



