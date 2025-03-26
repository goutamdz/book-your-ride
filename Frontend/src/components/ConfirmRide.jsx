import React from 'react'

const ConfirmRide = ({ selectedRide, pickup, destination, setIsRideConfirmed }) => {
    return (
        <div className='p-2 w-full'>
            <h1>Confirm your Ride</h1>
            <div className='flex justify-center'>
                <img src={selectedRide.img} alt='logo' className='h-50 w-50' />
            </div>
            <div className='flex gap-2 mt-4'>
                <i className="ri-map-pin-user-fill"></i>
                <p>{pickup}</p>
            </div>
            <div className='flex gap-2 mt-4'>
                <i className="ri-focus-3-fill"></i>
                <p>{destination}</p>
            </div>
            <div className='flex gap-2 mt-3'>
                <i className="ri-cash-line"></i>
                <p>{selectedRide.price}</p>
            </div>
            <div>
                <button className='bg-blue-500 text-white p-2 rounded-md w-full mt-4'
                    onClick={() => { setIsRideConfirmed(true) }}
                >
                    Confirm Ride
                </button>
            </div>
        </div>
    )
}

export default ConfirmRide