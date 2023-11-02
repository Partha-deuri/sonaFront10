/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminAllUser, adminGetUsers } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const AdminEventUserList = () => {
    const navigate = useNavigate();
    const pageLink = window.location.href;
    const event_name = pageLink.substring(pageLink.lastIndexOf('/') + 1);
    const prevPageLink = pageLink.substring(0, pageLink.lastIndexOf('/'));
    const club_name = prevPageLink.substring(prevPageLink.lastIndexOf('/') + 1);
    // console.log(event_name,club_name);
    const [usersArr, setUsersArr] = useState(["Loading"]);
    const [allUsers, setAllUsers] = useState(["Loading"]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const adminStatus = localStorage.getItem('admin')
        if (adminStatus !== 'loggedin') {
            // console.log(adminStatus);
            navigate('/admin');
        } else {

            let getUsers = adminGetUsers({ club: club_name, event: event_name });
            getUsers.then((res) => {
                const { data } = res.data;
                setUsersArr(data);
            })
            setIsLoading(true);

            let getData = adminAllUser();
            toast.promise(getData, {
                loading: 'Checking...',
                success: <b>Successfully loaded!</b>,
                error: <b>Error</b>
            });
            getData.then((res) => {
                const result = res.data.data;
                setAllUsers(result);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const eventUsers = allUsers.filter((items) => {
        return usersArr.indexOf(items.email) !== -1;
    })
    let sl=1;
    
    const UsersList = eventUsers.map((items) => {
        return (
            <tr key={items.email} className='cursor-pointer border-2 boder-black '>
                <td className='px-5 border-2 boder-black'>{sl++}</td>
                <td className='px-5 border-2 boder-black'>{items.name}</td>
                <td className='px-5 border-2 boder-black'>{items.email}</td>
                <td className='px-5 border-2 boder-black'>
                    <a href={`https://wa.me/91${items.phone}` }>{items.phone}</a>
                </td>
                <td className='px-5 border-2 boder-black'>{items.institute}</td>

            </tr>
        )
    })
    const generatePdf = () => {
        const doc = new jsPDF()
        doc.autoTable({ html: '#my-table' })
        doc.save(`${event_name}.pdf`)
    }
    return (
        <div className='text-white'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <h1>{event_name}</h1>
            <br />
            <br />
            {
                isLoading ? <h2 className='text-center'>Loading...</h2> : eventUsers.length !== 0 ?
                    <>
                        <div className='text-right  mx-20 min-w-[90%] mb-5'>
                            <button onClick={generatePdf} className='rounded-md border-2 px-2 py-1'>Export</button>
                        </div>
                        <table id='my-table' className='min-w-max table-auto'>
                            <tbody>

                                <tr className='border-2 boder-black'>
                                    <th className='border-2 boder-black'>Sl No</th>
                                    <th className='px-5 border-2 boder-black'>Name</th>
                                    <th className='px-5 border-2 boder-black'>Email</th>
                                    <th className='px-5 border-2 boder-black'>Phone</th>
                                    <th className='px-5 border-2 boder-black'>Institute</th>
                                </tr>
                                {UsersList}
                            </tbody>
                        </table>
                    </>
                    : <h2 className='text-center'>No one registered</h2>
            }
        </div>
    )
}
export default AdminEventUserList
