import { createContext, useContext, useEffect, useState } from "react";
import { addFavouriteCars, removeFavouriteCars } from "../api/user.api";
import { UserContext } from "./UserContext";

export const FavoriteContext = createContext(0);

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const {userInfo,token,getUserFavorite } = useContext(UserContext);
  const addFavoriteCar = async (car, userId, token) => {
    
    await addFavouriteCars(userId, car.id, token);

    
    setFavorites((prevFavorites) => [...prevFavorites, car]);
  };

  
  const removeFavoriteCar = async (carId, userId, token) => {
  
    await removeFavouriteCars(userId, carId, token);

   
    setFavorites((prevFavorites) => prevFavorites.filter((car) => car.id !== carId));
  };
  // useEffect(() => {
  //   if(token){
  //     getUserFavorite(userInfo.id, token, setFavorites)
  //       .then(() => setLoading(false))
  //       .catch((error) => {
  //         console.error("Error fetching favorites:", error);
  //         // Handle the error (e.g., show a notification to the user)
  //         setLoading(false);
  //       });
  //   }
 
  // }, [userInfo.id, token,setFavorites]);
  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites,addFavoriteCar,removeFavoriteCar }}>
      {children}
    </FavoriteContext.Provider>
  );
}
export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};