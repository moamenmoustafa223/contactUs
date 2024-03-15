import React, { useEffect, useState } from 'react'
import CategorySectionStyles from "./CategorySection.module.css"
import SectionHeader from '../SectionHeader/SectionHeader'
import { listCategories } from '../../api'
import CategoryCard from '../CategoryCard/CategoryCard'
const CategorySection = () => {
  const [categories, setCategories] = useState([])
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const setData = async () => {
      const categories = await listCategories()
     
      setCategories(categories)
     
 
    }
    setData().catch((err) => console.log(err))
  }, [])
  const categorySection = showAll ? categories : categories.slice(0, 6);
  const buttonText = showAll ? 'Show Less' : 'Show More';

  return (
    <>
 <section className="container py-4 px-3">
        <SectionHeader title={"our categories"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} url={"/categories"} className={"d-none"} />
        <div className="container text-center">
        <div className="row g-3 mb-4">
          {categorySection && categorySection.map((category, index) => (
              <CategoryCard category={category} key={index} />
          ))}
        </div>
        <button     onClick={() => setShowAll(!showAll)} className='btnCustom fw-bold text-black px-3 py-2  rounded-3 text-center fs-6'> <span className='d-flex align-items-center'>
        {buttonText}<i className={`ms-2 mainColor m-0 fa-solid fa-angle-${showAll ? 'up' : 'down'}`}></i>

        </span>
          </button>
      </div>

      </section>
    </>
  )
}

export default CategorySection
