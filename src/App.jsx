import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserConection from './pages/auth/UserConection'
import Subscription from './pages/Subscription'
import Dashboard from './pages/Dashboard'
import LoginSignUp from './pages/auth/LoginSignUp'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUserinfo } from './store/features/auth/loginSlice'
import { setLogin } from './store/features/auth/loginSlice'

function App() {
  const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {


    const checkAuth = async () => {
      try {
        const res = await axios.get('http://localhost:3000/auth/', {
          withCredentials: true
        });
        const userInfo = res.data.user.user
        console.log(userInfo)
        if (res.data.isAuthenticated) {
           dispatch(setUserinfo(userInfo));
           dispatch(setLogin(true))
        } 

      } catch (err) {
        dispatch(setLogin(false))
        console.log(err.message)
      }
    };


    checkAuth();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<UserConection />} />
        <Route path='/subscribe' element={<Subscription />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>
    </>
  );
}

export default App;
