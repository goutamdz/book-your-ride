import React from 'react'
import BottomView from '../components/BottomView';
import CaptainDetails from './CaptainDetails';

const CaptainHome = () => {
  let locaton={
    address:"562/11-A",
    landmark:"Near Bhatia Hospital"
  }
  let cash=192.20;
  return (
    <div className='h-screen'>
      <CaptainDetails/>
    </div>

  )
}

export default CaptainHome