import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocalStorage } from "../util/useLocalStorage";
import jwtDecode from "jwt-decode";
import { useFavoriteContext } from "./FavoriteContext";
import { getCustomerFavouriteCars } from "../api/user.api";

export const UserContext = createContext(0);

const getUserCookieValue = (cookieName) =>
  document.cookie
    .split(';')
    .find((str) => str.trim().startsWith(`${cookieName}=`))
    ?.split('=')[1] || null;

// eslint-disable-next-line react/prop-types
export default function UserProvider({ children }) {

  const [token, setToken] = useLocalStorage('token', null);
  const [userInfo, setUserInfo] = useLocalStorage('userData', {});
  
  const { setFavorites } = useFavoriteContext();

  async function logout({setFavorites}) {
    // document.cookie.split(";").forEach(function (c) {
    //   document.cookie = c
    //     .replace(/^ +/, "")
    //     .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    // });
    setToken(null);
    setUserInfo(null);
    setFavorites([])
  }

  async function checkForExpiry(){
    if(token){
        const decodedToken = jwtDecode(token);
        const expiryDate = new Date(decodedToken.exp * 1000);
        const currentDate = new Date();
        if (currentDate > expiryDate) {
          logout({setFavorites});
        } else {
          console.log('Token is still valid.');
        }
    }
  }


   async function getUserFavorite(userInfoId,token,setFavorites){
    if(token){
      try {
        const favCar = await getCustomerFavouriteCars(userInfoId, token);
         console.log(favCar);
        setFavorites(favCar);
       
      } catch (err) {
        console.log(err);
      } 
    }
  }
  useEffect(() => {
   
    checkForExpiry();
    
 
    const interval = setInterval(checkForExpiry, 60000);

    
    return () => clearInterval(interval);
  }, []);
  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        token, setToken, logout
        ,checkForExpiry,getUserFavorite
      }}
    >
      {children}
    </UserContext.Provider>
  );
}