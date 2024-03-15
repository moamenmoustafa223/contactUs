import React from 'react'
import PriceDayStyles from "./PriceDay.module.css"
const PriceDay = ({car}) => {
  return (
    <>
  <div className='text-start'>
 
  {car?.costPerDayBefore ? (
    <div className={`${PriceDayStyles.discountPrice} `}>
      <div className={`mainColor fw-bold d-inline-block position-relative m-0 text-danger text-nowrap `}>
        <span className={`${PriceDayStyles.currency}  text-danger`}>AED</span> {car?.costPerDayBefore}
      </div>
    </div>
  ) : ""}
  <div className={`${PriceDayStyles.price} m-0 text-nowrap fw-bolder`}>
    <span className={`${PriceDayStyles.currency} `}>AED</span> {car?.costPerDayNow}
  </div>
  <div className={`${PriceDayStyles.features} mb-1 text-nowrap`}>per day</div>
</div>
    </>
  )
}

export default PriceDay
