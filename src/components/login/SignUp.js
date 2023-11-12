import React, { useEffect, useState } from "react";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";
import { userNotExist } from "../helper/axiosHelper";
import toast, { Toaster } from "react-hot-toast";
import { UilEye } from '@iconscout/react-unicons'
import { UilEyeSlash } from '@iconscout/react-unicons'

function Signup() {
  const [textType, setText] = useState("password")
  const [neristian, setNeristian] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {

    if (localStorage.loggedin) {
      // navigate('/');
      window.history.back();
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      phone: ''
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
         return toast.error('The Event has ended');
    }
  })
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
    <div className="bg-login min-h-screen flex flex-col items-center justify-center">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="min-w-[400px] border-2 border-white items-center py-6 px-6 flex flex-col backdrop-blur rounded-md h-[50%] box2">
        <h2 className="FormTitle ">Sign Up</h2>

        <form className=" py-1 px-6 flex flex-col gap-6 rounded-md" onSubmit={formik.handleSubmit}>
          <div className="input-box">
            <input {...formik.getFieldProps('name')} type="text" placeholder="Name" className='inputInside' />
          </div>
          <div className="input-box">
            <input {...formik.getFieldProps('email')} type="email" placeholder="Email" className='inputInside' />
          </div>
          <div className="input-box">
            <input {...formik.getFieldProps('phone')} type="tel" placeholder="Phone Number" className='inputInside' />
          </div>
            <div className="input-box flex">
                <input {...formik.getFieldProps('password')} type={textType} placeholder="Password" className='inputInside' />
                <UilEye id="show" className="text-white hidden" onClick={() => { changeEye("hide") }} />
                <UilEyeSlash className="text-white" id="hidden" onClick={() => { changeEye("show") }} />
          </div>
          <div className="input-box">
            <input  {...formik.getFieldProps('confirmPassword')} type={textType} placeholder="Confirm Password" className='inputInside' />
          </div>
          <label className="checkboxText">
            <input type="checkbox" onClick={() => setNeristian(!neristian)} />
            Are you a NERISTIAN?
          </label>
          <button className="button bg-[#f8961e] hover:border-white hover:border-2">SignUp</button>
        </form>
        <p>
          Aready have Account? <Link className="px-2 py-1" to='/login'>Login</Link>
          </p>
      </div>

    </div>
  );
}

export default Signup;
