import React from "react";
import { VehicleListContainer } from "./styles";
import Vehicle from "../Vehicle";


const VehicleList = () => {
  return(
    <VehicleListContainer className="container">
      <Vehicle/>
      <Vehicle/>
      <Vehicle/>
      <Vehicle/>
      <Vehicle/>
      <Vehicle/>
      <Vehicle/>
      <Vehicle/>
      <Vehicle/>
    </VehicleListContainer>
  )
}

export default VehicleList
