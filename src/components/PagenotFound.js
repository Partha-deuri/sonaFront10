import { Link } from "react-router-dom"

export default function PageNotFound(){


return(
<div className="min-h-screen bg-login">
    
        <div className="flex flex-col gap-10 items-center justify-center min-h-screen ">


                    <h2 className="text-center">The page you are looking for does not exist</h2>


                <button className="text-center bg-orange-300 hover:bg-orange-500 text-xl text-white py-1 px-2 rounded-lg ">
                    <Link to='/'>Take Me Home</Link>


                </button>
        </div>

  
</div>


)


}