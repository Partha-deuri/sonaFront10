/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import r1 from '../components/assets/cosplayRules.JPG';
import r2 from '../components/assets/cosplayRules1.JPG';
import r3 from '../components/assets/cosplayRules2.JPG';
import qr from "../components/assets/payment.jpg";
import terms from '../components/assets/conditions.jpg'
import { useFormik } from 'formik';
import { cosplayRegister, cosplayVerify, verifyToken, verifyUserEmail } from './helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import convertToBase64 from './convert.js';



export default function CosplayReg() {
    const [sc, setImg] = useState(null)
    const [registeded, setRegistered] = useState(false);
    const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
    // const [file, setFile] = useState(null);

    const onUpload = async e => {
        // setFile(e.target.files[0])/
        const base64 = await convertToBase64(e.target.files[0]);
        setImg(base64);
        // console.log(base64);
    }
    const navigate = useNavigate();
    const tokenTest = localStorage.getItem('token');
    useEffect(() => {
        if (tokenTest) {
            verifyToken(tokenTest);
        }
        if (localStorage.loggedin) {
            getUserData();
        }
    }, [tokenTest])

    const getUserData = async () => {
        await cosplayVerify().then(res => {
            const userInfo = res.data.data;
            const userResult = res.data.result.result;
            if (userResult === "registered") {
                setRegistered(true);
            }
            else {
                setRegistered(false);
            }
            setUserData(userInfo);
        })
    }

    const formik = useFormik({
        initialValues: {
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            gender: '',
            character: '',
        },
        enableReinitialize: true,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {

            if (localStorage.loggedin) {
                if (values.name && values.email && values.phone && values.gender && values.character) {
                    if (sc===null) {
                        toast.error("Please upload the payment screenhot");
                    } else {
                        let checkEmailPromise = verifyUserEmail({
                            email: values.email
                        })
                        checkEmailPromise.then(res => {
                            const { status } = res;
                            if (status === 201) {

                                const formData = { name: values.name, email: values.email, phone: values.phone, gender: values.gender, cosplayCharacter: values.character, paymentImg: sc }

                                let cosplayPromise = cosplayRegister(formData)
                                toast.promise(cosplayPromise, {
                                    loading: 'Checking...',
                                    success: <b>Registered Successfully...!</b>,
                                    error: <b>Already Registered</b>
                                });
                                cosplayPromise.then(res => {
                                    setRegistered(true);
                                }).catch(err => {
                                    console.log(err);
                                })
                            } else {
                                return toast.error("user doesn't exist");
                            }
                        }).catch(err => {
                            toast.error("ERROR!! Server is not live");
                        })
                    }
                }
                else {
                    toast.error("Please fill the details")
                }
            } else {

                toast.error("Please log in first");
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            }
        }
    })

    const handleFormClick = () => {
        if (!localStorage.loggedin) {
            toast.error("Please log in first");
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
        }
    }




    return (
        <div className="min-h-screen w-100vw py-10 bg-mo lg:bg-bck bg-cover bg-right bg-no-repeat">
            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className="container mx-auto">

                <div className="flex flex-col w-full  bg-cosplay lg:bg-none bg-cover bg-no-repeat bg-center   lg:h-[83vh] lg:flex-row w-10/12 lg:w-8/12 rounded-xl lg:mx-auto   shadow-3xl shadow-red-500  border-2 border-blue-200 overflow-hidden backdrop-blur-small">

                    <div className="the_image_div w-full lg:w-1/2 overflow-auto lg:bg-cosplay bg-cover bg-no-repeat bg-center  flex flex-col items-center py-2 px-1 ">
                        <h3 className='text-white '>Rules and Payment detail:</h3>


                        <img className='my-2' src={r3} alt='avatar'></img>
                        <img className='w-full my-2' src={r1} alt='avatar'></img>
                        <img className='my-2' src={r2} alt='avatar'></img>
                        <img className='my-2' src={terms} alt='avatar'></img>
                        <img className='' src={qr} alt='avatar'></img>



                    </div>

                    <div className="the_form_div w-full flex flex-col items-center justify-center lg:backdrop-blur-[1px] overflow-auto   lg:w-1/2  px-12 pt-28 pb-4 lg:shadow-xl lg:shadow-black  lg:border-2 border-blue-200">
                        {
                            registeded ?
                                <h1 className="text-[#45FFCA] text-3xl font-bold mb-20 text-center">Already Register</h1>
                                :
                                <>

                                    <h1 className="text-[#45FFCA] text-3xl font-bold text-center">Register</h1>
                                    <form onSubmit={formik.handleSubmit} onClick={handleFormClick}>
                                        <div className="my-4">

                                            <input {...formik.getFieldProps('name')} className="border border-gray-400 py-1 px-2 w-full outline-none rounded-md" type="text" placeholder="Fullname"></input>

                                        </div>


                                        <div className="mt-5">
                                            <input {...formik.getFieldProps('email')} className="border border-gray-400 py-1 px-2 rounded-md w-full  outline-none" placeholder="Email" type="email"></input>
                                        </div>

                                        <div className="mt-5">
                                            <input {...formik.getFieldProps('phone')} className="border border-gray-400 py-1 px-2 rounded-md w-full  outline-none" placeholder="Phone" type="tel"></input>
                                        </div>

                                        <div className="mt-5">
                                            <input {...formik.getFieldProps('gender')} className="border border-gray-400 py-1 px-2 rounded-md w-full  outline-none" placeholder="Gender" type="text"></input>

                                        </div>


                                        <div className="mt-5">
                                            <input {...formik.getFieldProps('character')} className="border border-gray-400 py-1 px-2 rounded-md w-full  outline-none" placeholder="Name of Character" type="text"></input>

                                        </div>

                                        <div className="mt-5 flex items-center justify-center">

                                            <label htmlFor="profile">
                                                <img src={sc || ""} className=" mb-4" />
                                                <span className='border-2 bg-gray-200 border-black px-1 py-1'>Payment Screenshot</span>
                                            </label>
                                            <input className='hidden' accept="image/*" onChange={onUpload} type="file" id='profile' name='profile' />
                                        </div>


                                        <div className="mt-5 ">
                                            <button className=" w-full text-xl rounded-md bg-blue-400 hover:bg-red-300" type='submit'>Register</button>

                                        </div>


                                    </form>
                                </>

                        }
                    </div>

                </div>


            </div>




        </div>

    )
}
