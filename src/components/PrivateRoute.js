import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import IsLoginContext from "../context/IsLoginContext";

const PrivateRoute = () => {
  const { isLogin } = useContext(IsLoginContext);
  
  return isLogin ? <Outlet/> : <Navigate to="/alkemy-react-challenge/login" />;
};

export default PrivateRoute;
