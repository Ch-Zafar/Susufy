import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { authContext } from '../pages/auth/LoginSignUp'
import axios from 'axios';
import { useWallet } from '@solana/wallet-adapter-react';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';



const Register = () => {

    const wallet = useWallet();
    const [isRegister, setRegister] = useContext(authContext);
    const [loading, setLoading] = useState(false)


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        if (!wallet) return;
        // const walletID = wallet.publicKey;
        // console.log(walletID)
        // console.log("typeof:", typeof publicKey);
        // console.log("prototype:", Object.getPrototypeOf(publicKey));


        try {
            // Object.assign(data, {  })
            // Object.assign(data,{walletid:walletID});
            const res = await axios.post('http://localhost:3000/auth/signup', data);
            var statusCode = res.status;
        } catch (err) {
            console.log(err)
        }
        finally {

            setLoading(false)
            if (statusCode == 200) {
                toast.success('Account Created')
                setRegister(false)
            }
            if(statusCode=400){
                toast.error('Account Already Exist')

            }
        }
    }
    return (
        <>
            <div><ToastContainer position="top-center"
                reverseOrder={false} /></div>

            <h1 className='text-primary font-Mona font-bold text-6xl pb-5'>Register</h1>
            <form className='w-1/2 h-1/2 flex flex-col items-center justify-evenly font-Mona' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='w-11/12 h-24 flex flex-col '>
                    <span className=''>Name</span>
                    <input className='w-full h-14  border-2  border-primary p-5 focus:outline-none '  {...register("name", { required: true })} />
                    {errors.name && <span className='text-red-500'>This field is required</span>}

                </div>
                <div className='w-11/12 h-24 flex flex-col '>
                    <span className=''>Password</span>
                    <input className='w-full h-14  border-2  border-primary p-5  focus:outline-none'  {...register("password", { required: true })} />
                    {errors.password && <span className='text-red-500'>This field is required</span>}

                </div>
                <div className='w-11/12 h-24 flex flex-col '>
                    <span className=''>Email</span>
                    <input type='gmail' className='w-full h-14  border-2  border-primary p-5 focus:outline-none '  {...register("gmail", { required: true })} />
                    {errors.gmail && <span className='text-red-500'>This field is required</span>}

                </div>
                <div className='flex w-11/12 justify-baseline '>
                    <p className='text-gray-400 font-Mona'>Already have an account?</p>
                    <button onClick={() => { setRegister(false) }} className='pl-2 cursor-pointer hover:underline font-Mona'>
                        Login
                    </button>
                </div>
                {errors.exampleRequired && <span>This field is required</span>}

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
                        {loading ? "Registering..." : "Register"}
                    </span>
                </button>
            </form>


        </>
    )
}

export default Register