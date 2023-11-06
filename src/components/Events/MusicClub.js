

import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";

import Preview from './Preview';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { getUserEvents } from '../helper/axiosHelper';

const cards = [
    {
      id: 1,
      title: "Battle of Bands",
      image: m1,
      text : "",
     
    },
    {
      id: 2,
      title: "Block Chorus Competition",
      image: m2,
      text : "",
    },
    {
      id: 3,
      title: "Sonabyss Idol",
      image: m3,
      text : "",
    },
  ]
  
 
export default function Music() {
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
      <div className=' flex items-center mb-8   justify-center w-full '>
        <h2 className='heading text-black leading-wide text-5xl'>MUSIC CLUB</h2>

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
          <Preview setLoadPreview={setLoadPreview} title={title} rules={rules} image={image} clubName={"Music Club"} userEvents={userEvents} setUserEvents={setUserEvents} />
        }
      </div>
    </div>
  );
}




  
  
