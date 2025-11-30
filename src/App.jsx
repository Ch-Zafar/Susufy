
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserConection from './pages/auth/UserConection'
import Subscription from './pages/Subscription'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/'  element={<UserConection/>}/>
        <Route path='/subscribe'  element={<Subscription/>}/>

      </Routes>

    </>
  )
}

export default App
