
import elo1 from "../assets/elo1.jpg"
import elo2 from "../assets/elo2.jpg";
import elo3 from "../assets/elo3.jpg";

import { useEffect } from 'react';
import  { Toaster } from 'react-hot-toast';
import { getUserEvents } from '../helper/axiosHelper';
import {  useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import Preview from "./Preview";



const cards = [
    {
      id: 1,
      title: "Extempore Speech",
      image: elo1,
      text :  <><h3>Rules:</h3> <br></br>1. Two(2) minutes will be given to each participants to form the content of their speech.<br></br>2. After the 2 minutes time, they will then be given 5 minutes to deliver their speech.
      <br></br>3. The extempore speech must be only in English.<br></br><br></br><br></br> <h3>Prize:</h3><br></br> 1st :3k<br></br> 2nd :2k <br></br></>,
     
    },
    {
      id: 2,
      title: "Storytelling",
      image: elo2,
      text :  <>
                  <h3>Description :</h3> <br></br> <br></br>
                  <h5>•Participants have to narrate a short story revolving around a central figure who can be anybody on any theme.The story must be based on her/his personal experience.</h5>
                  <br></br>
                  <br></br>
                  <h3>Rules :</h3>
                  <h5>1.Time limit of 7 minutes will be alloted to each participants to narrate their story.</h5>
                  <h5>2. One cannot take help from any resources during narration.</h5>
                  <h5>3.It can be narrated in Hindi/English.</h5>
                  <br></br>
                  <br></br>
                  <h3>Prizes :</h3>
                  <br></br>
                  <br></br>
                  <h5>1st: 3k</h5> <br></br>
                  <h5>2nd: 2k</h5>


          </>,


    },
    {
      id: 3,
      title: "Open Mic",
      image: elo3,
      text :  <>
      <h3>Description :</h3> <br></br> <br></br>
      <h5>Open mic will include performance arts like Stand-up comedy, music(song,rap,beatboxing), shayari & poetry.All the performances can be done in Hindi or English.</h5>
      <br></br>
      <br></br>
      <h3>Rules :</h3> <br></br>
      <h3>(a) Stand up comedy:</h3> <br></br>
      <h5>1. Each participants will be given a max. of 10 minutes of stage time.</h5>
      <h5>2. The comedy must be an original creation of the stand-up.</h5>
      <h5>3.It can be narrated in Hindi/English.</h5>
      <br></br>
      <br></br>
      <h3>(b) Poem recitation</h3> <br></br>
      <h5>1. Participants will be given 5 minutes to recite their "self- composed" poem to the audience.(Hindi/English)</h5>
      <h5>2. It can be based on any topic.</h5>
      <h5>3. One can also take help from their prepared material to recite the poem.</h5>
      <h5>4.No amount of plagiarism will be accepted.</h5>
      <br></br>
      <br></br>
      <h3>(c) Shayari Prastut</h3> <br></br>
      <h5>1.Max. of 5 minutes will be given to recite their shayaris.</h5>
      <h5>2.The shayari should comprise a minimum of atleast 3 shers.</h5>
      <h5>3.It should be self-composed; no level of plagiarism will be accepted.</h5>
      <br></br>
      <br></br>
      <h3>(d) Musical Arts</h3> <br></br>
      <h5>1. Only singing, raping & beat boxing will be entertained.</h5>
      <h5>2. Max. of 7 minutes will be allocated for each performance.</h5>
      <h5>3. The performances can either be self-made or a cover.</h5>
      <br></br>
      <br></br>
      <h3>Prizes For Each Category:</h3>
      <br></br>
      <br></br>
      <h5>Winner(1st): 3k</h5> <br></br>
      


</>,
    },
  ]
 
export default function Elocution() {
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
    <div className="flex  flex-col min-h-screen items-center justify-center bg-center bg-no-repeat bg-cover py-6 flex items-center justify-center">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className=' flex items-center mb-8   justify-center w-full '>
        <h2 className='heading text-black leading-wide  text-5xl'>ELOCUTION CLUB</h2>
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
          <Preview setLoadPreview={setLoadPreview} title={title} rules={rules} image={image} clubName={"Elocution Club"} userEvents={userEvents} setUserEvents={setUserEvents} />
        }
      </div>
    </div>
  );
}





  
  
