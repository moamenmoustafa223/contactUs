import React, { useContext } from 'react'
import ProtectedRouteStyles from "./ProtectedRoute.module.css"
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
const ProtectedRoute = ({ children }) => {
  const { userInfo,token } = useContext(UserContext);
  if (token) {
    return children;
  }

  return <Navigate to="/login" />;
 
}

export default ProtectedRoute
