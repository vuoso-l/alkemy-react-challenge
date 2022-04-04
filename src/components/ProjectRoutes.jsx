import { Routes, Route } from "react-router-dom";

import Error404 from "../pages/Error404";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import { PlateProvider } from "../context/PlateContext";
import { MenuProvider } from "../context/MenuContext";
import { IsOpenProvider } from "../context/IsOpenContext";
import { IsLoginProvider } from "../context/IsLoginContext";

import PrivateRoute from "./PrivateRoute";

const ProjectRoutes = () => {
  return (
    <div>
      <IsLoginProvider>
        <PlateProvider>
          <MenuProvider>
            <IsOpenProvider>
              <Routes>
                <Route path="/" element={<PrivateRoute />}>
                  <Route path="/" element={<Homepage />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Error404 />} />
              </Routes>
            </IsOpenProvider>
          </MenuProvider>
        </PlateProvider>
      </IsLoginProvider>
    </div>
  );
};

export default ProjectRoutes;
