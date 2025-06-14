import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RideInfo({ pickup, destination, setSelectedRide, setIsRideConfirmed ,setVehicleType}) {
  const [fares, setFares] = useState(null);
  const [distanceAndTime, setDistanceAndTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const rides = [
    {
      id: 1,
      name: 'UberGo',
      type: 'car',
      img: 'https://cdn.pixabay.com/photo/2020/07/07/14/25/watercolor-5380750_1280.png',
      time: '2 min away. 15:24',
      description: 'Affordable, compact rides',
    },
    {
      id: 2,
      name: 'Uber Auto',
      type: 'auto',
      img: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png',
      time: '2 min away. 15:24',
      description: 'Affordable, compact rides',
    },
    {
      id: 3,
      name: 'Uber Moto',
      type: 'motorcycle',
      img: 'https://static.vecteezy.com/system/resources/previews/028/619/577/non_2x/motorcycle-3d-rendering-icon-illustration-free-png.png',
      time: '2 min away. 15:24',
      description: 'Affordable, compact rides',
    },
  ];

  useEffect(() => {
    const fetchFare = async () => {
      if (pickup && destination) {
        setLoading(true);
        try {
          const token = localStorage.getItem('token');
          const res = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
            {
              params: { pickup, destination },
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setFares(res.data.fare);
          setDistanceAndTime(res.data.distanceAndTime);
        } catch (err) {
          setFares(null);
          setDistanceAndTime(null);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchFare();
  }, [pickup, destination]);

  return (
    <div className='flex flex-col gap-2 p-5 overflow-y-scroll h-full'>
      {distanceAndTime && (
        <div className="mb-2 p-2 bg-gray-100 rounded text-gray-700 flex gap-4">
          <span>
            <i className="ri-road-map-line"></i> {distanceAndTime.distance.text}
          </span>
          <span>
            <i className="ri-time-line"></i> {distanceAndTime.duration.text}
          </span>
        </div>
      )}
      {loading ? (
        <p>Loading fares...</p>
      ) : (
        rides.map((ride) => (
          <div
            className='flex flex-row items-center gap-2 w-[99%] p-2 border rounded-md hover:bg-gray-400 hover:shadow-md cursor-pointer'
            key={ride.id}
            onClick={() =>{
                setSelectedRide({
                  ...ride,
                  price: fares ? `₹${fares[ride.type].toFixed(2)}` : 'N/A',
                })
                setVehicleType(ride.type)
              }
            }
          >
            <div className='w-[20%]'>
              <img src={ride.img} alt='logo' className='h-10 w-10' />
            </div>
            <div className='w-[65%]'>
              <div className='flex justify-start gap-4'>
                <h1 className='text-lg'>{ride.name}</h1>
                <span>
                  <i className='ri-user-shared-2-line' />
                  4
                </span>
              </div>
              <p>{ride.time}</p>
              <p>{ride.description}</p>
            </div>
            <h1 className='w-10%'>
              {fares ? `₹${fares[ride.type].toFixed(2)}` : 'N/A'}
            </h1>
          </div>
        ))
      )}
    </div>
  );
}

export default RideInfo;