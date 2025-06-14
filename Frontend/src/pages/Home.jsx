import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import 'remixicon/fonts/remixicon.css';
import Location from '../components/Location';
import RideInfo from '../components/RideInfo';
import ConfirmRide from '../components/ConfirmRide';
import LookingForVehicle from '../components/LookingForVehicle';

const Home = () => {
  const [down, setDown] = useState(false);
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // State to track the current search query
  const [isPickupSelected, setIsPickupSelected] = useState(false); // Flag to check if pickup is selected
  const [isDestinationSelected, setIsDestinationSelected] = useState(false); //check if destination is selected
  const [selectedRide, setSelectedRide] = useState(null); // State to track the selected ride
  const [isRideConfirmed, setIsRideConfirmed] = useState(false); // Flag to check if ride is confirmed
  const activeInputRef = useRef(null); // Ref to track the active input field
  const [vehicleType, setVehicleType] = useState(''); // State to track the selected vehicle type
  const navigate = useNavigate(); // Hook for navigation

  const openPanel = () => {
    setDown(!down);
  };

  const handleSelectLocation = (selectedLocation) => {
    if (activeInputRef.current === 'pickup') {
      setPickup(selectedLocation); // Update pickup if it's the active input
      setIsPickupSelected(true); // Mark pickup as selected
    } else if (activeInputRef.current === 'destination') {
      setDestination(selectedLocation); // Update destination if it's the active input
      setIsDestinationSelected(true); // Mark destination as selected
    }
    setSelectedRide(null)
    setSearchQuery('');
    setIsRideConfirmed(false);
  };


  return (
    <>
      <img
        src="https://static.vecteezy.com/system/resources/previews/050/816/820/non_2x/uber-transparent-icon-free-png.png"
        alt="logo"
        className="h-10 w-10"
      />
      <div className={`h-screen flex flex-col items-center`}>
        <div
          className={`w-96 h-[70%] bg-cover bg-center ${down ? 'hidden' : ''}`}
          style={{
            backgroundImage: `url("https://img.sfist.com/assets_c/2015/07/ubermapvisuals-thumb-640xauto-905052.png")`,
          }}
        ></div>

        <div className="w-96 h-[27%] bg-blue-200 p-5">
          <div className="flex flex-row justify-between">
            <h1 className="text-lg font-semibold">Find a Trip</h1>
            <i
              className={`ri-arrow-${down ? 'down' : 'up'}-s-line text-2xl cursor-pointer`}
              onClick={openPanel}
            />
          </div>
          <form className="flex flex-col gap-2 mt-2">
            <input
              type="text"
              placeholder="Add a Pickup Location"
              className="border p-2 rounded-md"
              onFocus={() => {
                activeInputRef.current = 'pickup'; // Set active input to pickup
                setSearchQuery(pickup); // Set the search query to the current pickup value
                setDown(true); // Open the location panel
              }}
              onChange={(e) => {
                setPickup(e.target.value);
                setSearchQuery(e.target.value); // Update the search query dynamically
                setIsPickupSelected(false); // Reset the flag if user types manually
              }}
              value={pickup}
            />
            <input
              type="text"
              placeholder="Enter Your Destination"
              className="border p-2 rounded-md"
              onFocus={() => {
                activeInputRef.current = 'destination'; // Set active input to destination
                setSearchQuery(destination); // Set the search query to the current destination value
                setDown(true); // Open the location panel
              }}
              onChange={(e) => {
                setDestination(e.target.value);
                setSearchQuery(e.target.value); // Update the search query dynamically
                setIsDestinationSelected(false); // Reset the flag if user types manually
              }}
              value={destination}
            />
          </form>
        </div>

        <div className={`w-96 h-[70%] border ${!down ? 'hidden' : ''}`}>
          {isPickupSelected && isDestinationSelected ? (
            selectedRide !== null ? (
              (isRideConfirmed ?
                <LookingForVehicle 
                  selectedRide={selectedRide}
                  pickup={pickup}
                  destination={destination}
                /> :
                <ConfirmRide
                  selectedRide={selectedRide}
                  pickup={pickup}
                  destination={destination}
                  setIsRideConfirmed={setIsRideConfirmed}
                  vehicleType={vehicleType} 
                />)
            ) : (
              <RideInfo
                pickup={pickup}
                destination={destination}
                setSelectedRide={setSelectedRide}
                setIsRideConfirmed={setIsRideConfirmed}
                setVehicleType={setVehicleType}
              />
            )
          ) : (
            <Location
              searchQuery={searchQuery} // Pass the dynamic search query
              onSelectLocation={handleSelectLocation}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;