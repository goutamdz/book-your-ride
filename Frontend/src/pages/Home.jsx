import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css'

const Home = () => {
  const [down,setDown]=useState(false);
  const [pickup,setPickup]=useState("");
  const [destination,setDestination]=useState("");
  const openPanel=()=>{
    setDown(!down);
  }
  return (
    <>
      <img src='https://static.vecteezy.com/system/resources/previews/050/816/820/non_2x/uber-transparent-icon-free-png.png' alt='logo' className='h-10 w-10' />
      <div 
        className={`h-screen flex flex-col items-center`}
      >
        <div
          className={`w-96 h-[70%] bg-cover bg-center ${down?'hidden':""}`}
          style={{
            backgroundImage: `url("https://img.sfist.com/assets_c/2015/07/ubermapvisuals-thumb-640xauto-905052.png")`,
          }}
        ></div>

        <div className="w-96 h-[27%] bg-blue-200 p-5">
          <div className='flex flex-row justify-between'>
            <h1 className="text-lg font-semibold">Find a Trip</h1>
            <i 
              className={`ri-arrow-${down?'down':'up'}-s-line text-2xl cursor-pointer`}
              onClick={openPanel}
            />
          </div>
          <form 
            className="flex flex-col gap-2 mt-2"
            onClick={()=>{setDown(true)}}
          >
            <input
              type="text"
              placeholder="Add a Pickup Location"
              className="border p-2 rounded-md"
              onChange={e=>{setPickup(e.target.value)}}
              value={pickup}
            />
            <input
              type="text"
              placeholder="Enter Your Destination"
              className="border p-2 rounded-md"
              onChange={e=>{setDestination(e.target.value)}}
              value={destination}
            />
          </form>
        </div>

        <div 
          className={`w-96 h-[70%] bg-yellow-400 ${!down?'hidden':""}`}
        ></div>
      </div>
    </>
  );
};

export default Home;
