import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const userToken = JSON.parse(localStorage.getItem("userToken"));

const PrivateRoute = () => {
  
  return userToken ? <Outlet/> : <Navigate to="/login" />;
};

export default PrivateRoute;
