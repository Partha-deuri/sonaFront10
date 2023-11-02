import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { logOutAll } from "../helper/axiosHelper";
import toast, { Toaster } from "react-hot-toast";

export default function Nav(){

    const navigate = useNavigate();
    const [logState, setLogState] = useState("Login");
    useEffect(() => {
        if (localStorage.loggedin) {
            setLogState("Logout");
        } else {
            setLogState("Login")
        }
    }, [navigate])
    const handleClick = () => {
        if (localStorage.loggedin) {
            logOutAll();
            setLogState("Login");
            // toast.success("Logout successfully")
        } else {
            navigate('/login');
        }
    }
return(

<nav className="text-red-200 ">
<Toaster position='top-center' reverseOrder={false}></Toaster>
<button className='mt-2  md:mb-4 h-6 flex md:h-8 items-center justify-center rounded-md text-[#66347F] bg-[#B68973] border-2 border-white px-2 py-1 text-center hover:bg-white cursor-default'>
                <div onClick={handleClick} className='text-[#66347F] font-seminormal tracking-widest text-center bg-[#B68973] hover:bg-white rounded-sm px-1 cursor-pointer'>{logState}</div>
            </button>

</nav>)

}