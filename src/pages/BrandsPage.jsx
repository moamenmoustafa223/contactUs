import React, { useEffect, useState } from 'react';
import { listBrands } from '../api';
import BrandCard from '../components/BrandCard/BrandCard';
import Loader from '../components/Loader/Loader';
import ReactHelmet from '../components/ReactHelmet/ReactHelmet';

export const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const setData = async () => {
      try {
        const brands = await listBrands();
        setBrands(brands);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    setData().catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);
 
  return (
    <>
      <ReactHelmet title={'Borame | Brands'} />
      <div className='container py-5' style={{ minHeight: '100vh' }}>
        {/* <Link className="btnCustom mb-4 d-inline-block" to={`/`}><i className="fa-solid fa-arrow-left-long me-2"></i> Back to home
                </Link> */}
        <div className='mb-5 border-bottom'>
          <h2 className='mainTitle'>our Brands</h2>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div className='row g-4 px-3'>
            {brands &&
              brands.map((brand, index) => (
                <BrandCard brand={brand} key={index} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};
