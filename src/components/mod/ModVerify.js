import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { modValidation } from '../helper/validate';
import { modLogin } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';
import { UilEye } from '@iconscout/react-unicons'
import { UilEyeSlash } from '@iconscout/react-unicons'
import { useState } from 'react';

const ModVerify = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const modStatus = localStorage.getItem('mod');
        if (modStatus === 'loggedin') {
            navigate('/mod/events');
        }
    })
    const formik = useFormik({
        initialValues: {
            clubName: '',
            secretKey: '',
        },
        validate: modValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            let loginPromise = modLogin({ clubName: values.clubName, secretKey: values.secretKey });
            toast.promise(loginPromise, {
                loading: 'Checking...',
                success: <b>Login Successfully...!</b>,
                error: <b>Credentials doesn't match!!!</b>
            });

            loginPromise.then(res => {
                // console.log(res);
                let { token } = res;
                console.log(values.clubName);
                localStorage.setItem('modClubName', values.clubName);
                localStorage.setItem('token', token);
                localStorage.setItem('mod', 'loggedin');
                navigate('/mod/events')
            }).catch(err => {
                console.log(err);
            })
        }
    })
    const [textType, setText] = useState("password")


    const changeEye = (task) => {
        if (task === "show") {
            document.getElementById('hidden').style.display = "none";
            document.getElementById('show').style.display = "block";
            setText("text")
        } else {
            document.getElementById('show').style.display = "none";
            document.getElementById('hidden').style.display = "block";
            setText("password")
        }

    }
    return (
        <div className='flex flex-col items-center text-white'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <h1>
                <strong>
                    Incharges Login Page
                </strong>
            </h1>
            <form className=' flex flex-col mt-20 items-center border-4 p-[10rem] gap-10 text-black ' onSubmit={formik.handleSubmit}>
                <div className='border-2 min-w-full rounded-sm'>
                    <input {...formik.getFieldProps('clubName')} className='min-w-full outline-none px-1' type="text" placeholder='Club Name' />
                </div>
                <div className='border-2 min-w-full rounded-sm flex'>
                    <input {...formik.getFieldProps('secretKey')} className='min-w-fit outline-none px-1 ' type={textType} placeholder='SecretKey' />
                    <div className='bg-white'>
                        <UilEye id="show" className="text-black hidden cursor-pointer" onClick={() => { changeEye("hide") }} />
                        <UilEyeSlash className="text-black cursor-pointer " id="hidden" onClick={() => { changeEye("show") }} />
                    </div>
                </div>
                <div className='flex border-2 px-2 max-w-fit'>
                    <button className='text-center' type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default ModVerify;