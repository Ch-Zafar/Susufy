import React, { useContext, useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { authContext } from '../pages/auth/LoginSignUp'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';




const Register = () => {
    const [isRegister, setRegister] = useContext(authContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        // console.log(isLogin)
        // console.log(document.cookie);   
        const url = import.meta.env.VITE_API_URL;
        try {
            const res = await axios.post('http://localhost:3000/auth/login', data, {
                withCredentials: true
            });
            var statusCode = res.status


        }
        catch (err) {

            console.log(err);
        }
        finally {
            setLoading(false)

            if (statusCode == 200) {

                toast.success('Account login')
                navigate('/')
            }
            if (statusCode = 400) {
                toast.error("Incorect Creditantial!!")
            }
        }


    }

    return (
        <>
            <ToastContainer
                position="top-center"
                reverseOrder={false}
            />            <h1 className='text-primary font-Mona text-6xl pb-5 '>Login</h1>
            <form className='w-1/2 h-1/2 flex flex-col items-center justify-evenly font-Mona' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='w-11/12 h-24 flex flex-col '>
                    <span className=''>Gmail</span>
                    <input className='w-full h-14  border-2  border-primary p-5 focus:outline-none '  {...register("gmail",{required:true})} />
                    {errors.gmail && <span className='text-red-500'>This field is required</span>}

                </div>
                <div className='w-11/12 h-24 flex flex-col '>
                    <span className=''>Password</span>
                    <input className='w-full h-14  border-2  border-primary p-5  focus:outline-none'  {...register("password",{required:true})} />
                    {errors.password && <span className='text-red-500'>This field is required</span>}

                </div>

                <div className='flex w-11/12 justify-baseline '>
                    <p className='text-gray-400'>Dont have an account?</p>
                    <button onClick={() => { setRegister(true) }} className='pl-2 cursor-pointer hover:underline' >
                        Register
                    </button>


                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="
    border border-primary
    px-10 py-3
    flex items-center justify-center gap-3
    cursor-pointer
    transition-all duration-100 ease-in-out
    active:scale-95
    disabled:opacity-70 disabled:cursor-not-allowed
  "
                >
                    {loading && (
                        <ClipLoader
                            color="#fff"
                            size={18}
                            aria-label="Loading Spinner"
                        />
                    )}

                    <span
                        className={`
      transition-all duration-700
      ${loading ? "opacity-70" : "opacity-100"}
    `}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </span>
                </button>

            </form>


        </>
    )
}

export default Register