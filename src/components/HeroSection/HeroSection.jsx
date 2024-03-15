import React from 'react'
import HeroSectionStyles from "./HeroSection.module.css"
import SearchBox from '../SearchBox/SearchBox'
import FilterBar from '../FilterBar/FilterBar'

const HeroSection = () => {
  return (
    <>
    <section  className={`${HeroSectionStyles.hero} `}>
    <div className={`${HeroSectionStyles.layer} h-100 d-flex justify-content-center align-items-center`}>
      <div className="container p-5 d-flex justify-content-center">
      <div className={`${HeroSectionStyles.homeContent} text-center`} > 
            <h3 className='m-0'>Rent the perfect car for your next adventure.</h3>  
            <h1 className="mb-5">Wide selection, affordable prices.</h1>
            {/* <SearchBox/> */}
            <div className='d-none'>
            <button className="btn btnCustom btnFilled  rounded-3 me-3 mb-3 fs-6 ">SIGN IN</button>
              <button className="btn btnCustom btnOutLine rounded-3 me-3 mb-3 fs-6 ">SIGN UP</button>
            </div>
            <button className="btn btnCustom btnFilled  rounded-3 me-3 mb-3 fs-6 d-none ">BOOK NOW!</button>
        </div>
      </div>
       
   

    
    </div>
   </section>
    </>
  )
}

export default HeroSection
