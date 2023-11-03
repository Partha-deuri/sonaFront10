/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { cosplayGetData } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AdminCosplay = () => {
    const navigate = useNavigate();
    const [usersCosplay, setUsersCosplay] = useState(["Loading"]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const adminStatus = localStorage.getItem('admin')
        if (adminStatus !== 'loggedin') {
            // console.log(adminStatus);
            navigate('/admin');
        } else {
            setIsLoading(true);
            let getData = cosplayGetData();
            toast.promise(getData, {
                loading: 'Checking...',
                success: <b>Successfully loaded!</b>,
                error: <b>Error</b>
            });
            getData.then((res) => {
                const data = res.data.data;
                // console.log(data,"admin");
                setUsersCosplay(data);
                setIsLoading(false);
                // setEventsArr([data]);
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  

    const cosplayUsers = usersCosplay.map((items) => {
        return (
            <tr key={items.email} className='cursor-pointer border-2 boder-black '>
                <td className='px-5 border-2 boder-black'>{items.name}</td>
                <td className='px-5 border-2 boder-black'>{items.email}</td>
                <td className='px-5 border-2 boder-black'>{items.phone}</td>
                <td className='px-5 border-2 boder-black'>{items.gender}</td>
                <td className='px-5 border-2 boder-black'>{items.cosplayCharcter}</td>
                <td className='p-5'>
                    <img src={items.paymentImg || ""} className=" mb-4 h-20" />
                </td>
            </tr>
        )
    })

    const generatePdf = () => {
        const doc = new jsPDF()
        doc.autoTable({ html: '#my-table' })
        doc.save('cosplay.pdf')
    }

    return (
        <div className='text-white'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <h1>Cosplay</h1>
            <br />
            <br />
            {
                isLoading ? <h2 className='text-center'>Loading...</h2> : usersCosplay.length !== 0 ?
                    <>
                        <div className='text-right  mx-20 min-w-[90%] mb-5'>
                            <button onClick={generatePdf} className='rounded-md border-2 px-2 py-1'>Export</button>
                        </div>
                        <table id='my-table' className='min-w-[90%] mx-20'>
                            <tr className='border-2 boder-black'>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Cosplay Character</th>
                                <th>Image</th>
                            </tr>
                            {cosplayUsers}
                        </table>
                    </>
                    : <h2 className='text-center'> No one Registered </h2>
            }
        </div>
    )
}

export default AdminCosplay
