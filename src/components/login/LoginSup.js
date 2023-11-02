import React, { useEffect, useState } from 'react';
import "./form.css";
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginValidation } from '../helper/validate';
import { loginUser, verifyUserEmail } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';
import { UilEye } from '@iconscout/react-unicons'
import { UilEyeSlash } from '@iconscout/react-unicons'


function Login() {

  // const [viewType, setViewType] = useState(true);
  const [textType, setText] = useState("password")


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
    },
    validate: loginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      let checkEmailPromise = verifyUserEmail({ email: values.email })
      checkEmailPromise.then(res => {
        const { status } = res;
        if (status === 201) {
          let loginPromise = loginUser({ email: values.email, password: values.password })
          toast.promise(loginPromise, {
            loading: 'Checking...',
            success: <b>Login Successfully...!</b>,
            error: <b>Password Not Match!</b>
          });

          loginPromise.then(res => {
            let { token } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('loggedin', true);
            window.history.back();
          }).catch(err => {

          })
        } else {
          return toast.error("user doesn't exist");
        }
      }).catch(err => {
        toast.error("ERROR!! User doesn't exist");
      })
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
    <>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="body bg-login bg-center bg-no-repeat">
        <div className="Apps ">
          <div className="box backdrop-blur">
            <h2 className="FormTitle">Login</h2>

            <form onSubmit={formik.handleSubmit}>
              <div className="input-box text-left">
                <input {...formik.getFieldProps('email')} type="email" placeholder="Email" className='inputInside' />
              </div>
              <div className="input-box flex text-left">
                <input {...formik.getFieldProps('password')} type={textType} placeholder="Password" className='inputInside' />
                <UilEye id="show" className="text-white hidden" onClick={() => { changeEye("hide") }} />
                <UilEyeSlash className="text-white" id="hidden" onClick={() => { changeEye("show") }} />
              </div>


              <button className='button  hover:border-white hover:border-2' type='submit'>Login</button>
            </form>
            <div className='forgotLink'>
              <Link className='font-seminormal tracking-widest text-center py-1 px-1' to="/forgot">forgot password?</Link>
              <p className='font-seminormal tracking-widest text-center py-10 px-1 text-black'>
                Don't have account?
                <Link className='font-seminormal tracking-widest text-center py-1 px-1' to="/signup">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;
