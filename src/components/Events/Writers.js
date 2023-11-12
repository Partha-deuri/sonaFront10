import w1 from '../assets/writer/Tale weaver.png'
import w2 from '../assets/writer/TheWordsWithin.png'
import w3 from '../assets/writer/Spill the ink.png'
import w4 from '../assets/writer/Sasta critic.png'
import w5 from '../assets/writer/Awaaz Do.png'

import  { Toaster } from 'react-hot-toast';
import { getUserEvents } from '../helper/axiosHelper';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Preview from './Preview'


const cards = [
    {
      id: 1,
      title: "Tale Weaver",
      image: w1,
    
     
    },
    {
      id: 2,
      title: "The Words Within",
      image: w2,
  
    },
    {
      id: 3,
      title: "Spill The Ink",
      image:w3,
     
    },
    {
      id: 4,
      title: "Sasta Critic",
      image: w4,
    
    },

  
    {
      id: 5,
      title: "Awaaz Do",
      image: w5,
    },

  

  ]
  
export default function Writer() {
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
    <div className="flex  flex-col min-h-screen items-center justify-center py-6 flex items-center justify-center">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className=' flex items-center mb-8   justify-center w-full '>
        <h2 className='heading text-black text-5xl'>WRITERS FORUM</h2>
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
          <Preview setLoadPreview={setLoadPreview} title={title} rules={rules} image={image} clubName={"writers Forum"} userEvents={userEvents} setUserEvents={setUserEvents} />
        }
      </div>
    </div>
  );
}




  

  
  
