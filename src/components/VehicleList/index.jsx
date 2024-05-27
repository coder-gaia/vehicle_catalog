import React from "react";
import { VehicleListContainer } from "./styles";
import Vehicle from "../Vehicle";
import vehiclesData from '../../utils/vehicleData';


const VehicleList = () => {
  return (
    <VehicleListContainer className="container">
      {vehiclesData.map((vehicle) => (
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


export default VehicleList
