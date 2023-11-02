import h1 from '../assets/hobby/h1.jpg';
import h2 from '../assets/hobby/h2.jpg';
import h3 from "../assets/hobby/h3.jpg";
import h4 from '../assets/hobby/h4.jpg';
import h5 from "../assets/hobby/h5.jpg";
import h6 from '../assets/hobby/h6.jpg';
import wallpainting from "../assets/hobby/h7.jpg";
import h8 from "../assets/hobby/h8.jpg";
import h9 from "../assets/hobby/h9.jpg";
import h10 from "../assets/hobby/h10.jpg";
import rangoli from "../assets/hobby/h11.jpg";
import h12 from "../assets/hobby/h12.jpg";
import h13 from "../assets/hobby/h13.jpg";
// import h14 from "../assets/hobby/h14.jpg";
import h15 from "../assets/hobby/h15.jpg"
import toast, { Toaster } from 'react-hot-toast';
import { deletEvent, getUserCount, getUserEvents, updateEvent, verifyToken } from '../helper/axiosHelper';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import caricature from "../assets/hobby/caricature.jpg"
import Preview from './Preview';

// import bg from '../assets/hobby/HOBBYCLUB.mp4'




const cards = [
  {
    id: 1,
    title: "Doodle Art",
    image: h1,
    limit: 30,
    count: 100,
    text: <><h3>Rules:</h3> <br></br>Materials will be provided on the spot. <br></br>The time limit is 1 hour.<br></br>No specific theme<br></br>Maximum Participants = 30<br></br><br></br> <h3>Prize:</h3><br></br> 1st :1000<br></br> 2nd: 700<br></br> 3rd: 500</>,

  },
  {
    id: 2,
    title: "Wealth from Waste",
    image: h2,
    text: <><h3>Rules:</h3> <br></br>Materials will not be provided.<br></br>Participants must make their craft from waste materials only. <br></br>1 week will be given before the submission.<br></br>Glue will be provided.<br></br><br></br><h3>Prize:</h3><br></br> 1st :800<br></br> 2nd: 500</>,
  },
  {
    id: 3,
    title: "Glass Painting",
    image: h3,
    limit: 20,
    count: 100,
    text: <><h3>Rules:</h3> <br></br>Materials will be provided.<br></br>The topic is “The Coming of Age".<br></br>The participants must submit the finished products within 1 week.<br></br>Maximum participants = 20<br></br><br></br> <h3>Prize:</h3><br></br> 1st: 1.5k <br></br> 2nd: 1k</>,
  },
  {
    id: 4,
    title: "T-Shirt Painting",
    image: h4,
    limit: 30,
    count: 100,
    url: "#",
    text: <><h3>Rules:</h3> <br></br>Materials will be provided. <br></br>The topic will be “Living in Me”.<br></br>The participants must submit the finished products within 1 week.<br></br>Maximum participants = 30 <br></br><br></br> <h3>Prize:</h3><br></br> 1st :2k<br></br> 2nd: 1.5k<br></br> 3rd: 1k</>,

  },
  {
    id: 5,
    title: "Estate of the Dress",
    image: h5,
    limit: 15,
    count: 100,
    url: "#",
    text: <><h3>Rules:</h3> <br></br>Materials will be provided. <br></br>Maximum 1 week will be given. <br></br>Maximum participants = 15<br></br><br></br> <h3>Prize:</h3><br></br> 1st :1.5k<br></br> 2nd: 1k</>,
  },
  {
    id: 6,
    title: "Paper Plane Competition",
    image: h6,
    limit: 100,
    count: 0,
    url: "#",
    text: <><h3>Rules:</h3> <br></br>Materials will be provided on the spot. <br></br>The participants will be provided with A4 sheets to make paper planes.<br></br>The winner will be the plane which covers the farthest distance and that stays in the air the longest.<br></br>There will also be an additional prize of the best design.<br></br><br></br> <h3>Prize:</h3><br></br> Farthest Distance:500<br></br> Longest Time :500<br></br>Best Design :500</>,
  },

  {
    id: 7,
    title: "One Line Art",
    image: h8,
    limit: 100,
    count: 0,
    url: "#",
    text: <><h3>Rules:</h3> <br></br>Participants are required to complete the art without lifting their pen off the paper. <br></br>Materials will be provided on the spot.<br></br>The time limit is 15 minutes.<br></br>No specific theme. <br></br>No inappropriate content will be entertained.<br></br>Further details will be provided during the event. <br></br><br></br> <h3>Prize:</h3><br></br> 1st: 700<br></br> 2nd: 500<br></br>3rd: 300</>,
  },
  {
    id: 8,
    title: "Pencil Sketch",
    image: h9,
    limit: 30,
    count: 100,
    url: "#",
    text: <><h3>Rules:</h3> <br></br>Materials will be provided on the spot.<br></br>The time limit is 2 hours. <br></br>Maximum participants : 30 <br></br>Reference will be provided.<br></br><br></br> <h3>Prize:</h3><br></br> 1st :1000<br></br> 2nd :700 <br></br>3rd :500 </>,

  },
  {
    id: 9,
    title: "Colour The Art",
    image: h10,
    limit: 40,
    count: 100,
    url: "#",
    text: <><h3>Rules:</h3> <br></br> Materials will be provided on the spot<br></br>A black and white line art will be provided.<br></br>The participants can color the art however they want to.<br></br>2 hours will be given. <br></br>Maximum participants = 40<br></br><br></br> <h3>Prize:</h3><br></br> 1st: 800<br></br> 2nd: 500<br></br>3rd: 300</>,

  },

  {
    id: 10,
    title: "Mehndi and Tattoo Design",
    image: h12,
    limit: 15,
    count: 100,
    url: "#",
    text: <><h3>Rules:</h3> <br></br> Participants are required to bring their partner. <br></br> Materials will be provided on the spot. <br></br>The time limit is 1 hour. <br></br>No specific theme.<br></br> Maximum participants = 15 <br></br><br></br> <h3>Prize:</h3><br></br> 1st: 800<br></br> 2nd: 500</>,

  },
  {
    id: 11,
    title: "Face Painting",
    image: h13,
    limit: 15,
    count: 100,
    url: "#",
    text: <><h3>Rules:</h3> <br></br> The participants must bring their partner. <br></br> The materials will be provided on the spot. <br></br>The time limit is 2 hours.  <br></br>No specific theme.<br></br> Maximum participants = 15 <br></br><br></br> <h3>Prize:</h3><br></br> 1st: 1000<br></br> 2nd: 800</>,

  },

  {
    id: 12,
    title: "Comic Making",
    image: h15,
    limit: 100,
    count: 0,
    url: "#",
    text: <><h3>Rules:</h3> <br></br> Participants must create a new character and draw a short narrative.  <br></br>The panels must be black and white. <br></br> No specific theme.<br></br>No materials will be provided.<br></br><br></br> <h3>Prize:</h3><br></br> 1st: 1000<br></br> 2nd: 700<br></br>3rd: 500</>,

  },
  {
    id: 13,
    title: "Caricature",
    image: caricature,
    limit: 30,
    count: 100,
    url: "#",
    text: <><h3>Rules:</h3> <br></br>Materials will be provided on the spot.<br></br> Participants can select any famous personality.  <br></br>The art must resemble the intended person and must not be copied from the net. <br></br>The time limit is 1 hour.<br></br>Maximum participants = 30 <br></br><br></br> <h3>Prize:</h3><br></br> 1st :1000<br></br> 2nd :700 <br></br>3rd :500 </>,
  },
]

export default function Hobby() {
  const rule = <><h3>Rules:</h3> <br></br> 4 participants are compulsory from each block. <br></br><br></br> The theme of the painting will be “Waste water today, live in desert tomorrow.”<br></br>  <br></br> The time limit is 3 hours<br></br><br></br> The participants must reach before 15 minutes of the event on-set time<br></br><br></br>  The block will be disqualified if the participants fail to reach on time. Maximum 10 minutes
    relaxation will be accepted.<br></br>  <br></br>  <h3> <br></br> Prize:</h3><br></br> 1st: 100<br></br> 2nd: 75<br></br>3rd: 50</>

  const rul2 = <><h3>Rules:</h3> <br></br>4 participants are compulsory from each block.<br></br><br></br> No specific theme.<br></br>  <br></br> The time limit is 3 hours<br></br><br></br> The participants must reach before 15 minutes of the event on-set time<br></br><br></br>  The block will be disqualified if the participants fail to reach on time. Maximum 10 minutes
    relaxation will be accepted.<br></br>  <br></br>  <h3> <br></br> Prize:</h3><br></br> 1st: 100<br></br> 2nd: 75<br></br>3rd: 50</>



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    let getLimit = getUserCount({ club: "Hobby Club" });
    getLimit.then(res => {
      const { data } = res.data;
      for (let i = 0; i < data.length; i++) {
        let idx = cards.findIndex((event) => event.title === data[i].eventName)
        if(idx!==-1)
          cards[idx].count = data[i].count;
      } 
    }).catch(err => {
      console.log(err);
    })
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
  const [count, setCount] = useState();
  const [limit, setLimit] = useState();
  const previewCall = (eventTitle, eventImg, eventRules, eventLimit, eventCount) => {
    setTitle(eventTitle);
    setImage(eventImg);
    setRules(eventRules);
    setLimit(eventLimit)
    setCount(eventCount)
    setLoadPreview(true)
  }

  return (
    <div className="flex  flex-col min-h-screen items-center justify-center bg-hobbyMob lg:bg-hobbyClub bg-center bg-cover bg-no-repeat  py-24 flex items-center justify-center bg-fixed">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className=' flex items-center mb-8   justify-center w-full'>
        <h1 className='hobbyText text-black lg:hidden'> Hobby Club</h1>


      </div>

      <div className='flex flex-col items-center justify-center lg:flex-row gap-4 mb-6'>
        <img onClick={() => { previewCall("Wall Painting", wallpainting, rule) }} className='h-96 w-72' src={wallpainting} alt='avatar'></img>
        <img onClick={() => { previewCall("Rangoli", rangoli, rul2) }} className='h-96 w-72' src={rangoli} alt='avatar'></img>

      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((items) => (
          <div key={items.id} onClick={() => { previewCall(items.title, items.image, items.text, items.limit, items.count) }} className="group relative cursor-pointer items-center rounded-lg justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125 rounded-lg" src={items.image} alt="" />
            </div>
          </div>
        ))
        }
        {loadPreview &&
          <Preview setLoadPreview={setLoadPreview} title={title} rules={rules} image={image} clubName={"Hobby Club"} userEvents={userEvents} setUserEvents={setUserEvents} slot={count >= limit ? "Full" : "available"} />
        }
      </div>
    </div>
  );
}



