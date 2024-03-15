import React from 'react'
import BrandCardStyles from "./BrandCard.module.css"
import { Link } from 'react-router-dom'

const BrandCard = ({brand,index}) => {
  return (
    <>

            <div className="col-4 col-lg-2" key={index}>
              <Link  to={`/cars?brand=${brand.id}`}>
              <div className={`${BrandCardStyles.brandCard} px-4 py-3 text-center rounded-4 d-flex align-items-center justify-content-center`} >
           
              <div className='mx-auto'>
                <div className={`${BrandCardStyles.imgContainer} mb-2 `}>
                <img src={brand.logo} alt={`${brand.name} logo`} className="img-fluid "/>
                </div>
                
                  <h3 className={`${BrandCardStyles.brandName} m-0`}>{brand.name}</h3>
              </div>
           
             
            </div>
              </Link>
           
          </div>
         
    </>
  )
}

export default BrandCard
