import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import location from "../../assets/images/location.png";
import { Link } from 'react-router-dom';
import InvestWithUsStyles from "./InvestWithUs.module.css";
import OrganizationSchema from '../OrganizationSchema/OrganizationSchema';

const AMPInvestWithUs = () => {
  const [state, handleSubmit] = useForm("xwkgkdlr");

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
      <div className={`${InvestWithUsStyles.imgContainer} mb-3 `}>
        <div className={`${InvestWithUsStyles.imgLayer} h-100 d-flex align-items-center justify-content-center`}>
          <div className={`${InvestWithUsStyles.imgContent}  text-center`}>
            <div>
              <h2>Invest with us</h2>
              <p>Rent the perfect car for your next adventure</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-7">
          <div className="mb-4">
          <h3 className={`${InvestWithUsStyles.mainTitle} mb-2`}>contact us</h3>
          <p>Rent the perfect car for your next adventure</p>
          </div>
          <div className={`${InvestWithUsStyles.item} mb-4`}>
        
        <h4 className='mb-3 pe-md-5'>Join CarWins to profit from over 1 million page views every month, with more than 50,000 quality leads sent to car rental companies and brokers all across the world.</h4>
        <ul className='ms-4'>
          <li><p>Get direct leads via phone, SMS and emails.</p></li>
          <li><p>Full training provided for your staff to use the CMS.</p></li>
          <li><p>Assistance from your dedicated Account Manager.</p></li>
          <li><p>Tools and resources to plan your marketing strategy.</p></li>
          <li><p>Exclusive member benefits.</p></li>
        </ul>
          </div>

          <div className={`${InvestWithUsStyles.item} mb-4`}>
          <img src={location} className='mb-1' alt="" />
        <h4 className='mb-2'>Address</h4>
        <p className='pe-md-5'>Office 312 - Third floor- Mohammad Bin Abdulrahman Alashram Building - Garhoud - Dubai 
        - United Arab Emirates. <span className='mainColor text-decoration-underline fw-bold'><Link to={"https://maps.app.goo.gl/ZCwCNUWimpxCKbQu9?g_st=ic"} target='_blank'>Get Directions</Link></span></p>
          </div>
        
          <div className={`${InvestWithUsStyles.item} mb-4`}>
         <i className="fa-solid fa-phone fs-5 mb-1"></i>
        <h4 className='mb-2'>Contact Number</h4>
        <p>+971527711325</p>
          </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <form onSubmit={handleSubmit}>
              <div className="col-12 mb-4">
          <label className='mb-2' htmlFor="name">Name<span className='text-danger'>*</span></label>
          <input
            type="text"
            name="UserName"
            className="form-control p-3 rounded-4"
            id="name"
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
        <label className='mb-2' htmlFor="phone">Phone Number<span className='text-danger'>*</span></label>
          <input
            type="tel"
            name="PhoneNumber"
            className="form-control p-3 rounded-4"
            required
            id="phone"
            
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
        <div className="col-12 mb-4">
        <div className="row">
          <div className="col-6">
            <label className="mb-2" htmlFor="brand">
              Car Brand<span className="text-danger">*</span>{' '}
            </label>
            <input
              type="text"
              name="carBrand"
              className="form-control p-3 rounded-4"
              id="brand"
              required
              aria-label="brand"
            
            />
              <ValidationError 
        prefix="CarBrand" 
        field="carBrand"
        errors={state.errors}
      />
          </div>
          <div className="col-6">
            <label className="mb-2" htmlFor="model">
              Car Model<span className="text-danger">*</span>{' '}
            </label>
            <input
              type="text"
              name="carModel"
              className="form-control p-3 rounded-4"
              id="model"
              required
              aria-label="model"
          
            />
              <ValidationError 
        prefix="CarModel" 
        field="carModel"
        errors={state.errors}
      />
          </div>
        </div>
      </div>
       
        <div className="col-12 mb-4">
        <label className='mb-2' htmlFor="Manufacturer">Car Manufacturer Date<span className='text-danger'>*</span> </label>
          <input
            type="number"
            name="ManufacturerDate"
            min={1900}
            className="form-control p-3 rounded-4"
            id="Manufacturer"
            required
           
            aria-label="Manufacturer"
        
          />
           <ValidationError 
        prefix="ManufacturerDate" 
        field="ManufacturerDate"
        errors={state.errors}
      />
        </div>
        <div className="col-12 mb-5">
        <label className='mb-2' htmlFor="note">Note</label>
          <input
            type="text"
            name="note"
            className="form-control p-3 rounded-4"
            id="note"
            
           
            aria-label="note"
         
          />
           <ValidationError 
        prefix="Note" 
        field="note"
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
      {/* Structured Data */}
      <OrganizationSchema/>
    </>
  );
}

export default AMPInvestWithUs;