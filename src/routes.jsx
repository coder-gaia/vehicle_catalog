import React from "react";
import { Routes, Route } from 'react-router-dom';
import UserRegistration from "../src/components/UserRegistration";
import Login from "../src/components/Login";
import Home from '../src/Pages/Home';
import VehicleRegistration from "./components/VehicleRegistration";
import PropTypes from 'prop-types';

const Rotas = ({ isAuthenticated, handleLogout, setIsAuthenticated }) => {

  return (
    <Routes>
      <Route path="/" element={<Home isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
      <Route path="/signup" element={<UserRegistration />} />
      <Route path="/login" element={<Login handleLogout={handleLogout} setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/createVehicle" element={<VehicleRegistration />} />
    </Routes>
  );
};

Rotas.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Rotas;
