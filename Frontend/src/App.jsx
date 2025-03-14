import react from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
        <Route path="/captainsignup" element={<CaptainSignup/>}/>
        <Route path="/captainlogin" element={<CaptainLogin/>}/>

        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
