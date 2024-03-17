import React, { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import location from "../../assets/images/location.png"
import { Link } from 'react-router-dom'
import ContactUsStyles from "./ContactUs.module.css"
const ContactUs = () => {
  const [state, handleSubmit] = useForm("xzbnazap");
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [address, setAddress] = useState('');
  const [damageType, setDamageType] = useState('');
  const [otherDamage, setOtherDamage] = useState('');
  const [destination, setDestination] = useState('');
  const [garageLocation, setGarageLocation] = useState('');
  const [requestType, setRequestType] = useState('Request Now');
  const [dateTime, setDateTime] = useState('');

  const handleRequestTypeChange = (event) => {
    setRequestType(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleDestinationChange = (event) => {
    const value = event.target.value;
    setDestination(value);

    // Reset garageLocation when the selection changes
    if (value !== 'Garage I know') {
      setGarageLocation('');
    }
  };

  const handleDamageChange = (event) => {
    const value = event.target.value;
    setDamageType(value);

    // Reset otherDamage when the selection changes
    if (value !== 'Other') {
      setOtherDamage('');
    }
  };

  const getCurrentLocation = () => {
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLocationError(null);
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Error fetching address');
              }
              return response.json();
            })
            .then(data => {
              setAddress(data.display_name);
              setLocationLoading(false);
            })
            .catch(error => {
              setLocationError(error.message);
              setLocationLoading(false);
              console.error('Error fetching address:', error);
            });
        },
        error => {
          setLocationError(error.message);
          setLocationLoading(false);
          console.error('Error getting the current location:', error);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
      setLocationLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (state.succeeded) {
    return (
      <div className='pageHeight d-flex justify-content-center align-items-center'>
        <h2 className='successColor fs-1'><i className="fa-regular fa-circle-check me-2"></i>Thanks for your submission!</h2>
      </div>
    );
  }
  return (
    <>
    <div className={`${ContactUsStyles.imgContainer} mb-3 `}>
      <div className= {`${ContactUsStyles.imgLayer} h-100 d-flex align-items-center justify-content-center`}>
        <div className= {`${ContactUsStyles.imgContent}  text-center`}>
          <div>
          <h2>Contact Us</h2>
        <p>Rent the perfect car for your next adventure</p>
          </div>
     
        </div>
    
      </div>
      
    </div>
    <div className="container py-5">
      <div className="row">
        <div className="col-md-7">
          <div className="mb-4">
          <h3 className={`${ContactUsStyles.mainTitle} mb-2`}>contact us</h3>
          <p className='fw-bold'>Rent the perfect car for your next adventure</p>
          </div>
          <div className={`${ContactUsStyles.item} mb-4`}>
          <img src={location} className='mb-1' alt="" />
        <h4 className='mb-2'>Address</h4>
        <p className='pe-md-5'>Office 1410 - IT Plaza - Silicon Oasis - Dubai 
        - United Arab Emirates. <span className='mainColor text-decoration-underline fw-bold'><Link to={"https://maps.app.goo.gl/ZCwCNUWimpxCKbQu9?g_st=ic"} target='_blank'>Get Directions</Link></span></p>
          </div>
          <div className={`${ContactUsStyles.item} mb-4`}>
        <i className="fa-regular fa-clock fs-5 mb-1"></i>
        <h4 className='mb-2'>Work-time</h4>
        <p>Daily from <span className='fw-bolder'>Saturday</span> to <span className='fw-bolder'>Thursday</span> from <span className='fw-bolder'>08:00 AM</span> to <span className='fw-bolder'>04:00 PM</span> </p>
          </div>
          <div className={`${ContactUsStyles.item} mb-4`}>
         <i className="fa-regular fa-envelope fs-5 mb-1"></i>
       
        <h4 className='mb-2'>Email Us</h4>
     
        <a className='mainColor' href="mailto:info@borame.ae">info@borame.ae</a>
          </div>
        </div>
        <div className="col-md-5">
        <div className="row">
        <form onSubmit={handleSubmit} className="col-12">
                <div className="mb-3">
                  <label className='mb-2' htmlFor="name">Name<span className='text-danger'>*</span></label>
                  <input
                    type="text"
                    name="UserName"
                    className="form-control px-2 py-2 rounded-3"
                    id="name"
                    required
                    placeholder='Enter Your Name'
                    aria-label="Name"
                  />
                  <ValidationError prefix="UserName" field="UserName" errors={state.errors} />
                </div>
                <div className="mb-3">
                  <label className='mb-2' htmlFor="phone">Mobile Number<span className='text-danger'>*</span></label>
                  <input
                    type="tel"
                    name="PhoneNumber"
                    className="form-control px-2 py-2 rounded-3"
                    required
                    id="phone"
                    placeholder='05xxxxxxxxx'
                    aria-label="Subject"
                  />
                  <ValidationError prefix="PhoneNumber" field="PhoneNumber" errors={state.errors} />
                </div>
                <div className="mb-3">
    <label className='mb-2' htmlFor="location">Location<span className='text-danger'>*</span></label>
    <div className='d-flex jusify-content-center align-items-center'>
      <input type="text" id="location" required aria-label="inquiry" name="Location" className="form-control px-2 py-2 rounded-3 me-2" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your location" />
      <button className='btnCustom btnOutLine fw-bold rounded-3 px-2 py-2 text-nowrap' disabled={locationLoading} onClick={getCurrentLocation}>Get Current Location</button>
    </div>
    <ValidationError prefix="Location" field="Location" errors={state.errors} />
    {locationError && <p className="text-danger">{locationError}</p>}
  </div>

                <div className="mb-3">
                  <div className="row">
                    <div className="col-6">
                      <label className="mb-1" htmlFor="Type">Car Type<span className="text-danger">*</span>{' '}</label>
                      <input
                        type="text"
                        name="carType"
                        className="form-control px-2 py-2 rounded-3"
                        id="Type"
                        required
                        aria-label="Type"
                      />
                      <ValidationError prefix="carType" field="carType" errors={state.errors} />
                    </div>
                    <div className="col-6">
                      <label className="mb-1" htmlFor="model">Car Model<span className="text-danger">*</span>{' '}</label>
                      <input
                        type="text"
                        name="carModel"
                        className="form-control px-2 py-2 rounded-3"
                        id="model"
                        required
                        aria-label="model"
                      />
                      <ValidationError prefix="carModel" field="carModel" errors={state.errors} />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className='mb-2' htmlFor="Damage">Damage<span className='text-danger'>*</span> </label>
                  <select className="form-select mb-3" aria-label="Default select example" name="Damage" value={damageType} onChange={handleDamageChange}>
        <option disabled value="">Select Damage Type</option>
        <option value="Battery">Battery</option>
        <option value="FlatTire">Flat tire</option>
        <option value="RecoveryForRegistration">Recovery for Registration</option>
        <option value="Mechanical">Mechanical</option>
        <option value="MajorAccident">Major Accident</option>
        <option value="MinorAccident">Minor Accident</option>
        <option value="Other">Other</option>
      </select>
                  {damageType === 'Other' && (
        <div className="mt-2">
          <label className='mb-2' htmlFor="otherDamage">Other Damage:<span className='text-danger'>*</span></label>
          <input type="text" id="otherDamage"  className="form-control px-2 py-2 rounded-3" name="otherDamage" value={otherDamage} onChange={(e) => setOtherDamage(e.target.value)} />
          <ValidationError prefix="otherDamage" field="otherDamage" errors={state.errors} />

        </div>
      )}
                  <ValidationError prefix="Damage" field="Damage" errors={state.errors} />
                </div>
                <div className="mb-4">
      <label className='mb-2' htmlFor="destination">Where do you want to go?<span className='text-danger'>*</span></label>
<div className='d-flex justify-content-between'>
<div>
        <input type="radio" id="nearestGarage" name="destination" value="Nearest garage" checked={destination === 'Nearest garage'} onChange={handleDestinationChange} />
        <label className='ms-2' htmlFor="nearestGarage">Nearest garage</label>
      </div>
      <div>
        <input type="radio" id="knownGarage" name="destination" value="Garage I know" checked={destination === 'Garage I know'} onChange={handleDestinationChange} />
        <label  className='ms-2' htmlFor="knownGarage">Garage I know</label>
        
      </div>
      <div>
        <input type="radio" id="registrationOffice" name="destination" value="Registration office" checked={destination === 'Registration office'} onChange={handleDestinationChange} />
        <label  className='ms-2' htmlFor="registrationOffice">Registration office</label>
      </div>
</div>
     
      {destination === 'Garage I know' && (
          <div className="ms-3 my-2">
            <label className='mb-2' htmlFor="garageLocation">Garage Location<span className='text-danger'>*</span></label>
            <input type="text" id="garageLocation"  className="form-control px-2 py-2 rounded-3" name="garageLocation" value={garageLocation} onChange={(e) => setGarageLocation(e.target.value)} />
            <ValidationError prefix="garageLocation" field="garageLocation" errors={state.errors} />

          </div>
        )}
      <ValidationError prefix="destination" field="destination" errors={state.errors} />
    </div>

    <div className="mb-4">
      <label className='mb-2'>When do you want to request?<span className='text-danger'>*</span></label>
      <div className={`${ContactUsStyles.radiobuttonContainer} d-flex justify-content-around align-items-center `}>
      <div>
        <input type="radio" className={`${ContactUsStyles.btnCheck} btn-check `} id="requestNow" name="requestType" value="Request Now" checked={requestType === 'Request Now'} onChange={handleRequestTypeChange} />
        <label className={`${ContactUsStyles.radioBtnOutlineCustom} btn rounded-3 flex-grow-1  px-4 py-2 mx-2 `}  htmlFor="requestNow">Request Now</label>
      </div>
      <div>
        <input type="radio" className={`${ContactUsStyles.btnCheck} btn-check `} id="requestLater" name="requestType" value="Request Later" checked={requestType === 'Request Later'} onChange={handleRequestTypeChange} />
        <label className={`${ContactUsStyles.radioBtnOutlineCustom} btn rounded-3 flex-grow-1  px-4 py-2 mx-2 `} htmlFor="requestLater">Request Later</label>
        
      </div>
      </div>
      <ValidationError prefix="requestType" field="requestType" errors={state.errors} />
      {requestType === 'Request Later' && (
          <div className="mt-2">
            <label className='mb-2' htmlFor="dateTime">Select Date and Time<span className='text-danger'>*</span></label>
            <input type="datetime-local" id="dateTime"  className="form-control px-2 py-2 rounded-3" name="dateTime" value={dateTime} onChange={handleDateTimeChange} />
            <ValidationError prefix="dateTime" field="dateTime" errors={state.errors} />

          </div>
        )}
    </div>
                <div className="button-container d-flex justify-content-end">
                  <button type="submit" disabled={state.submitting} className="btn btnFilled py-1">{state.submitting ? 'Sending...' : 'Send'}</button>
                </div>
              </form>
    </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs
