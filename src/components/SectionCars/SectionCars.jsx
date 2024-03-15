import React, { useEffect, useState } from 'react';
import { getSectionCar } from '../../api';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import { Carousel } from '../carousel';

const SectionCars = ({ id }) => {
  const [sectionCars, setSectionCars] = useState([]);

  useEffect(() => {
    const setData = async () => {
      try {
        const sectionsCar = await getSectionCar(id);
        setSectionCars(sectionsCar);
      } catch (err) {
        console.log(err);
      }
    };

    setData();
  }, [id]);

  const visibleSectionCars = sectionCars.filter((car) => !car.isHidden);

  if (visibleSectionCars.length === 0) {
    return <h1 className='text-center fs-3'><i className="fa-solid fa-spinner fa-spin"></i></h1>;
  }

  return (
    <Carousel className='w-80 lg:w-[calc(33.333333%-20px*2/3)]'>
      {visibleSectionCars.map((car) => (
        <FeaturedCard car={car} key={car.id} />
      ))}
    </Carousel>
  );
};

export default SectionCars;
