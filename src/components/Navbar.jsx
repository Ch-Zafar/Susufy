import { useWallet } from '@solana/wallet-adapter-react';
import { LogOut } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const { publicKey, disconnect } = useWallet();
    const [walletId, setWalletId] = useState(false);

    useEffect(() => {
        if (publicKey) {
            const key = publicKey.toBase58()
            setWalletId(key);
        }
    }, [publicKey])



    const logout = () => {
        disconnect();
        setWalletId(false)
    }


    const shortenAddress = (address) => {
        if (!address) return "";
        return address.slice(0, 4) + "..." + address.slice(-4);
    };


    return (
        <div className='w-full h-20 bg-background text-primary flex  border-b border-primary shadow-background'>
            <div className='w-2/6 h-full flex justify-center items-center'>
                <h1 className='font-bold font-Dancing text-4xl '>Subsify</h1>
            </div>
            <div className='w-2/6 h-full flex justify-center items-center'>
                <h1 className='font-bold font-Mona text-4xl'>Welcome to Subsify</h1>
            </div>
            <div className='w-2/6 h-full flex justify-center items-center p-4'>
                {walletId ?
                    <>
                        <div className='w-1/2 h-full  flex justify-center items-center'>
                            <div className='border border-primary p-2 rounded-md' >

                                <p>{shortenAddress(walletId)}</p>
                            </div>
                            <button onClick={logout} className='pl-2 cursor-pointer active:scale-95 transition-all duration-50 '>
                                <LogOut color='#ffff' />
                            </button>
                        </div>
                    </> : null}
            </div>
        </div>
    )
}

export default Navbar