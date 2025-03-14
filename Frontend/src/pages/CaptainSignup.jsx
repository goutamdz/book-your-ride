import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'

function CaptainSignup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [color,setColor]=useState('');
  const [plateNo,setPlateNo]=useState('');
  const [vehicleType,setVehicleType]=useState('');
  const [capacity,setCapacity]=useState(Number);
  const { user, setUser } = useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: first_name,
        lastname: last_name
      },
      email: email,
      password,
      vehicle:{
        color,
        plate:plateNo,
        capacity,
        vehicleType
      }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, newUser);
    // console.log(response.data);
    // console.log(response.status);
    if (response) {
      const data = await response.data;
      console.log(data.captain);
      setUser(data.captain);
      navigate("/home");
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
        <form className='flex flex-col w-99 p-6'>
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
          <div className='flex flex-col mb-4 '>
            <label htmlFor='password'>Enter Password</label>
            <input type='password' id='password' className='border border-black rounded-lg p-1 w-full'
              onChange={(e) => setPassword(e.target.value)} value={password}
            />
            
          </div>



          <div className='flex flex-col mb-4'>
            <label htmlFor='password'>Enter Vehicle Details</label>
            <div className='mb-2'>
              <input
                type='text'
                placeholder='Vehicle Number'
                className='p-1 border border-black rounded-lg w-[45.7%] mr-[4.3%]'
                value={plateNo} onChange={(e)=>{setPlateNo(e.target.value)}}
              ></input>
              <input
                type='text'
                placeholder='Color of vehicle'
                className='p-1 border border-black rounded-lg w-1/2 '
                value={color} onChange={(e)=>{setColor(e.target.value)}}
              ></input>
            </div>
            <div>
              <input
                type='text'
                placeholder='Capacity'
                className='p-1 border border-black rounded-lg w-[45.7%] mr-[4.3%]'
                value={capacity} onChange={(e)=>{setCapacity(parseInt(e.target.value))}}
              ></input>
              <select 
                className='border border-black p-1 rounded-lg font-light text-gray-600 w-1/2'
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required 
              >
                <option value="">Select Vehicle Type</option> 
                <option value="motorcycle">motorcycle</option>
                <option value="car">car</option>
                <option value="auto">auto</option>
              </select>
            </div>
          </div>


          <button type='submit' className='w-full border-2 p-2 rounded-lg bg-green-600 text-white mb-2'
            onClick={handleSubmit}
          >Login
          </button>
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