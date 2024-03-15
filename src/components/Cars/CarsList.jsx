import React, { useEffect, useState } from 'react'

import CarCard from './CarCard'
// import { Car } from '../../api'

import CarsStyles from "./Cars.module.css"
import HorizontalCard from '../HorizontalCard/HorizontalCard'

/**
 * 
 * @param {Object} props
 * @param {object[]} props.cars
 */
export default function CarsList({ cars }) {

  return (
    <>
      <div className="container">
       
          {
            cars && cars.map((car, index) => (
              <CarCard  car={car} key={index} />
             
            ))
          }
        
      </div>
    </>
  )
}

