import React, { useContext } from 'react';
import HorizontalCardStyles from './HorizontalCard.module.css';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UserContext } from '../../context/UserContext';
import { useFavoriteContext } from '../../context/FavoriteContext';
import SpecsSection from '../SpecsSection/SpecsSection';
import PriceSection from '../PriceSection/PriceSection';
import clsx from 'clsx';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import PriceDay from '../PriceDay/PriceDay';

const HorizontalCard = ({ car }) => {
  const { favorites, addFavoriteCar, removeFavoriteCar } = useFavoriteContext();
  const { userInfo, token } = useContext(UserContext);

  const isFavorite = favorites?.some((favorite) => favorite.id === car.id);
  const navigate = useNavigate();
  const brandName = car?.model.brand.name || '';
  const modelName = car?.model.name || '';
  const year = car?.year || '';
  
  const carTitle = `${brandName} ${modelName} ${year}`;

  const truncatedTitle = carTitle.length > 24 ? `${carTitle.slice(0, 24)}...` : carTitle;
  const handleToggleFavorite = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (token) {
      try {
        if (isFavorite) {
          await removeFavoriteCar(car.id, userInfo.id, token);
          toast.error('Removed from Favorites.', {
            position: 'top-right',
            className: 'textcenter box-shadow',
          });
        } else {
          await addFavoriteCar(car, userInfo.id, token);
          toast.success('Added to Favorites.', {
            position: 'top-right',
            className: 'textcenter box-shadow',
          });
        }
      } catch (error) {
        console.error('Error:', error.message);
        toast.error('An error occurred. Please try again.', {
          position: 'top-right',
          className: 'textcenter box-shadow',
        });
      }
    } else {
      toast.error('You should log in first.', {
        position: 'top-right',
        className: 'textcenter box-shadow',
      });
    }
  };

  return (
    <div className={clsx(car.isHidden && 'tw-hidden')}>
      <Link to={`/car/${car.id}`}>

        <div
          className={`${HorizontalCardStyles.cardCustom} d-inline-block mb-0 ms-auto p-0 position-relative`}
        >
          <div className={`${HorizontalCardStyles.badge}`}>SALE</div>
          <div
            className={`${HorizontalCardStyles.cardHeader} position-absolute p-3 d-flex justify-content-end align-items-center`}
          >
        
            <div
              onClick={handleToggleFavorite}
              className={`${HorizontalCardStyles.fav}  p-2 rounded-circle  d-flex justify-content-center align-items-center`}
            >
              {isFavorite ? (
                <i className='fa-solid fa-heart text-danger'></i>
              ) : (
                <i className='fa-regular fa-heart'></i>
              )}
            </div>
          </div>
          <div className='row g-0'>
            <div className='col-lg-4 '>
              <div className={`${HorizontalCardStyles.imgContainer} position-relative `}
              >
                <img
                  src={car?.pictures[0].value}
                  className={`${HorizontalCardStyles.mainImg} img-fluid w-100 `}
                  alt={`${car.model.brand.name} images`}
                />
                <div
                  className={`${HorizontalCardStyles.imgLayer} ${HorizontalCardStyles.mainImg} position-absolute d-flex justify-content-center align-items-center`}
                >
                  <div
                    onClick={() => navigate(`/car/${car.id}`)}
                    className={`${HorizontalCardStyles.btnCustom} tw-flex tw-items-center`}
                  >
                    Show More{' '}
                    <svg
                      width='14'
                      height='14'
                      viewBox='0 0 14 14'
                      className='ms-2'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M13.1637 1.48529C13.1637 1.01585 12.7832 0.635287 12.3137 0.635287L4.66371 0.635287C4.19427 0.635287 3.81371 1.01585 3.81371 1.48529C3.81371 1.95473 4.19427 2.33529 4.66371 2.33529L11.4637 2.33529L11.4637 9.13529C11.4637 9.60473 11.8443 9.98529 12.3137 9.98529C12.7832 9.98529 13.1637 9.60473 13.1637 9.13529L13.1637 1.48529ZM1.60104 13.4L12.9147 2.08633L11.7127 0.884247L0.398959 12.198L1.60104 13.4Z'
                        fill='#D49F15'
                      />
                    </svg>

      </div>
          </div>
        </div>
    </div>
 
     
            <div className='col-lg-8 text-start'>
              <div className='card-body p-3'>
                <div className='cardContent'>
                  <p className='card-title '>
                    <div className={`${HorizontalCardStyles.cardHeader}  d-flex align-items-center text-start mb-3`}>
                      <img
                        src={car.vendor.logo}
                        style={{width:"45px", height:"45px"}}
                        className='me-3 img-fluid rounded-circle'
                        alt={`${car.model.brand.name} images`}
                        loading="lazy"	
                      />
                      <div>
                        <p
                          className={`${HorizontalCardStyles.cardTitle} m-0 mb-1  tw-line-clamp-1`}
                        >
                         {carTitle}
                        </p>
                        <p className={`${HorizontalCardStyles.vendorName} m-0`}>
                          {car.vendor.name}
                        </p>
                      </div>
                    </div>
                  </p>

                  <div
                    className={`${HorizontalCardStyles.divider} p-0 text-center mb-3 px-3`}
                  >
                    <SpecsSection car={car} />
                  </div>
                  <div className='px-3 row align-items-center'>
                  <div className="col-5">
                  <PriceDay car={car} />
     </div>
              <div className="col-7">
              <WhatsAppButton car={car}/>
                </div> 
                  </div>
                </div>
              </div>
            </div>
          
        </div>
        </div>
      </Link>
    </div>
  );
};

export default HorizontalCard;
