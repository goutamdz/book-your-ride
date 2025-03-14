import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password
    );
  }

  return (
    <>
      <img src='https://static.vecteezy.com/system/resources/previews/050/816/820/non_2x/uber-transparent-icon-free-png.png' alt='logo' className='h-20 w-20'/> 
      <div className='flex justify-center'>
        <form className='flex flex-col w-96 p-6'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email'>What's your email</label>
            <input type='email' id='email' className='border border-black rounded-lg p-1 w-full' 
              onChange={(e)=>setEmail(e.target.value)} value={email}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='password'>Enter Password</label>
            <input type='password' id='password' className='border border-black rounded-lg p-1 w-full' 
              onChange={(e)=>setPassword(e.target.value)} value={password}
            />
          </div>
          <button type='submit' className='w-full border-2 p-2 rounded-lg bg-blue-500 text-white mb-2'
            onClick={handleSubmit}
          >Login</button>
          <div className="inline-flex space-x-1">
            <span>New Here?</span>
            <Link to={'/signup'} className="text-blue-700">Create a new account</Link>
          </div>
        </form>
      </div>

      <div className="absolute bottom-4 w-full flex justify-center">
        <Link to={'/captainlogin'} className="text-green-700 border-2 border-green-500 rounded-lg px-4 py-2">
          Sign in as Captain
        </Link>
      </div>
      
    </>
  );
}

export default UserLogin;
