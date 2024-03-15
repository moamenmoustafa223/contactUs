import React, { useState, useEffect } from 'react';
import BannerStyles from './Banner.module.css';
import { Link } from 'react-router-dom';

const Banner = ({ linkUrl, mobileImage, webImage }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getImageToShow = () => (windowWidth < 768 ? mobileImage : webImage);

  return (
    <section className="container ">
      <div className={BannerStyles.Banner}>
        <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
          <img src={getImageToShow()} className="img-fluid" alt="advertisement" />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
