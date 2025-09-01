import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Protectroute() {
  const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
  return savedUsers.length !== 0 ? <Outlet /> : <Navigate to='/Login' />;
}

export default Protectroute;
