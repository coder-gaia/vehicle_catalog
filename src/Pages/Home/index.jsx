import React, { useState } from "react";
import Header from "../../components/Header";
import InputSearcher from "../../components/SearchInput";
import { SectionTitle } from "../../components/SideBar/styles";
import styled from "styled-components";
import Sidebar from "../../components/SideBar";
import VehicleList from "../../components/VehicleList";
import PropTypes from 'prop-types';

const Home = ({ isAuthenticated, handleLogout }) => {

  const [filters, setFilters] = useState({
    brand: [],
    model: [],
    year: [],
    color: []
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const Container = styled.div`
    display: flex;
  `;

  return (
    <>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <InputSearcher />
      <SectionTitle>Semi-used Vehicles</SectionTitle>
      <Container>
        <Sidebar onFilterChange={handleFilterChange} />
        <VehicleList filters={filters} />
      </Container>
    </>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};


export default Home;
