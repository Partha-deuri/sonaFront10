/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { sonaGetData } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const AdminSona = () => {
    const navigate = useNavigate();
    const [userSona, setUserSona] = useState(["Loading"]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const adminStatus = localStorage.getItem('admin')
        if (adminStatus !== 'loggedin') {
            navigate('/admin');
        } else {
            setIsLoading(true);
            let getData = sonaGetData();
            toast.promise(getData, {
                loading: 'Checking...',
                success: <b>Successfully loaded!</b>,
                error: <b>Error</b>
            });
            getData.then((res) => {
                const data = res.data.data;
                setUserSona(data);
                setIsLoading(false);
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let idx = 1;
    const sonaUsers = userSona.map((items) => {
        return (
            <tr key={items.email} className='cursor-pointer border-2 boder-black '>
                <td className='px-5 border-2 boder-black'>{idx++}</td>
                <td className='px-5 border-2 boder-black'>{items.name}</td>
                <td className='px-5 border-2 boder-black'>{items.age}</td>
                <td className='px-5 border-2 boder-black'>{items.email}</td>
                <td className='px-5 border-2 boder-black'>{items.phone}</td>
                <td className='px-5 border-2 boder-black'>{items.gender}</td>

            </tr>
        )
    })
    const generatePdf = () => {
        const doc = new jsPDF()
        doc.autoTable({ html: '#my-table' })
        doc.save('sonabyssTitles.pdf')
    }
    return (
        <div className='text-white'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <h1>Sonabyss Titles</h1>
            <br />
            <br />
            {
                isLoading ? <h2 className='text-center'>Loading</h2> : userSona.length !== 0 ?
                    <>
                        <div className='text-right  mx-20 min-w-[90%] mb-5'>
                            <button onClick={generatePdf} className='rounded-md border-2 px-2 py-1'>Export</button>
                        </div>
                        <table id='my-table' className='min-w-[90%] mx-20'>
                            <tbody>
                                <tr className='border-2 boder-black'>
                                    <th className='border-2 boder-black'>Sl. No.</th>
                                    <th className='border-2 boder-black'>Name</th>
                                    <th className='border-2 boder-black'>Age</th>
                                    <th className='border-2 boder-black'>Email</th>
                                    <th className='border-2 boder-black'>Phone</th>
                                    <th className='border-2 boder-black'>Gender</th>
                                </tr>
                                {sonaUsers}
                            </tbody>
                        </table>
                    </>
                    : <h2 className='text-center'>No one Registered</h2>
            }
        </div>
    )
}

export default AdminSona