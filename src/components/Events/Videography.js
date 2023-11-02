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
    title: "Real to Reel",
    image: v1,
    text:<>
      <h3>** For any further queries contact 8822078464 (Uddipan Bhattacharjee) **</h3>
      </>,

  },
  {
    id: 2,
    title: "Advertisement",
    image: v2,
    text: <><h3>Rules:</h3>
      <br></br>1. Don’t Produce an advertisement that’s already out. 
      <br></br>2. Your product should be genuine and innovative and comply with the theme.
      <br></br>3.  Video Length should not exceed 3 mins.
      <br></br>4. Minimum of 4 members.
      <br></br>5. Maximum of 8 members
      <br></br>6.  No explicit content is allowed.
      <br></br>7. One video from each block is required.

      <br/>

       <h3>Points:</h3>
      <br></br>1st : 70 points
      <br></br>2nd: 50 points
      <br></br>3rd : 30 points
      <br></br>
      <h3>Negative points: -50</h3>
 </>,
  },
  {
    id: 3,
    title: "Music Video",
    image: v3,
    text: <><h3>Rules:</h3> <br></br>1. Should not exceed a length of 5 min 
      <br></br>2. Minimum of 4 and  Maximum of 10 Members respectively 
<br></br>3. No explicit Content Allowed<br></br>
  <br></br>4. Song of Any Language is allowed <br></br>
  5. One Video from each Block is Required.
  <br></br>
  <br></br>
  <h3>Points:</h3>
  <br></br>1st : 100 points
  <br></br>2nd: 70 points
  <br></br>3rd : 50 points
  <br></br>
   <h3>Negative points: -70</h3>
 </>,
  },
  {
    id: 4,
    title: "Trailer Parody",
    image: v4,
    url: "#",
    text: <><h3>Rules:</h3> <br></br>1. It should parody the existing trailer 
      <br></br>2. The parody can be of any Language
      <br></br>3. Minimum of 6 members
      <br></br>4. Maximum of 16 members 
      <br></br>5. No explicit content is allowed.
      <br></br>6. One video from each block is required
      <br></br>
       <h3>Points:</h3>
      <br></br>1st : 70 points
      <br></br>2nd: 50 points
      <br></br>3rd : 30 points
      <br></br>
      <h3>Negative points: -40</h3>
 </>,
  },
  {
    id: 5,
    title: "Documentary",
    image: v5,
    url: "#",
    text: <><h3>Rules:</h3> <br></br>1. time limit is 8 to 15 min. 25 negative for the 1st exceeding limit and 15 for each next exceeding minute
      <br></br>2. . The number of members should be 6 to 14.
      <br></br>3.The documentary should have content that tells the facts about actual people or any true event or any social or scientific topic that affects society.
      <br></br>4.If the subject of the documentary is a personality, then that person should be
              respectful in society. The content should be based on a true story however some extra
              dialogue can be added to make it interesting, but the characters must be from a true
                  story.
      <br></br>5. The video should not contain any clip from an online source, everything must be recorded manually. The video will be disqualified if this instruction is not followed.

     
      <br></br>
       <h3>Points:</h3>
      <br></br>1st : 70 points
      <br></br>2nd: 50 points
      <br></br>3rd : 30 points
      <br></br>
      <h3>Negative points: -20</h3>
 </>,
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



