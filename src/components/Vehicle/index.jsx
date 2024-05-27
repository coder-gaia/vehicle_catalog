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
        <p>Cash Price</p>
        <p>82.999</p>
        <p>City - State</p>
      </InfoContainer>

    </CardContainer>
    </>
  );
};

export default Vehicle
