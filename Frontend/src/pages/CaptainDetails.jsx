import React from "react";
import RidePopup from "../components/RidePopup";
import BottomView from "../components/BottomView";
import BottomViewOfCaptainDetails from "../components/BottomViewOfCaptainDetails";

function CaptainDetails() {
    return (
        <div className='h-screen flex flex-col items-center'>
            {/* Background Section */}
            <div
                className='w-96 flex-grow bg-cover bg-center'
                style={{
                    backgroundImage: `url("https://img.sfist.com/assets_c/2015/07/ubermapvisuals-thumb-640xauto-905052.png")`,
                }}
            >
                <div className='flex items-center gap-3 p-2'>
                    <img
                        src='https://static.vecteezy.com/system/resources/previews/050/816/820/non_2x/uber-transparent-icon-free-png.png'
                        alt='logo'
                        className='h-10 w-10'
                    />
                    <i className="ri-logout-box-r-line text-2xl cursor-pointer"></i>
                </div>
            </div>

            {/* RidePopup should take its own height */}
            <RidePopup />
            {/* <BottomViewOfCaptainDetails/> */}
            {/* <BottomView/> */}
        </div>
    );
}

export default CaptainDetails;
