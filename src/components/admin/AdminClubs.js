import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminGetClubs, logOutAll } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';

const AdminClubs = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [clubsArr, setClubsArr] = useState(["Loading"]); 
    // const clubsArr =[] 
    // console.log(clubsArr); 
    useEffect(() => {
        const adminStatus = localStorage.getItem('admin')
        if (adminStatus !== 'loggedin') {
            // console.log(adminStatus);
            navigate('/admin');
        } else {

            let getClubs = adminGetClubs();
            toast.promise(getClubs, {
                loading: 'Checking...',
                success: <b>Successfully Loaded</b>,
                error: <b>Error</b>
            });
            getClubs.then((res) => {
                const { data } = res.data;
                setClubsArr(data);
                setIsLoading(false);

            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleClick = (club_name) => {
        navigate(`/admin/clubs/${club_name}`)
    }
    const handleCosplay = () => {
        navigate(`/admin/cosplay`)
    }
    const handleSona = () => {
        navigate(`/admin/sona`)
    }
    const handleAllUsers = () => {
        navigate(`/admin/allusers`)
    }
    let sl=1;
    const clubNames = clubsArr.map((club) => {
        return (
            <div key={club} onClick={() => handleClick(`${club}`)} className='cursor-pointer py-2'>{sl++}.  {club}</div>
        )
    })
    const logout = () => {
        logOutAll();
        navigate('/')
    }

    
    return (
        <div className='text-white'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <h1>Clubs</h1>
            <br />
            <br />
            {
                isLoading ? <div>Loading </div> :
                    <div className='mx-10'>
                        {clubNames}
                    </div>
            }
            <br />
            <h3 className='mx-5'>Mega</h3>
            
            <div onClick={handleCosplay} className='cursor-pointer mx-10 my-5'>
                Cosplay
            </div>
            <div onClick={handleSona} className='cursor-pointer mx-10 my-5'>
                Sonabyss Titles
            </div>
            <div onClick={handleAllUsers} className='cursor-pointer mx-10 my-5'>
                All Users
            </div>
            <div onClick={() => logout()} className='border-2 mt-10 text-center cursor-pointer'>Logout</div>
        </div>
    )
}

export default AdminClubs
