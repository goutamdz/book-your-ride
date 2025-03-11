import React from 'react'
import { Link } from 'react-router-dom' 

function CaptainSignup() {
  return (
    <>
      <img src='https://static.vecteezy.com/system/resources/previews/050/816/820/non_2x/uber-transparent-icon-free-png.png' alt='logo' className='h-20 w-20' />

      <div className='flex justify-center'>
        <form className='flex flex-col w-96 p-6'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email'>What's your name?</label>
            <div>
              <input type='text' id='first_name' className='border border-black rounded-lg p-1 w-full' placeholder='First Name' />
              <input type='text' id='last_name' className='border border-black rounded-lg p-1 w-full mt-2' placeholder='Last Name' />
            </div>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email'>What's your email</label>
            <input type='email' id='email' className='border border-black rounded-lg p-1 w-full' />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='password'>Enter Password</label>
            <input type='password' id='password' className='border border-black rounded-lg p-1 w-full' />
          </div>
          <button type='submit' className='w-full border-2 p-2 rounded-lg bg-green-600 text-white mb-2'>Login</button>
          <div className="inline-flex space-x-1">
            <span>Already have an account?</span>
            <Link to={'/captainlogin'} className="text-blue-700">Login </Link>
          </div>
        </form>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center">
        <Link to={'/signup'} className="text-blue-700 border-2 border-blue-500 rounded-lg px-4 py-2">
          Signup as User
        </Link>
      </div>

    </>
  )
}

export default CaptainSignup