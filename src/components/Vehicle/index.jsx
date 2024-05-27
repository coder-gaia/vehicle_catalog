import React from "react";
import renegade from '../../images/Jeep_Renegade.webp'
import { CardContainer, Image, InfoContainer } from "./styles";

const Vehicle = () => {
  return (
    <>
    <CardContainer>

      <Image src={renegade} alt="" />
      <InfoContainer>
        <h3>Jeep - Renegade</h3>
        <p>2020 - 31.150km - Grey</p>
        <h4>Cash Price</h4>
        <h3>82.999</h3>
        <p>City - State</p>
      </InfoContainer>

    </CardContainer>
    </>
  );
};

export default Vehicle
