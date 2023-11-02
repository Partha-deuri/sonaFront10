import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminGetEvents } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';

const AdminEvents = () => {
    const navigate = useNavigate();
    const pageLink = window.location.href;
    const club_name = pageLink.substring(pageLink.lastIndexOf('/') + 1);
    const [eventsArr, setEventsArr] = useState(["Loading"]);
    const [isLoading, setIsLoading] = useState(true); 
    useEffect(() => { 
        const adminStatus = localStorage.getItem('admin')
        if (adminStatus !== 'loggedin') {
            // console.log(adminStatus);
            navigate('/admin');
        } else {

            let getEvents = adminGetEvents(club_name);
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
        navigate(`/admin/clubs/${club_name}/${event_name}`)
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
        </div>
    )
}

export default AdminEvents
