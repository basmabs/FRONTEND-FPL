import React from 'react'
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify';
const isExpiredToken = (token) => {
  let decoded = jwt_decode(token)
  return Math.floor(new Date().getTime() / 1000 >= decoded.exp)
};
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  if (token !== null) {
    const expire = isExpiredToken(token)
    if (expire) {
      localStorage.removeItem('token')
      toast.error('Token expired')
      return <Navigate to='/login' />
    } else {
      return children
    }
  }
  else {
    localStorage.removeItem('token')
    return <Navigate to='/login' />
  }
};
export default PrivateRoute