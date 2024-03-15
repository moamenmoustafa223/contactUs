import React, { useContext, useEffect } from 'react'
import FacebookOAuthSuccessRedirectStyles from "./FacebookOAuthSuccessRedirect.module.css"
import {  useNavigate  } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { getCustomerProfile } from '../../api/user.api';
import { useFavoriteContext } from '../../context/FavoriteContext';
const FacebookOAuthSuccessRedirect = () => {
  const navigate = useNavigate();
  const {  setUserInfo,  setToken ,getUserFavorite} = useContext(UserContext);
  const {setFavorites } = useFavoriteContext();
  useEffect(async () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      try {
        
        
        getCustomerProfile(token).then((data) => {
          setUserInfo(data);
          setToken(token);
          getUserFavorite(data.id,
            token,
            setFavorites);
          navigate("/");
        }).catch((err) => {
          console.log('Error fetching user profile:', err);
        })

        
      } catch (error) {
        console.error('Error decoding user info from token:', error);
      }
    } else {
      
      console.error('Token not found in the URL');
    }
  }, [navigate, 
    setUserInfo, 
    setToken,getUserFavorite]);
  return (
    <>
    <h1>FacebookOAuthSuccessRedirect</h1> 
    </>
  )
}

export default FacebookOAuthSuccessRedirect
