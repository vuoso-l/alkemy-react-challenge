import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import IsLoginContext from "../context/IsLoginContext";

const PrivateRoute = () => {
  const { isLogin } = useContext(IsLoginContext);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
