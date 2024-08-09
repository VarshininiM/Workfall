// src/Components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './Auth';

const PrivateRoute = ({ element }) => {
console.log('Is authenticated:', isAuthenticated());

  return isAuthenticated() ? element : <Navigate to="/login" />;
  
};

export default PrivateRoute;
