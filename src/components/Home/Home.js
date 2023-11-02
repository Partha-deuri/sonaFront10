import About from './About.js';
import Singer from './Singers.js' 
import Clubs from './Clubs.js';
import Sonabyss from './Sonabyss.js'
import Footer from './Footer.js'
import Cosplay from "./Cosplay.js"


import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Home(){

Aos.init({

    duration:1800,
    offset:0,
});




    return(
    <div>
            <About/>
            <Sonabyss/>
            <Cosplay/>
            <Singer/>
            <Clubs/>
            <Footer/>




    </div>
    
    
    )
    
    
    }