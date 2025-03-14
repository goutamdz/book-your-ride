import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

function UserSignup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const { user, setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: first_name,
        lastname: last_name
      },
      email: email,
      password
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUser);
      // console.log(response.data);
      // console.log(response.status);
      if (response) {
        const data = await response.data;
        localStorage.setItem('token',data.token);
        console.log(data.user);
        setUser(data.user);
        navigate("/home");
      }
    }
    catch(err){
      if(err.response.data.message) alert(err.response.data.message);
      else if(err.response.data.errors[0].msg)alert(err.response.data.errors[0].msg);
      else alert("something went wrong");
    }
    setEmail('');
    setPassword('');
    setFirst_name('');
    setLast_name('');
  }
  return (
    <>
      <img src='https://static.vecteezy.com/system/resources/previews/050/816/820/non_2x/uber-transparent-icon-free-png.png' alt='logo' className='h-20 w-20' />

      <div className='flex justify-center'>
        <form className='flex flex-col w-96 p-6'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email'>What's your name?</label>
            <div>
              <input type='text' id='first_name' className='border border-black rounded-lg p-1 w-full' placeholder='First Name'
                onChange={(e) => setFirst_name(e.target.value)} value={first_name}
              />
              <input type='text' id='last_name' className='border border-black rounded-lg p-1 w-full mt-2' placeholder='Last Name'
                onChange={(e) => setLast_name(e.target.value)} value={last_name}
              />
            </div>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email'>What's your email</label>
            <input type='email' id='email' className='border border-black rounded-lg p-1 w-full'
              onChange={(e) => setEmail(e.target.value)} value={email}
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='password'>Enter Password</label>
            <input type='password' id='password' className='border border-black rounded-lg p-1 w-full'
              onChange={(e) => setPassword(e.target.value)} value={password}
            />
          </div>
          <button type='submit' className='w-full border-2 p-2 rounded-lg bg-blue-600 text-white mb-2'
            onClick={handleSubmit}
          >
            Login
          </button>
          <div className="inline-flex space-x-1">
            <span>Already have an account?</span>
            <Link to={'/login'} className="text-blue-700">Login </Link>
          </div>
        </form>
      </div>
      <div className="absolute bottom-4 w-full flex justify-center">
        <Link to={'/captainsignup'} className="text-green-700 border-2 border-green-500 rounded-lg px-4 py-2">
          Signup as captain
        </Link>
      </div>

    </>
  )
}

export default UserSignup