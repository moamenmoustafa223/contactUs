import React, { useEffect, useState } from 'react'
import { listCategories } from '../api'
import CategoryCard from '../components/CategoryCard/CategoryCard'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import ReactHelmet from '../components/ReactHelmet/ReactHelmet'

export const CategoriesPage = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const setData = async () => {
        try {
            const categories = await listCategories()
            setCategories(categories)
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    setData().catch((err) => console.log(err))
    window.scrollTo(0, 0);
    }, [])
    
  return (
    <>
    <ReactHelmet title={"Borame | Categories"}/>
  <div className="container py-5" style={{minHeight:"100vh"}}>
                {/* <Link className="btnCustom mb-4 d-inline-block" to={`/`}><i className="fa-solid fa-arrow-left-long me-2"></i> Back to home
                </Link> */}
                <div className='mb-5 border-bottom'>
                <h2 className='mainTitle'>our Categories</h2>
                </div>
              

                {loading ? (
                    <Loader />
                ) : (
                    <div className="row g-4 px-3">
                        {categories && categories.map((category, index) => (
                            <CategoryCard category={category} key={index} />
                        ))}
                    </div>
                )}
            </div>
    </>
   
  )
}
