//This component is used to display the bottom view of the vehicl & location details and a button of Make a payment while making payment.

import React from 'react'

function BottomView() {
  return (
    <div
          className='absolute w-96 bg-white bottom-0 border shadow-md pb-2'
        >
          <div className='flex justify-between p-2'>
            <div className='w-[30%] p-2'>
              <img src='https://cdn.pixabay.com/photo/2020/07/07/14/25/watercolor-5380750_1280.png' alt='vehicle'/>
            </div>
            <div>
              <h1 className='text-sm'>Sarthak</h1>
              <h1 className='text-m font-bold'>MP04 AB 1234</h1>
              <p className='text-sm'>Maruti suzuki Alto</p>
            </div>
          </div>
          <div>
            <div className='flex p-2 m-2 border-b-1 border-gray-400'>
              <i class="ri-map-pin-2-fill pr-3"></i>
              <div>
                <h1>562/11-A</h1>
                <p className='text-sm text-gray-500'>Kankariya Talab, Bhopal</p>
              </div>
            </div>
            <div className='flex p-2 m-2'>
              <i class="ri-map-pin-2-fill pr-3"></i>
              <div>
                <h1>562/11-A</h1>
                <p className='text-sm text-gray-500'>Kankariya Talab, Bhopal</p>
              </div>
            </div>

            <button
              className='bg-green-700 w-[90%] p-1.5 rounded-lg text-white font-bold ml-5'
            >Make a Payment</button>
          </div>
        </div>
  )
}

export default BottomView