import React from "react"
import { Routes, Route } from 'react-router-dom'
import UserRegistration from "../src/components/UserRegistration"
import Login from "../src/components/Login"
import Home from '../src/Pages/Home'
import CreateVehicle from "./components/Creation"
import PropTypes from 'prop-types'



const Rotas = ({ isLoggedIn, handleLogout }) => {
  return(
    <Routes>
      <Route path="/"  element={<Home isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}/>
      <Route path="/signup" element={<UserRegistration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="creatingVehicle/" element={<CreateVehicle/>}/>
  </Routes>
  )
}

Rotas.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired
};

export default Rotas
