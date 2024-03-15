import React from 'react'
import JoinUsSectionStyles from "./JoinUsSection.module.css"
import ActionButton from '../ActionButton/ActionButton'
const JoinUsSection = () => {
  return (
    <>
    <div className="container text-start">
      <div className="row g-4">

        <div className="col-lg-6  p-lg-5">
          <div className={`${JoinUsSectionStyles.signCardContent}  rounded-4  p-4`}>
            <h3 className='mb-3'>ARE YOU LOOKING FOR <br/> A CAR?</h3>
            <p className='mb-5'>Make your first car rental a great experience with luxury rental vehicles.</p>
            <a className={`btnCustom m-0 rounded-4 `} >signup<i className="bi bi-arrow-up-right fw-bolder fs-6 fw-bold ms-2"></i></a> 
          </div>
        </div>

       
        <div className="col-lg-6 p-lg-5">

          <div className={`${JoinUsSectionStyles.joinCardContent}  rounded-4  p-4`}>
            <h3 className='mb-3'>ARE YOU LOOKING FOR<br/> A CAR?</h3>
            <p className='mb-5'>Make your first car rental a great experience with luxury rental vehicles.</p>
            <a className={`btnCustom m-0 rounded-4 `} >join us <i className="bi bi-arrow-up-right fw-bolder fs-6 fw-bold ms-1"></i></a> 
          </div>
        </div>

      </div>
    </div>
  
    </>
  )
}

export default JoinUsSection
