import './form.css';
import React, { useEffect, useState } from 'react'
import { generateOTP, loginUser, resetPassword, verifyUserEmail, otpReset } from '../helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Forgot() {
    const [email, setEmail] = useState();
    const [userName, setUserName] = useState("User");
    const [OTP, setOTP] = useState();
    const [backOTP, setBackOTP] = useState();
    const [sentOTP, setSentOTP] = useState(false);
    const [verifiedOTP, setVerifiedOTP] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {

        if (localStorage.loggedin) {
            navigate('/');
        }
    }, [navigate]);

    async function onEmailSubmit(e) {
        e.preventDefault();
        let checkEmailPromise = verifyUserEmail({ email })
        localStorage.setItem("email",email);

        checkEmailPromise.then(res => {
            const { status, name } = res;
            console.log(res);
            if (status === 201) {
                setUserName(name);
                generateOTP(email, name).then((OTP) => {
                    if (OTP) {
                        setBackOTP(OTP);
                        setSentOTP(true);
                        return toast.success('OTP sent to the registered email');
                    }
                    return toast.error('Error')
                })
            } else {
                toast.error("user doesn't exist");
            }
        }).catch(err => {
            toast.error("user doesn't exist")
        })
    }

    async function onOTPSubmit(e) {
        e.preventDefault();
        if ((OTP + "").length === 6) {

            try {
                if (OTP === backOTP) {
                    const savedEmail = localStorage.getItem("email");
                    await otpReset({ email:savedEmail }).then(() => {
                        toast.success('Verify Successfully!')
                        setSentOTP(false);
                        setVerifiedOTP(true);
                    })
                } else {
                    toast.error("invalid otp");
                }
            } catch (err) {
                toast.error("invalid otp err")
            }
        }
    }

    const resendOTP = () => {
        const savedEmail = localStorage.getItem("email");
        let sendPromise = generateOTP({email:savedEmail}, userName);

        toast.promise(sendPromise, {
            loading: "sending",
            success: <b>OTP sent again</b>,
            error: <b>OTP not sent</b>,
        })
        sendPromise.then(OTP => {
            setBackOTP(OTP);
        })
    }


    const onPasswordSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            toast.error("password must be of  length 6");
        } else if (password !== confirmPassword) {
            toast.error("Password and confirm Password mismatch");
        } else {
            let resetPromise = resetPassword({ email, password })
            toast.promise(resetPromise, {
                loading: 'Updating...',
                success: <b>Updated Successfully...!</b>,
                error: <b>Error!!</b>
            })
            resetPromise.then(status => {
                if (status === 201) {
                    let loginPromise = loginUser({ email, password })
                    toast.promise(loginPromise, {
                        loading: 'Checking...',
                        success: <b>Operation Successfully...!</b>,
                    });
                    loginPromise.then(res => {
                        let { token } = res.data;
                        localStorage.clear();
                        localStorage.setItem('token', token);
                        localStorage.setItem('loggedin', true);
                        setTimeout(() => {
                            navigate('/')
                        }, 100)
                    }).catch(err => {
                        console.log(err, "log error");
                    })
                    toast.success("Password updated");
                }
            }).catch(err => {
                toast.error("Error!! Please try again later");
                console.log(err, "error");
                navigate('/login');
            })
        }
    }

    return (
        <div className='bg-blue-200 flex flex-col'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className=' text-center min-h-screen bg-login flex flex-col items-center justify-center px-3 py-20'>
                {
                    !sentOTP && !verifiedOTP &&
                    <div className='backdrop-blur h-[530px] w-[300px]  lg:h-[530px] lg:w-[500px] py-20 rounded-lg shadow-xl box2 border-white border-2'>
                        <h2> Forgot Password? </h2>
                        <form className='mt-20 flex flex-col gap-10 items-center justify-center' onSubmit={onEmailSubmit}>
                            <input className='rounded-md py-1 px-2 text-center outline-none w-1/2' type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                            <button className='text-center text-blue-500 rounded-md bg-red-300 py-1 px-2 hover:bg-red-400' type='Submit'>Send OTP</button>
                        </form>
                    </div>
                }
                {
                    sentOTP &&
                    <div className='backdrop-blur h-[530px] w-[300px]  lg:h-[530px] lg:w-[500px] py-20 rounded-lg shadow-xl '>
                        <h2>Verify OTP </h2>
                        <form className='mt-20 flex flex-col gap-10 items-center justify-center' onSubmit={onOTPSubmit} >
                            <input className='rounded-md py-1 px-2 text-center outline-none w-1/2' type='numeric' onChange={(e) => setOTP(e.target.value)} placeholder='OTP' />
                            <button className='text-center text-blue-500 rounded-md bg-red-300 py-1 px-2 hover:bg-red-400' type='Submit'>Verify</button>
                            <p onClick={resendOTP} className='text-center text-white'>resend otp?</p>
                        </form>
                    </div>
                }
                {
                    verifiedOTP &&
                    <div className='backdrop-blur h-[530px] w-[300px]  lg:h-[530px] lg:w-[500px] py-20 rounded-lg shadow-xl '>
                        <h2 className='text-center'>Reset Password </h2>
                        <form className='mt-20 flex flex-col gap-10 items-center justify-center' onSubmit={onPasswordSubmit}>
                            <input className='rounded-md py-1 px-2 text-center outline-none w-1/2' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            <input className='rounded-md py-1 px-2 text-center outline-none w-1/2' type='password' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
                            <button className='text-center text-blue-500 rounded-md bg-red-300 py-1 px-2 hover:bg-red-400' type='Submit'>Change Password</button>
                        </form>
                    </div>
                }




            </div>



        </div>
    )
}


