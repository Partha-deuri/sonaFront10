/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminAllUser } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AdminAllUsers = () => {
    const navigate = useNavigate();
    const [allUsers, setAllUsers] = useState(["Loading"]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const adminStatus = localStorage.getItem('admin')
        if (adminStatus !== 'loggedin') {
            navigate('/admin');
        } else {
            setIsLoading(true);
            let getData = adminAllUser();
            toast.promise(getData, {
                loading: 'Checking...',
                success: <b>Successfully loaded!</b>,
                error: <b>Error</b>
            });
            getData.then((res) => {
                const data = res.data.data;
                setAllUsers(data);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let sl = 1;
    const UsersList = allUsers.map((items) => {

        return (
            <tr key={items.email} className='border-2 boder-black py-2 h-16'>
                <td className='px-5 border-2 boder-black'>{sl++}</td>
                <td className='px-5 border-2 boder-black'>{items.name}</td>
                <td className='px-5 border-2 boder-black'>{items.email}</td>
                <td className='px-5 border-2 boder-black cursor-pointer'>{items.phone}</td>
                <td className='px-5 border-2 boder-black'>{items.institute}</td>
                <td className='px-5 border-2 boder-black'>
                    {
                        items.events ? items.events.map((eve) => {
                            return (<div key={eve} >{eve}</div>)
                        }) : ""
                    }
                </td>
            </tr>
        )
    })

    const generatePdf = () => {
        const doc = new jsPDF()
        doc.autoTable({ html: '#my-table' })
        doc.save('userList.pdf')
    }


    return (
        <div className='text-white'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <h1>All Users</h1>
            <br />
            <br />
            {
                isLoading ? <h2 className='text-center'>Loading...</h2> :
                    <>
                        <div className='text-right  mx-20 min-w-[90%] mb-5'>
                            <button onClick={generatePdf} className='rounded-md border-2 px-2 py-1'>Export</button>
                        </div>
                        <table id="my-table" className='min-w-[90%] mx-20 table-auto'>
                            <tbody>

                                <tr className='border-2 boder-black pb-10 h-12'>
                                    <th className='border-2 boder-black'>Sl. No.</th>
                                    <th className='border-2 boder-black'>Name</th>
                                    <th className='px-5 border-2 boder-black'>Email</th>
                                    <th className='px-5 border-2 boder-black'>Phone</th>
                                    <th className='px-5 border-2 boder-black'>Institute</th>
                                    <th className='px-5 border-2 boder-black'>Events</th>
                                </tr>
                                {UsersList}
                            </tbody>
                        </table>
                    </>
            }
        </div>
    )
}

export default AdminAllUsers