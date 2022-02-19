import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import { PlateProvider } from "../context/PlateContext";
import { MenuProvider } from "../context/MenuContext";
import { IsOpenProvider } from "../context/IsOpenContext";

const ProjectRoutes = () => {
  return (
    <div>
      <PlateProvider>
        <MenuProvider>
          <IsOpenProvider>
            <Routes>
              <Route path="/alkemy-react-challenge" element={<PrivateRoute />}>
                <Route path="/alkemy-react-challenge" element={<Homepage />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </IsOpenProvider>
        </MenuProvider>
      </PlateProvider>
    </div>
  );
};

export default ProjectRoutes;
