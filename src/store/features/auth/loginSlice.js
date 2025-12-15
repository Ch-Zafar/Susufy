import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        walletId:"",
        isLogin: null,
        isConnected: null,
        paid:true,
        userInfo:{
            
        }

    },
    reducers: { 
        setWalletid: (state, action) => {
            state.walletId = action.payload; 
        },
        setConnection:(state,action)=>{
            state.isConnected= action.payload
        },
        // emptywalletId:(state,action)=>{
        //     state.publicKey =""
        // },
        setLogin: (state,action)=>{
            state.isLogin= action.payload;
            
        },
        // setPaid: (state,action)=>{
        //     state.paid = action.payload
        // }
        setUserinfo:(state,action)=>{
            state.userInfo= action.payload;

        }

    }
});

export const { setUserinfo,setLogin,setWalletid,setConnection } = authSlice.actions;
export default authSlice.reducer;
