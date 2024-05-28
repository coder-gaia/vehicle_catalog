import React, { useEffect, useState } from "react";
import { VehicleListContainer } from "./styles";
import Vehicle from "../Vehicle";
import vehiclesData from '../../utils/vehicleData';
import PropTypes from 'prop-types';

const VehicleList = ({ filters }) => {
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    const applyFilters = () => {
      return vehiclesData.filter((vehicle) => {
        const brandMatch = !filters.brand || filters.brand.length === 0 || filters.brand.includes(vehicle.brand);
        const modelMatch = !filters.model || filters.model.length === 0 || filters.model.includes(vehicle.model);
        const yearMatch = !filters.year || filters.year.length === 0 || filters.year.includes(vehicle.year.toString());
        const colorMatch = !filters.color || filters.color.length === 0 || filters.color.includes(vehicle.color);

        return brandMatch && modelMatch && yearMatch && colorMatch;
      });
    };

    const sortedData = applyFilters().sort((a, b) => b.price - a.price);
    setFilteredVehicles(sortedData);
  }, [filters]);

  return (
    <VehicleListContainer className="container">
      {filteredVehicles.map((vehicle) => (
        <Vehicle
          key={vehicle.id}
          brand={vehicle.brand}
          model={vehicle.model}
          year={vehicle.year}
          color={vehicle.color}
          price={vehicle.price}
          km={vehicle.km}
          image={vehicle.image}
          location={vehicle.location}
        />
      ))}
    </VehicleListContainer>
  );
};

VehicleList.propTypes = {
  filters: PropTypes.shape({
    brand: PropTypes.arrayOf(PropTypes.string),
    model: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

VehicleList.defaultProps = {
  filters: {
    brand: [],
    model: [],
    year: [],
    color: []
  }
};

export default VehicleList;
