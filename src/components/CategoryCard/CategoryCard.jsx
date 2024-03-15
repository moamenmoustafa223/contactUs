import React from 'react'
import CategoryCardStyles from "./CategoryCard.module.css"
import { Link } from 'react-router-dom'

const CategoryCard = ({category,index}) => {
  return (
    <>

          
               <div className="col-lg-2 col-4 " key={index}>
                <Link to={`/cars?category=${category.id}`}>
                <div  className= {`${CategoryCardStyles.categoryCard}  py-3 px-4 text-center rounded-4`}>
                <div className={`${CategoryCardStyles.imgContainer} mb-3 `}>
                <img src={category.icon} alt={`${category.icon} cars`} className="img-fluid "/>
                </div>
                   <h3 className={`${CategoryCardStyles.categoryName}`}>{category.name}</h3>
            
            
               </div>
                </Link>
               
             </div>
         
    </>
  )
}

export default CategoryCard
