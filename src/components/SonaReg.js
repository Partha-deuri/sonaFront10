import sonaPoter from "./assets/kl.png";
import { useFormik } from 'formik';
import { sonaRegister, sonaVerify, verifyToken, verifyUserEmail } from './helper/axiosHelper';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



export default function SonaReg() {
    const [registeded, setRegistered] = useState(false);
    const [userData, setUserData] = useState({ name: '', email: '', phone: '' });

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
        await sonaVerify().then(res => {
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
            age: '',
        },
        enableReinitialize: true,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {

            if (localStorage.loggedin) {
                if (values.name && values.email && values.phone && values.gender && values.age) {
                    let checkEmailPromise = verifyUserEmail({
                        email: values.email
                    })
                    checkEmailPromise.then(res => {
                        const { status } = res;
                        if (status === 201) {

                            const formData = { name: values.name, email: values.email, phone: values.phone, gender: values.gender, age: values.age }

                            let cosplayPromise = sonaRegister(formData)
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
            // navigate('/login');
        }
    }

    return (
        <div className="min-h-screen w-100vw py-10  bg-sonabg bg-center bg-cover  bg-no-repeat">
            <Toaster position='top-center' reverseOrder={false}></Toaster>


            <div className="container md:mx-auto">

                <div className="flex flex-col w-full   lg:bg-none bg-cover bg-no-repeat   lg:h-[83vh] lg:flex-row w-10/12 lg:w-10/12 rounded-xl lg:mx-auto   shadow-3xl shadow-red-500  border-2 border-blue-200 overflow-hidden backdrop-blur-small">

                    <div className="the_image_div w-full lg:w-1/2 bg-none lg:bg-none bg-cover bg-no-repeat bg-center backdrop-blur  flex flex-col items-center justify-center py-12 px-10 ">


                        <h1 className='text-white text-3xl text-center font-bold mb-4'>SONABYSS</h1>
                        <div className="overflow-y-auto  rounded-md">
                            <img src={sonaPoter} alt='avatar'></img>
                            <p className='text-white  lg:text-[#dd6e42] font-bold text-sm mt-4'>

                                Criteria for Participation. <br />
                                1. For participating in Mr.& Ms.Sonabyss Pageant, candidates must register themselves in the Sonabyss’23 official website <br />
                                2. The participants should be of age 15 and above and be a student of any school or college. Student ID card is mandatory as proof. <br />
                                3. Any false or incorrect information may render the candidates liable to action which may include disqualification of the candidate. <br />
                                4. Participation in the Sonabyss pageant (training sessions) should be first priority in case the candidate is involved in any block events. <br />
                                5. Missing the training sessions without proper reasoning will lead to negative marking of the candidate and may lead to disqualification. <br />
                                6. Accommodation for Non- Neristian participants will be provided during the training session. <br />
                                7. All required accessories such as hair, make-up and instructed clothing are to be arranged by the contestants themselves. <br />
                                8. All the participants are requested to have mutual respect for the fellow participants and organisers. Judges’ decision will be final. Any disrespectful behaviour toward the organisers or participants will not be tolerated. <br />
                                9. Selected candidates will have to pay a sum of Rs.300 as Registration fee. <br />
                                10. Selected candidates will have to give a performance of their choice based on their talents. The top 3 performers will be selected to perform in the main event and the winner of this Talent Performance will get a direct entry into the Top 10.Talent performance (Selection): To be notified later. Time limit of performance: 4 Minutes (Maximum) <br />
                                11. Contestants can bring only two individuals to assist them on the main day of the event. <br />




                            </p>
                        </div>

                    </div>

                    <div className="the_form_div w-full flex flex-col items-center justify-center lg:backdrop-blur-[1px]   lg:w-1/2  px-12 py-16 lg:shadow-xl lg:shadow-black  lg:border-2 border-blue-200">
                        {
                            registeded ?
                                <h1 className="text-[#45FFCA] text-3xl font-bold mb-20 text-center">Already Register</h1>
                                : <>
                                    <h1 className="text-white text-3xl font-bold text-center">Register</h1>


                                    <form onSubmit={formik.handleSubmit} onClick={handleFormClick} >
                                        <div className="my-4">

                                            <input {...formik.getFieldProps('name')}className="border border-gray-400 py-1 px-2 w-full outline-none rounded-md" type="text"  placeholder="Name"></input>


                                        </div>

                                        <div className="my-4">

                                            <input {...formik.getFieldProps('age')}className="border border-gray-400 py-1 px-2 w-full outline-none rounded-md" type="numeric"  placeholder="Age"></input>


                                        </div>


                                        <div className="mt-5">
                                            <input {...formik.getFieldProps('phone')}className="border border-gray-400 py-1 px-2 rounded-md w-full  outline-none"  placeholder="Phone" type="tel"></input>

                                        </div>

                                        <div className="mt-5">
                                            <input {...formik.getFieldProps('email')}className="border border-gray-400 py-1 px-2 rounded-md w-full  outline-none" placeholder="Email" type="email"></input>

                                        </div>


                                        <div className="mt-5">
                                            <input {...formik.getFieldProps('gender')}className="border border-gray-400 py-1 px-2 rounded-md w-full  outline-none" placeholder="Gender" type="text"></input>

                                        </div>


                                        <div className="mt-5 ">
                                            <button className=" w-full text-xl rounded-md bg-blue-400 hover:bg-red-300">Register</button>
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