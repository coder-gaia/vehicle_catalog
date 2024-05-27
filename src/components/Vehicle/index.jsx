import React from "react";
import { CardContainer, Image, InfoContainer } from "./styles"
import PropTypes from 'prop-types'

const Vehicle = (props) => {

  const { brand, model, year, color, price, km, image, location } = props;

  return (
    <>
    <CardContainer>

      <Image src={image}/>

      <InfoContainer>
        <h3>{`${brand} - ${model}`}</h3>
        <p>{`${year} - ${km} - ${color}`}</p>
        <h4>Cash Price</h4>
        <h3>{price}</h3>
        <p>{location}</p>
      </InfoContainer>

    </CardContainer>
    </>
  )
}

Vehicle.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  km: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default Vehicle
