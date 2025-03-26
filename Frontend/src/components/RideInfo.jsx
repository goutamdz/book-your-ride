import React from 'react'

function RideInfo({setSelectedRide}) {
  
  let rides=[
    {
      id:1,
      name:'UberGo',
      img:'https://cdn.pixabay.com/photo/2020/07/07/14/25/watercolor-5380750_1280.png',
      time:'2 min away. 15:24',
      description:'Affordable, compact rides',
      price:'$193.20'
    },
    {
      id:2,
      name:'Uber Auto',
      img:'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png',
      time:'2 min away. 15:24',
      description:'Affordable, compact rides',
      price:'$100'
    },
    {
      id:3,
      name:'Uber Moto',
      img:'https://static.vecteezy.com/system/resources/previews/028/619/577/non_2x/motorcycle-3d-rendering-icon-illustration-free-png.png',
      time:'2 min away. 15:24',
      description:'Affordable, compact rides',
      price:'$50'
    },
    
  ]
  return (
    <div className='flex flex-col gap-2 p-5 overflow-y-scroll h-full'>
        {
            rides.map(ride=>(
                <div className='flex flex-row items-center gap-2 w-[99%] p-2 border rounded-md hover:bg-gray-400 hover:shadow-md cursor-pointer' key={ride.id} onClick={()=>setSelectedRide(ride)}>
                    <div className='w-[20%]'>
                        <img src={ride.img} alt='logo' className='h-10 w-10' />
                    </div>
                    <div className='w-[65%]'>
                        <div className='flex justify-start gap-4'>
                            <h1 className='text-lg'>{ride.name}</h1>
                            <span><i className="ri-user-shared-2-line"/>4</span>
                        </div>
                        <p>{ride.time}</p>
                        <p>{ride.description}</p>
                    </div>
                    <h1 className='w-10%'>{ride.price}</h1>
                </div>
            ))
        }
        
    </div>
  )
}

export default RideInfo