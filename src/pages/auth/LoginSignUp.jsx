import React, { createContext, useEffect, useState } from 'react'
import Register from '../../components/Register'
import Login from '../../components/Login'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const authContext = createContext();

const LoginSignUp = () => {

    // this is for page only not global
    const [isRegister, setRegister] = useState(true);

    //this is global login state
    const isLogin = useSelector((state) => state.auth.isLogin)

    const navigate = useNavigate()
    // useEffect(() => {
    //     if (isLogin) {
    //         navigate('/subscribe')
    //     }
    // }, [isLogin])


    return (
        <>
            <div className='w-full h-screen bg-background p-10 flex text-primary  justify-center '>
                <authContext.Provider value={[isRegister, setRegister]}>
                    <div className='w-3/4 h-full backdrop-blur-3xl bg-white/10       flex flex-col justify-center items-center '>
                        {
                            isRegister ?
                                <Register /> :
                                <Login />
                        }
                    </div>



                </authContext.Provider>

            </div>




        </>
    )
}

export default LoginSignUp