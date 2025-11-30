import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useNavigate } from "react-router-dom";



const UserConection = () => {
    const { publicKey } = useWallet();
    const navigate =useNavigate();
    useEffect(()=>{
        if(publicKey){
            navigate('/subscribe')
        }
    },[publicKey])
   




    return (
        <>
            <Navbar />

            {/* Main Screen */}
            <div className='w-full h-screen bg-background flex justify-center items-center flex-col'>
                <h1 className='font-bold font-Mona text-7xl text-primary'>Connect Your Wallet</h1>

                <WalletMultiButton  className='mt-10  bg-background font-Mona text-xl cursor-pointer border border-primary w-[250px] h-16 rounded-xl active:scale-95 transition-all duration-200' />



            </div>


        </>
    );
};

export default UserConection;




// {openModal && (
//                 <div className="w-full h-screen fixed inset-0 bg-black/40 backdrop-blur-3xl flex justify-center items-center animate-fadeIn">
//                     <div className="w-[500px] h-[680px] bg-background border  rounded-2xl shadow-2xl relative p-6 flex flex-col items-center animate-scaleUp">

//                         <X
//                             className="cursor-pointer text-primary hover:text-white active:scale-90 transition-all duration-200 absolute right-5 top-5"
//                             size={28}
//                             onClick={closeModal}
//                         />

//                         <h1 className="font-bold font-Mona text-3xl text-primary mt-4">
//                             Select Wallet
//                         </h1>

//                         <hr className="w-full my-5 border-primary/20" />

//                         <div className="w-full space-y-3">

//                             {/* Phantom Wallet */}
//                             <button className={` ${detected ? 'cursor-pointer' : 'text-gray-700 cursor-not-allowed'} w-full h-16 flex items-center justify-between px-4  rounded-xl border border-primary/20 group active:scale-[0.98]`}>
//                                 <div className="flex items-center gap-4">
//                                     <img src="/icons/phantom.svg" className="w-10 h-10" />
//                                     <p className="text-primary text-xl font-Mona">Phantom</p>
//                                 </div>

//                                 <div className="flex items-center gap-2">
//                                     <span className={`${detected ? 'text-green-400' : 'text-gray-700 cursor-not-allowed'} text-sm font-medium`}>{detected ? 'Detected' : 'Not Detected'}</span>
//                                     <ExternalLink size={18} className="text-primary/60 group-hover:text-primary" />
//                                 </div>
//                             </button>

//                             {/* MetaMask Wallet */}
//                             <button className={` ${detected ? 'cursor-pointer' : 'text-gray-700 cursor-not-allowed'} w-full h-16 flex items-center justify-between px-4  rounded-xl border border-primary/20 group active:scale-[0.98]`}>
//                                 <div className="flex items-center gap-4">
//                                     <img src="/icons/metamask.svg" className="w-10 h-10" />
//                                     <p className="text-primary text-xl font-Mona">MetaMask</p>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <span className={`${detected ? 'text-green-400' : 'text-gray-700 cursor-not-allowed'} text-sm font-medium`}>{detected ? 'Detected' : 'Not Detected'}</span>
//                                     <ExternalLink size={18} className="text-primary/60 group-hover:text-primary" />
//                                 </div>
//                             </button>



//                         </div>
//                     </div>
//                 </div>
//             )}