
import React, { useContext, useEffect, useState } from 'react'
import { getCustomerFavouriteCars } from '../api/user.api'
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import CarsList from '../components/Cars/CarsList';
import Loader from '../components/Loader/Loader';
import ReactHelmet from '../components/ReactHelmet/ReactHelmet';
import { FavoriteContext } from '../context/FavoriteContext';
import FeaturedCard from '../components/FeaturedCard/FeaturedCard';
import { Carousel } from '../components/carousel';

export const FavouritePage = () => {
    
    const [loading, setLoading] = useState(true);
    const {userInfo,token} = useContext(UserContext);
    const {favorites,setFavorites} = useContext(FavoriteContext);
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const favCar = await getCustomerFavouriteCars(userInfo.id, token);
      
            setFavorites(favCar);
           
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData().catch((err) => console.log(err));
        window.scrollTo(0, 0);
      }, [userInfo.id, token, setFavorites]);
  return (
   <>
   <ReactHelmet title={"CarWins | My Favorite"}/>
    <div className="container py-5" style={{minHeight:"100vh"}}>
                {/* <Link className="btnCustom mb-4 d-inline-block" to={`/`}><i className="fa-solid fa-arrow-left-long me-2"></i> Back to home
                </Link> */}
                <div className='mb-5 border-bottom'>
                <h2 className='mainTitle m-0'>favorites</h2>
                  <p className='text-muted'>You can find your favorite cars here!</p>
                </div>
                

                {loading ? (
                    <Loader />
                ) : (
                    <div>
                        {favorites?.length > 0 ? (
                          
                          <Carousel className='w-80 lg:w-[calc(33.333333%-20px*2/3)]'>
                                  {favorites?.map((car, index) => (
                               
                                      <FeaturedCard car={car} key={index} />
                                  
                                   
                                ))}
                          </Carousel>
                          
                               
  
                         
                          
                        ) : <h1 className="p-5">No Favourite Cars</h1>}
                    </div>
                )}
            </div>
   </>
  )
}