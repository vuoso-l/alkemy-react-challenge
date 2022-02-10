import React from "react";
import { Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import DishSearcher from "../pages/DishSearcher";
import PrivateRoute from "./PrivateRoute";

const ProjectRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/buscar-platos" element={<DishSearcher />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default ProjectRoutes;
