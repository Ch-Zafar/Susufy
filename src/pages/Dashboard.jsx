import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useWallet } from '@solana/wallet-adapter-react';
import { fetchSignals } from '../store/features/signals/signalSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { publicKey } = useWallet();

  const isLogin = useSelector(state => state.auth.isLogin);
  const signalStatus = useSelector(state => state.signal.status);
  const signals = useSelector(state => state.signal.finalSignal);

  // Auth protection (uncomment if needed)
  // useEffect(() => {
  //   if (!isLogin) navigate('/subscribe');
  // }, [isLogin, navigate]);

  // Fetch signals once
  useEffect(() => {
    if (signalStatus === null) {
      dispatch(fetchSignals());
    }
  }, [signalStatus, dispatch]);

  // Log updated signals
  useEffect(() => {
    if (signals.length > 0) {
      console.log('Signals fetched:', signals);
    }
  }, [signals]);

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-background text-primary p-4">
        {signals?.length > 0 ? (
          signals.map(signal => (
            <DashboardCard key={signal.id} data={signal} />
          ))
        ) : (
          <p>Loading signals...</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
