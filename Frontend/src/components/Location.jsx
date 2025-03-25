import React from 'react';

const Location = ({ searchQuery, onSelectLocation }) => {
  const ads = [
    {
      id: 1,
      lat: 30,
      long: 40,
      title: 'Green Valley, Jalandhar, Punjab, India',
      pin: 144411,
    },
    {
      id: 2,
      lat: 30,
      long: 40,
      title: 'Modern Town, Jalandhar, Punjab, India',
      pin: 144424,
    },
    {
      id: 3,
      lat: 30,
      long: 40,
      title: 'Law Gate, Jalandhar, Punjab, India',
      pin: 144412,
    },
    {
      id: 4,
      lat: 30,
      long: 40,
      title: 'Phagwara, Jalandhar, Punjab, India',
      pin: 144411,
    },
    {
      id: 5,
      lat: 30,
      long: 40,
      title: 'Kalindi, Kunj, Delhi, India',
      pin: 175476,
    },
    {
      id: 6,
      lat: 30,
      long: 40,
      title: 'Pokhra, Jaisalmer, Rajasthan, India',
      pin: 164567,
    },
    {
      id: 7,
      lat: 30,
      long: 40,
      title: 'New Town, Kolkata, West Bengal, India',
      pin: 895643,
    },
  ];

  // Filter locations based on the search query
  const filteredAds = ads.filter((ad) =>
    ad.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-2 p-5 overflow-y-scroll h-full scrollbar-hide">
      {filteredAds.length > 0 ? (
        filteredAds.map((ad) => (
          <div
            key={ad.id}
            className="flex flex-row items-center gap-2 w-[95%] border p-2 rounded-md cursor-pointer"
            onClick={() => onSelectLocation(ad.title)} // Call the callback with the selected location
          >
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <span>
              {ad.title} - {ad.pin}
            </span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No locations found</p>
      )}
    </div>
  );
};

export default Location;