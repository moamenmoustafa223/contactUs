import React, { useEffect, useState } from 'react'
import BrandSectionStyles from "./BrandSection.module.css"
import { listBrands } from '../../api'
import BrandCard from '../BrandCard/BrandCard'
import SectionHeader from '../SectionHeader/SectionHeader'
const BrandSection = () => {
  const [brands, setBrands] = useState([])
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const setData = async () => {
      const brands = await listBrands()
      setBrands(brands)
    }
    setData().catch((err) => console.log(err))
  }, [])
  const brandSection = showAll ? brands : brands.slice(0, 6);
  const buttonText = showAll ? 'Show Less' : 'Show More';
  return (
    <>
  <section className="container py-4 px-3">
  <SectionHeader title={"our premium brands"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} url={"/brands"} className={"d-none"}  />
        <div className="container text-center">
        <div className="row g-3 mb-4">
          {brandSection && brandSection.map((brand, index) => (
              <BrandCard brand={brand} key={index} />
          ))}
        </div>
        <button     onClick={() => setShowAll(!showAll)} className='btnCustom text-black px-3 py-2 fw-bold  rounded-3 text-center fs-6'> <span className='d-flex align-items-center'>
        {buttonText}<i className={`ms-2 mainColor m-0 fa-solid fa-angle-${showAll ? 'up' : 'down'}`}></i>

        </span>
          </button>
      </div>

      </section>
    </>
  )
}

export default BrandSection
