import { useWallet } from "@solana/wallet-adapter-react";
import { LogOut } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWalletid, setLogin, setConnection } from "../store/features/auth/loginSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { publicKey, disconnect } = useWallet();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isConnected = useSelector((state) => state.auth.isConnected);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.userInfo);
  const walletId = useSelector((state) => state.auth.walletId);

  // Handle wallet connect
  useEffect(() => {
    if (publicKey) {
      const key = publicKey.toBase58();
      dispatch(setWalletid(key));
      dispatch(setConnection(true));
    }
  }, [publicKey, dispatch]);

  // Disconnect wallet (ONLY on click)
  const disconnectWallet = async () => {
    await disconnect();
    dispatch(setConnection(false));
    dispatch(setWalletid(""));
  };

  const logout = async () => {
    await axios.post(
      "http://localhost:3000/auth/logout",
      {},
      { withCredentials: true }
    );
    dispatch(setLogin(false));
  };

  const shortenAddress = (address) =>
    address ? `${address.slice(0, 4)}...${address.slice(-4)}` : "";

  return (
    <div className="w-full h-20 bg-background text-primary flex border-b border-primary">
      <div className="w-2/6 flex justify-center items-center">
        <h1 className="font-bold font-Dancing text-4xl">Subsify</h1>
      </div>

      <div className="w-2/6 flex justify-center items-center">
        <h1 className="font-bold font-Mona text-4xl">Welcome to Subsify</h1>
      </div>

      <div className="w-2/6 flex justify-center items-center p-4">
        {isConnected && (
          <div className="flex items-center gap-3">
            <div className="border border-primary p-2 rounded-md">
              <p>{shortenAddress(walletId)}</p>
            </div>
            <button
              onClick={disconnectWallet}
              className="cursor-pointer active:scale-95 transition-all"
            >
              <LogOut color="#fff" />
            </button>
          </div>
        )}

        {isLogin ? (
          <div className="flex items-center gap-3 ml-5">
            <p className="font-Mona font-bold">{user?.name}</p>
            <button
              onClick={logout}
              className="cursor-pointer active:scale-95 transition-all"
            >
              <LogOut color="#fff" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="font-Mona font-bold ml-5"
          >
            Login or SignUp
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
