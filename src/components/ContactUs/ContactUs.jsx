import React, { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import location from "../../assets/images/location.png"
import { Link } from 'react-router-dom'
import ContactUsStyles from "./ContactUs.module.css"
const ContactUs = () => {
  const [state, handleSubmit] = useForm("xbjnjvdq");
  if (state.succeeded) {
      return <>
<div className='pageHeight d-flex justify-content-center align-items-center'>
<h2 className='successColor fs-1'><i className="fa-regular fa-circle-check me-2"></i>Thanks for your submission!</h2>

</div>
    
      </>;
  }
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
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
          <p>Rent the perfect car for your next adventure</p>
          </div>
          <div className={`${ContactUsStyles.item} mb-4`}>
          <img src={location} className='mb-1' alt="" />
        <h4 className='mb-2'>Address</h4>
        <p className='pe-md-5'>Office 312 - Third floor- Mohammad Bin Abdulrahman Alashram Building - Garhoud - Dubai 
        - United Arab Emirates. <span className='mainColor text-decoration-underline fw-bold'><Link to={"https://maps.app.goo.gl/ZCwCNUWimpxCKbQu9?g_st=ic"} target='_blank'>Get Directions</Link></span></p>
          </div>
          <div className={`${ContactUsStyles.item} mb-4`}>
        <i className="fa-regular fa-clock fs-5 mb-1"></i>
        <h4 className='mb-2'>Work-time</h4>
        <p>Daily from <span className='fw-bolder'>Monday</span> to <span className='fw-bolder'>Friday</span> from <span className='fw-bolder'>09:00 AM</span> to <span className='fw-bolder'>06:00 PM</span> </p>
          </div>
          <div className={`${ContactUsStyles.item} mb-4`}>
         <i className="fa-solid fa-phone fs-5 mb-1"></i>
        <h4 className='mb-2'>Contact Number</h4>
        <p>+971527711325</p>
          </div>
        </div>
        <div className="col-md-5">
        <div className="row">
      <form
        onSubmit={handleSubmit}
      >
        <div className="col-12 mb-4">
          <label className='mb-2' htmlFor="UserName">Name<span className='text-danger'>*</span></label>
          <input
            type="text"
            name="UserName"
            className="form-control p-3 rounded-4"
            id="UserName"
            required
          aria-label="Name"
          />
             <ValidationError 
        prefix="UserName" 
        field="UserName"
        errors={state.errors}
      />
        </div>
        <div className="col-12 mb-4">
        <label className='mb-2' htmlFor="PhoneNumber">Phone Number<span className='text-danger'>*</span></label>
          <input
            type="tel"
            name="PhoneNumber"
            className="form-control p-3 rounded-4"
            required
            id="PhoneNumber"
            
            aria-label="Subject"
        
          />
             <ValidationError 
        prefix="PhoneNumber" 
        field="PhoneNumber"
        errors={state.errors}
      />
        </div>
        <div className="col-12 mb-4">
        <label className='mb-2' htmlFor="email">Email<span className='text-danger'>*</span></label>
          <input
            type="email"
            name="Email"
            className="form-control p-3 rounded-4"
            id="email"
            required
           
            aria-label="inquiry"
          
          />
           <ValidationError 
        prefix="Email" 
        field="Email"
        errors={state.errors}
      />
        </div>
        <div className="col-12 mb-5">
        <label className='mb-2' htmlFor="inquiry">Your Inquiry<span className='text-danger'>*</span> </label>
          <input
            type="text"
            name="inquiry"
            className="form-control p-3 rounded-4"
            id="inquiry"
            required
           
            aria-label="inquiry"
           
          />
           <ValidationError 
        prefix="Inquiry" 
        field="inquiry"
        errors={state.errors}
      />
        </div>
       

        <div className="button-container d-flex justify-content-end">
          <button
            type="submit"
            disabled={state.submitting}
            className="btn btnFilled py-1"
          >
            Send</button>
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
