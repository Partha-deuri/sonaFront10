import v1 from '../assets/videography/v1.jpg'
import v2 from '../assets/videography/v2.jpg'
import v3 from '../assets/videography/v3.jpg'
import v4 from '../assets/videography/v4.jpg'
import v5 from '../assets/videography/v5.jpg'
import toast, { Toaster } from 'react-hot-toast';
import { deletEvent, getUserEvents, updateEvent, verifyToken } from '../helper/axiosHelper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Preview from './Preview'


const cards = [
  {
    id: 1,
    title: "Spot Photography",
    image: v1,
    text: "",

  },
  {
    id: 2,
    title: "Landscape Photography",
    image: v2,
    text: "",
  },
  {
    id: 3,
    title: "Long Exposure",
    image: v3,
    text: "",
  },
  {
    id: 4,
    title: "Macro Photography",
    image: v4,
    url: "#",
    text: "",
  },
  {
    id: 5,
    title: "Street Photography",
    image: v5,
    url: "#",
    text: "",
  },
]

export default function Videography() {
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
        <h2 className='heading text-black leading-wide  text-5xl'>VIDEOGRAPHY CLUB</h2>
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
          <Preview setLoadPreview={setLoadPreview} title={title} rules={rules} image={image} clubName={"Videography Club"} userEvents={userEvents} setUserEvents={setUserEvents} />
        }
      </div>
    </div>
  );
}



