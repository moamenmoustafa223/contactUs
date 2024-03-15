import React from 'react'
import PriceSectionStyles from "./PriceSection.module.css"
const PriceSection = ({car,className}) => {
  return (
    <>
 <div className={`d-flex ${car?.costPerMonthNow || car?.costPerWeekNow? 'justify-content-between' : 'justify-content-center'}  mb-3`}>
<div className={`${car?.costPerMonthNow? 'text-start' : 'text-center'}`}>
  <div className={`${PriceSectionStyles.features} mb-1 text-nowrap`}>per day</div>
  {car?.costPerDayBefore ? (
    <div className={`${PriceSectionStyles.discountPrice} `}>
      <div className={`mainColor fw-bold d-inline-block position-relative m-0 text-danger text-nowrap `}>
        <span className={`${PriceSectionStyles.currency}  text-danger`}>AED</span> {car?.costPerDayBefore}
      </div>
    </div>
  ) : ""}
  <div className={`${PriceSectionStyles.price} m-0 text-nowrap`}>
    <span className={`${PriceSectionStyles.currency} `}>AED</span> {car?.costPerDayNow}
  </div>
</div>

<div className={`${car?.costPerMonthNow? 'text-center' : 'text-end'} ${car?.costPerWeekNow? 'd-block' : 'd-none'} ${className} `}>
  <div className={`${PriceSectionStyles.features} mb-1 text-nowrap`}>per week</div>
  {car?.costPerWeekBefore ? (
    <div className={`${PriceSectionStyles.discountPrice} `}>
      <div className={`mainColor fw-bold d-inline-block position-relative m-0 text-danger text-nowrap`}>
        <span className={`${PriceSectionStyles.currency} text-danger`}>AED</span> {car?.costPerWeekBefore}
      </div>
    </div>
  ) : ""}
  <div className={`${PriceSectionStyles.price} m-0 text-nowrap`}>
    <span className={`${PriceSectionStyles.currency}`}>AED</span> {car?.costPerWeekNow}
  </div>
</div>

<div className={`text-end ${car?.costPerMonthNow? 'd-block' : 'd-none'} ${className} `}>
  <div className={`${PriceSectionStyles.features} mb-1 text-nowrap `}>per month</div>
  {car?.costPerMonthBefore ? (
    <div className={`${PriceSectionStyles.discountPrice}`}>
      <div className={`mainColor fw-bold d-inline-block position-relative m-0 text-danger text-nowrap `}>
        <span className={`${PriceSectionStyles.currency}  text-danger`}>AED</span> {car?.costPerMonthBefore}
      </div>
    </div>
  ) : ""}
  <div className={`${PriceSectionStyles.price} m-0 text-nowrap`}>
    <span className={`${PriceSectionStyles.currency} `}>AED</span> {car?.costPerMonthNow}
  </div>
</div>
 </div>



    </>
  )
}

export default PriceSection
