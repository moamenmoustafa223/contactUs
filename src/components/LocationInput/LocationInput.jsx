import React, { useState } from 'react';
import L from 'leaflet'; // Leaflet library for displaying maps
import 'leaflet/dist/leaflet.css'; // Leaflet CSS for styling

function LocationInput() {
  const [address, setAddress] = useState('');

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;


  

    // Reverse Geocoding: Convert coordinates to address
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        setAddress(data.display_name);
      })
      .catch(error => {
        console.error('Error fetching address:', error);
      });
  };

  return (
    <>
    <div className=' d-flex jusify-content-center align-items-center'>
    <input type="text" className="form-control px-3 py-2 rounded-3"
 value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" />
      <button className='btnCustom btnFilled fw-bold rounded-3 px-2  text-nowrap' onClick={getCurrentLocation}>Get Current Location</button>
    </div>
      
    </>
  );
}

export default LocationInput;
