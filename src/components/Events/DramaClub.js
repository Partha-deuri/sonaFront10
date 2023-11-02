import d1 from '../assets/drama/drama.jpg';
import d2 from "../assets/drama/drama2.jpg";
import d3 from "../assets/drama/drama3.jpg";
import d4 from "../assets/drama/drama4.jpg";
import toast, { Toaster } from 'react-hot-toast';
import { deletEvent, getUserEvents, updateEvent, verifyToken } from '../helper/axiosHelper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Preview from './Preview.js';

const cards = [
  {
    id: 1,
    title: "Dark Comedy",
    image: d1,
    text: "Dark comedy, black comedy or black humor is a sub-genre of comedy where commonly objectionable topics and events are used in a satirical manner as a source of humor in a narrative work.",

  },
  {
    id: 2,
    title: "Theatrics",
    image: d2,
    text: "ways of behaving and speaking that are like a performance on a stage and are intended to attract attention.",
  },
  {
    id: 3,
    title: "Monologue",
    image: d3,
    text: "A monologue is a long form speech delivered by a single character in a play or a film.",
  },
  {
    id: 4,
    title: "Street Play",
    image: d4,
    url: "#",
    text: "an amateur theatrical production performed in a street, park, etc. or indoors, usually for a nonpaying audience, with an improvised script generally on a social or political theme.",
  },
]
export default function Drama() {
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
    <div className="flex  flex-col min-h-screen items-center justify-center bg-dramabg bg-center bg-no-repeat bg-cover py-6 flex items-center justify-center">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className=' flex items-center mb-8   justify-center w-full '>
        <h2 className='heading leading-wide text-5xl'>DRAMA CLUB</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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
          <Preview setLoadPreview={setLoadPreview} title={title} rules={rules} image={image} clubName={"Drama Club"} userEvents={userEvents} setUserEvents={setUserEvents} />
        }
      </div>
    </div>
  );
}



