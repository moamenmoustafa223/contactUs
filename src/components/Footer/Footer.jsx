import React from 'react'
import FooterStyles from "./Footer.module.css"
import profit from "../../assets/images/profit.png"
import car from "../../assets/images/car.png"
import SocialMedia from '../SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className={`${FooterStyles.footer} bg-black `} >
      <div className= "container pt-5 text-white">
        <div  className={`${FooterStyles.divider} row  pb-4`}>
          <div className="col-lg-6 col-md-7 mb-4 mb-md-0">
            <p className='mainColor'>Wide selection, affordable price.</p>
            <h5 className='mb-4 fs-4 fw-bold'>Rent the perfect car for your next adventure.</h5>
            <SocialMedia/>
            <div className='d-flex mt-3'>
              <Link to={"/investwithus"} className={`${FooterStyles.primary} me-2 text-nowrap `}><img src={profit} alt="" />invest with us</Link>
              <Link to={"/listyourcars"} className={`${FooterStyles.secondary} ms-2 text-nowrap`}><img src={car} alt="" />list your cars</Link>
            </div>
          </div>
          <div className=" offset-lg-2 offset-md-1 col-md-2 mb-4 mb-md-0">
            <h4 className='text-uppercase mb-3 fw-bold'>carwins</h4>
            <ul>
              <li><Link className={`${FooterStyles.navlinkCustom}`}>About Us</Link></li>
              <li><Link to={"/contactus"} className={`${FooterStyles.navlinkCustom}`}>Contact Us</Link></li>
             
            </ul>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h4 className='text-uppercase mb-3 fw-bold'>legal</h4>
            <ul>
              <li><Link className={`${FooterStyles.navlinkCustom}`}>Terms and Conditions</Link></li>
              <li><Link className={`${FooterStyles.navlinkCustom}`}>Privacy Policy</Link></li>
             
            </ul>
          </div>
        
        </div>
        <div className='py-4 text-center'>
            <p className={`${FooterStyles.navlinkCustom} m-0 d-inline-block`}>Copyright &copy; 2024 CarWins Inc. All rights reserved.</p>
          </div>
        
      </div>
    </div>
    </>
  )
}

export default Footer
