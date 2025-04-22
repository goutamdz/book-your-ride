function RidePopup(){
    return(
        <div className='w-96 pb-3'>
            <h1 className="text-xl mb-7">New Ride Available !</h1>
            <div className="flex justify-between items-center mb-3 bg-yellow-200  rounded-lg px-2">
                <div className="flex gap-3 items-center">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlGdFejJmWWpTP9JnJeEydIA6W90Rhn6Img&s"
                        className="w-10 h-10 rounded-full"
                    />
                    <h1>Harsh Patel</h1>
                </div>
                <div>
                    <h1>2.2 Km</h1>
                </div>
            </div>
            <div className="flex gap-5 items-center  border-b-1 border-b-gray-400 mb-2">
                <i className="ri-map-pin-user-fill"></i>
                <div className="pb-2">
                    <h1>562/11-A</h1>
                    <p>Kankariya talab, bhopal</p>
                </div>
            </div>
            <div className="flex gap-5 items-center border-b-1 border-b-gray-400 mb-2">
                <i className="ri-focus-3-fill"></i>
                <div className="pb-2">
                    <h1>562/11-A</h1>
                    <p>Kankariya talab, bhopal</p>
                </div>
            </div>
            <div className="flex gap-5 items-cente  border-b-1 border-b-gray-400r">
                <i className="ri-cash-line"></i>
                <div className="pb-2">
                    <h1>₹193.20</h1>
                    <p>Cash</p>
                </div>
            </div>

            <button className='bg-green-500 text-white p-2 rounded-md w-full mt-4'>
                Confirm 
            </button>
            <button className='bg-gray-500 text-white p-2 rounded-md w-full mt-4'>
                Ignore
            </button>
        </div>
    )
}

export default RidePopup;