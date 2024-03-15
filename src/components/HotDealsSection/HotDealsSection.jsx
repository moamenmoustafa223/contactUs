import React, { useEffect, useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { listFeaturedCars } from '../../api';
import { Carousel } from '../carousel';
 import HotDealsStyles from "./HotDealsSection.module.css"
import HorizontalCard from '../HorizontalCard/HorizontalCard';
import Loader from '../Loader/Loader';

const HotDealsSection = () => {
  const [featuredCars, setFeaturedCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredCarsData = await listFeaturedCars();
        setFeaturedCars(featuredCarsData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false whether successful or not
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className='container py-3 '>
    
          <h2 className={`${HotDealsStyles.mainTitle} mb-3 text-nowrap d-flex align-items-end`}><span>hot deals</span>
          <img className='d-inline-block' style={{width:"36px" , height:"45px"}} src="https://i.gifer.com/5Mz4.gif" alt="Animated GIF" />
          {loading && <Loader />}
          </h2>


          <Carousel className='tw-w-96 md:tw-w-[calc(48%-20px*1/2)]'>
          {!loading ? (
            // Render content when not loading
            featuredCars.map((car) => (
              <HorizontalCard car={car} key={car.id} />
            ))
          ) : null}
        </Carousel>
      </section>
    </>
  );
};

export default HotDealsSection;
