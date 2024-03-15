import React, { useEffect, useContext } from 'react';
import GoogleOAuthSuccessRedirectStyles from "./GoogleOAuthSuccessRedirect.module.css"
import {  useNavigate  } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { getCustomerProfile } from '../../api/user.api';
import { useFavoriteContext } from '../../context/FavoriteContext';

const GoogleOAuthSuccessRedirect = () => {

  const navigate = useNavigate();
  const { setUserInfo, setToken, getUserFavorite } = useContext(UserContext);
  const {setFavorites } = useFavoriteContext();
  useEffect(() => {
    
    // Extract token from URL on component mount
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    // if (token) {
      try {
    
        getCustomerProfile("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoibW00MjM0MThAZ21haWwuY29tIiwiaWF0IjoxNzA0MjEzOTkwLCJleHAiOjE3MDQ4MTg3OTB9.jNV75nmHPxAMLBTUU7vTSkFrEZaF9IEYFGII9bAIgH8")
        .then((data) => {
      
          setUserInfo(data);
          
          setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoibW00MjM0MThAZ21haWwuY29tIiwiaWF0IjoxNzA0MjEzOTkwLCJleHAiOjE3MDQ4MTg3OTB9.jNV75nmHPxAMLBTUU7vTSkFrEZaF9IEYFGII9bAIgH8");

          getUserFavorite(data.id,
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoibW00MjM0MThAZ21haWwuY29tIiwiaWF0IjoxNzA0MjEzOTkwLCJleHAiOjE3MDQ4MTg3OTB9.jNV75nmHPxAMLBTUU7vTSkFrEZaF9IEYFGII9bAIgH8",
            setFavorites);
          navigate("/");
        }).catch((err) => {
          console.log('Error fetching user profile:', err);
        })

      } catch (error) {
        console.error('Error decoding user info from token:', error);
      }
    // } else {
      
    //   console.error('Token not found in the URL');
    // }
  }, [navigate, 
    setUserInfo, 
    setToken,getUserFavorite]);
  return (
    <>
    {/* <h1>GoogleOAuthSuccessRedirect</h1>  */}
    </>
  )
}

export default GoogleOAuthSuccessRedirect
