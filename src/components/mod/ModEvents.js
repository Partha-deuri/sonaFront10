import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logOutAll, modGetEvents } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';

const ModEvents = () => {
    const navigate = useNavigate();
    const club_name = localStorage.getItem("modClubName");
    const [eventsArr, setEventsArr] = useState(["Loading"]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const modStatus = localStorage.getItem('mod')
        if (modStatus !== 'loggedin') {
            // console.log(adminStatus);
            navigate('/mod');
        } else {
            let getEvents = modGetEvents();
            toast.promise(getEvents, {
                loading: 'Checking...',
                success: <b>Successfully loaded!</b>,
                error: <b>Error</b>
            });
            getEvents.then((res) => {
                const { data } = res.data;
                setEventsArr(data);
                setIsLoading(false);
                // setEventsArr([data]);
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // console.log(eventsArr);
    const handleClick = (event_name) => {
        navigate(`/mod/events/${event_name}`);
    }

    const eventNames = eventsArr.map((event) => {
        return (
            <li key={event} onClick={() => handleClick(`${event}`)} className='cursor-pointer'>{event}</li>
        )
    })
    return (
        <div className='text-white'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <h1>{club_name}</h1>
            <br />
            <br />
            {
                isLoading ? <div>Loading</div> :
                    <ol className='flex flex-col gap-5 px-10'>
                        {eventNames}
                    </ol>
            }
            <div className='text-center border-2 my-10 cursor-pointer' onClick={() => {
                logOutAll(); navigate('/mod')
            }} >
                Logout
            </div>
        </div >
    )
}

export default ModEvents
