import React from 'react'
import { useNavigate } from 'react-router-dom'

function Start() {
  const navigate = useNavigate();
  return (
    <div className='h-screen w-full'>
        <div className='h-10/12 bg-red-400' style={{backgroundImage:"url('https://images.unsplash.com/photo-1741568032886-18d3f2a694c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize:'cover'}}>
            <img src='https://static.vecteezy.com/system/resources/previews/050/816/820/non_2x/uber-transparent-icon-free-png.png' alt='logo' className='h-20 w-20'/> 
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-center text-2xl py-2'>Get started with Uber</p>
            <button className='bg-black text-white w-2/3 p-2 rounded-3xl cursor-pointer' onClick={()=>{navigate('/login')}}>Continue</button>
        </div>
    </div>

    
  )
}

export default Start;