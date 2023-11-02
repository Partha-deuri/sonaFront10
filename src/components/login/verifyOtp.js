import React, { useEffect, useState } from 'react'
import { generateOTP, otpRegister, registerUser, userNotExist } from '../helper/axiosHelper'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './form.css';



export default function Verify() {


  const email = window.localStorage.getItem('email');
  const name = window.localStorage.getItem('name');
  const phone = window.localStorage.getItem('phone');
  const password = window.localStorage.getItem('password');
  const institute = window.localStorage.getItem('institute');

  const [OTP, setOTP] = useState();
  const [backOTP, setBackOTP] = useState();
  const navigate = useNavigate();
  const [first, setFrist] = useState(true);
  useEffect(() => {

    if (localStorage.loggedin) {
      window.history.back();
      // navigate('/');
    }
  }, []);
  useEffect(() => {
    if (first) {
      setFrist(false);
      let checkPromise = userNotExist({ email })
      checkPromise.then(status => {
        generateOTP(email, name).then((OTP) => {
          if (OTP) {
            setBackOTP(OTP);
            return toast.success('OTP is sent to the registered email');
          }
          return toast.error('prblm')
        })
      }).catch(err => {
        toast.error('email is already in use')
        localStorage.clear();
        navigate('/login');
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  async function onSubmit(e) {
    e.preventDefault();
    if ((OTP + "").length === 6) {
      try {
        if (OTP === backOTP) {
          await otpRegister({email}).then(() => {
            toast.success('Verify Successfully!')
            let registerPromise = registerUser({ email, name, phone, password, institute })
            toast.promise(registerPromise, {
              loading: 'Checking...',
              success: <b>Registered Successfully...!</b>,
              error: <b>USER EXIST</b>
            }
            );
            registerPromise.then(res => {
              let { token } = res.data;
              localStorage.clear();
              localStorage.setItem('token', token);
              localStorage.setItem('loggedin', true);
              window.history.go(-2);
            }).catch(err => {
              localStorage.clear();
              navigate('/login')
            })
          }
          )
        }
        else return toast.error('Wrong OTP! Check email again!')
      } catch (error) {
        return toast.error('ERROR!! Please try again after some time')
      }
    } else {
      return toast.error('OTP  should be of exectly 6 digits');
    }
  }

  const resendOTP = () => {
    let sendPromise = generateOTP(email, name);
    toast.promise(sendPromise, {
      loading: "sending",
      success: <b>OTP is sent again to the registered email</b>,
      error: <b>ERROR!! OTP not sent</b>,

    })
    sendPromise.then((OTP) => {
      if (OTP) {
        setBackOTP(OTP);
      }
    })
  }
  return (
    <div>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='bg-blue-200 flex flex-col'>
        <div className=' text-center min-h-screen bg-login flex flex-col items-center justify-center px-3 py-20'>
          <div className='backdrop-blur h-[530px] w-[300px]  lg:h-[530px] lg:w-[500px] py-20 rounded-lg shadow-xl box '>
            <h2> VerifyOTP </h2>
            <form className='mt-20 flex flex-col gap-10 items-center justify-center' onSubmit={onSubmit}>
              <input className='rounded-md py-1 px-2 text-center outline-none w-1/2' type='numeric' onChange={(e) => setOTP(e.target.value)} placeholder='Enter OTP' />
              <button className='text-center text-blue-500 rounded-md bg-red-300 py-1 px-2 hover:bg-red-400' type='Submit'>Submit</button>
            </form>
            <div onClick={resendOTP} className='mt-5 cursor-pointer'>resend otp?</div>
          </div>
        </div>
      </div>
    </div>

  )
}

