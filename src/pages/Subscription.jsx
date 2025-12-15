import { useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Connection, SystemProgram, Transaction, PublicKey } from "@solana/web3.js";
import { whiteList } from '../models/whitelist';
import { useDispatch, useSelector } from 'react-redux';
// import { setPaid } from '../store/features/auth/loginSlice';


const Subscription = () => {
    const { publicKey, sendTransaction } = useWallet();
    const navigate = useNavigate();
    const isPaid = useSelector((state)=> state.auth.paid)
    const dispatch = useDispatch();


    const sendSol = async () => {
        const endpoint = "https://mainnet.helius-rpc.com/?api-key=f0ce996b-da79-428f-b74c-27fa3a34d5d1";


        const connection = new Connection("https://api.devnet.solana.com", "confirmed");


        // const connection = new Connection(endpoint,{
        //     commitment:'confirmed'
        // }        );

        const wallet = new PublicKey("6wAZV2u47edWgroc4e8ZLtL1XXDni9JyUDN8iPpxtJ6P");
        const wallet2 = new PublicKey("BNmBtacrKQexiJYoRyBd9UjdrcLkXUuygsF1kRw1hn2T");
        const amount = (9 * 1e9) / 2;
        const amount2 = (9 * 1e9) / 2;


        if (!publicKey) {
            alert('Connect Wallet');
        }
        const tx = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: wallet,
                lamports: amount,
            }),
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: wallet2,
                lamports: amount2,

            })
        )
        tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

        // 👇 You MUST set feePayer manually
        tx.feePayer = publicKey;
        try {
            const signature = await sendTransaction(tx, connection);
            console.log('Payment Send to:', publicKey.toBase58());

        } catch (error) {
            console.log(error)
        }

        const result = await connection.confirmTransaction(signature, "finalized");

        if (result.value.err) {
            console.log("❌ Transaction failed:", result.value.err);
        } else {
            console.log("✅ Transaction success!");
            dispatch(setPaid(true))    
        }   


    }

    useEffect(() => {
        if(isPaid){
            navigate('/dashboard')
        }
        // If wallet is NOT connected, send user back
        if (!publicKey) {
            navigate('/');
        }
    }, [publicKey, navigate,isPaid]);

    return (
        <>
            {
                publicKey ? (
                    <>
                        <Navbar />
                        <div className='w-full h-screen bg-background text-primary font-Mona flex flex-col justify-center items-center'>
                            <h1 className='text-5xl font-bold '>
                                Pay the subscription fee to enjoy the features of subsify!!
                            </h1>
                            <button onClick={sendSol} className='w-[250px] h-16 bg-background text-primary font-Mona font-bold cursor-pointer border border-primary rounded-lg active:scale-95 transition-all duration-250 mt-10'>
                                Pay Now!!
                            </button>
                        </div>

                    </>
                ) : (
                    <div>
                        <h1>Please Connect your Wallet</h1>
                    </div>
                )
            }
        </>
    );
}

export default Subscription;
