import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
const Preview = (props) => {
    const [slots, setSlots] = useState(true);
    useEffect(() => {
        if (props.slot) {
            if (props.slot === "Full") {
                setSlots(false);
            }
        } else {
            setSlots(true); 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const registerEvent = ({ currEvent, clubName }) => {
            toast.error("The Event has ended");
    }
    return (
        <div className='min-h-screen fixed inset-0 flex justify-center backdrop-blur items-center' >

            <Toaster position='top-center' reverseOrder={false}></Toaster>


            <div className="md:container md:mx-auto bg-cover bg-center bg-no-repeat border-2 rounded-xl my-auto overflow-y-auto bg-black"
            >
                <div>
                    <h1 className='text-white text-3xl text-center font-bold mt-5 '>{props.title}</h1>
                    <div className='text-right'><span onClick={() => props.setLoadPreview(false)} className='bg-black text-white rounded-full px-3 py-1 mx-5 hover:text-black hover:bg-white hover:border-2 hover:border-black cursor-pointer'><strong>X</strong></span></div>
                </div>
                <div className="lg:flex lg:flex-row w-full  overflow-y-auto h-[83vh]  w-10/12  rounded-xl lg:mx-auto">

                    <div className="w-11/12 flex flex-col items-center justify-center rounded-lg lg:w-1/2  px-12 py-10  border-black">
                        <img src={props.image} alt='avatar' className='rounded-xl w-72 h-96] lg:mb-10'></img>

                    </div>

                    <div className=" w-full lg:w-1/2 flex flex-col items-center justify-center py-10 px-10 ">


                        <div className="overflow-y-auto rounded-md">
                            <div className='text-white font-bold text-sm mt-4'>
                                {props.rules}
                            </div> 

                        </div>
                        <button
                            onClick={() => registerEvent({ currEvent: props.title, clubName: props.clubName })}
                            className="rounded-full bg-neutral-900 py-3 mt-5 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                             Registrations are closed
                        </button>

                    </div>



                </div>


            </div>




        </div>
    )
}

export default Preview
