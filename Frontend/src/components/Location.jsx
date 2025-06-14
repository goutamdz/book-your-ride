import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Location = ({ searchQuery, onSelectLocation }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery && searchQuery.length >= 3) {
      setLoading(true);
      const token = localStorage.getItem('token');
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
          params: { input: searchQuery },
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
          setSuggestions(res.data); // expects array as in your example
        })
        .catch(() => setSuggestions([]))
        .finally(() => setLoading(false));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  return (
    <div className="flex flex-col gap-2 p-5 overflow-y-scroll h-full scrollbar-hide">
      {loading ? (
        <p>Loading...</p>
      ) : suggestions.length > 0 ? (
        suggestions.map((item) => (
          <div
            key={item.place_id}
            className="flex flex-row items-center gap-2 w-[95%] border p-2 rounded-md cursor-pointer"
            onClick={() => onSelectLocation(item.description)}
          >
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <span>
              <span className="font-semibold">{item.structured_formatting?.main_text}</span>
              {item.structured_formatting?.secondary_text && (
                <span className="text-gray-500 text-sm">, {item.structured_formatting.secondary_text}</span>
              )}
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