import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginValidation } from '../helper/validate';
import { adminLogin } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';

const AdminLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const adminStatus = localStorage.getItem('admin');
    if (adminStatus === 'loggedin') {
      navigate('/admin/clubs');
    }
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      let loginPromise = adminLogin({ email: values.email, password: values.password })
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>
      });

      loginPromise.then(res => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('admin', 'loggedin');
        navigate('/admin/clubs')
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
          Admin Login Page
        </strong>
      </h1>
      <form className=' flex flex-col mt-20 items-center border-4 p-[10rem] gap-10 text-black ' onSubmit={formik.handleSubmit}>
        <div className='border-2 min-w-full rounded-sm'>
          <input {...formik.getFieldProps('email')} className='min-w-full outline-none px-1' type="email" placeholder='Email' />
        </div>
        <div className='border-2 min-w-full rounded-sm '>
          <input {...formik.getFieldProps('password')} className='min-w-full outline-none px-1' type="password" placeholder='Password' />
        </div>
        <div className='flex border-2 px-2 max-w-fit'>
          <button className='text-center'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin;