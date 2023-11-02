import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {  modValidation } from '../helper/validate';
import { modLogin } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';

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
      let loginPromise = modLogin({ clubName:values.clubName, secretKey:values.secretKey });
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
        <div className='border-2 min-w-full rounded-sm '>
          <input {...formik.getFieldProps('secretKey')} className='min-w-full outline-none px-1' type="password" placeholder='SecretKey' />
        </div>
        <div className='flex border-2 px-2 max-w-fit'>
          <button className='text-center' type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default ModVerify;