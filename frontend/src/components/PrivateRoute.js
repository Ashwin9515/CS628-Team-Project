// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('token'); // Check if user is authenticated

  return (
    // Render the component if authenticated, else redirect to login
    isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;
