import RidePopup from "./RidePopup";
function BottomViewOfCaptainDetails(){
    return(
        <div className="w-96 screen p-2">
            <div className="flex justify-between items-center ">
                <div className="flex gap-3 items-center">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlGdFejJmWWpTP9JnJeEydIA6W90Rhn6Img&s"
                        className="w-10 h-10 rounded-full"
                    />
                    <h1>Harsh Patel</h1>
                </div>
                <div>
                    <h1>₹295.20</h1>
                    <p>Earned</p>
                </div>
            </div>
            <div className="flex justify-evenly items-center mt-5 bg-gray-500 p-5">
                <div className="">
                    <i className="ri-arrow-up-circle-line text-3xl"></i>
                    <h1>10.2</h1>
                    <p>Hours online</p>
                </div>
                <div>
                    <i className="ri-speed-up-line text-3xl"></i>
                    <h1>10.2</h1>
                    <p>Hours online</p>
                </div>
                <div>
                    <i className="ri-booklet-line text-3xl"></i>
                    <h1>10.2</h1>
                    <p>Hours online</p>
                </div>
            </div>
        </div>
    )
}

export default BottomViewOfCaptainDetails;

