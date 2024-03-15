import React from 'react'
import Card from 'react-bootstrap/Card';
import cardImage1 from '../../assets/images/Ferrari_296-GTB_2023_23888_23888_17178874182-1_small.jpg'
import cardImage2 from '../../assets/images/BMW_X6-M40.jpg'
import cardImage3 from '../../assets/images/Suzuki_Ciaz.jpg'
import cardImage4 from '../../assets/images/Bugatti_Chiron.jpg'
import logoImage from '../../assets/images/ferrari (1).png'

import FeaturedCardListStyles from "./FeaturedCardList.module.css"
import FeaturedCard from '../FeaturedCard/FeaturedCard';
const FeaturedCardList = ({ cars }) => {
  return (
    <>
  <div className="container">
        <div className="row g-5 mb-4">
        {
            cars && cars.map((car, index) => (
              <div className="col-sm-6 col-lg-4  col-xl-3 ">
              <FeaturedCard key={index} car={car} />
              </div>
            ))
          }
        
          
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button className={`${FeaturedCardListStyles.arrowBtn} bg-transparent `}>
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <p>
            <span>4</span> of <span>4</span>
          </p>
          <button className={`${FeaturedCardListStyles.arrowBtn} bg-transparent`}>
            <i className="fa-solid fa-arrow-right-long  "></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default FeaturedCardList
