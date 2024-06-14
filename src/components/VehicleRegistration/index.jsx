import React, { useState } from "react";
import { CreateButton, CreationContainer, CreationForm, InputContainer, InputField, InputLabel, UnderText } from "./styles";
import { Link, useNavigate } from "react-router-dom";


const VehicleRegistration = () => {

  const navigate = useNavigate()

  const [vehicle, setVehicle] = useState({
    brand: '',
    model: '',
    year: '',
    color: '',
    km: '',
    location: '',
    price: '',
    image: ''
  });

  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8082/api/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(vehicle)
      });
      const data = await response.json();
      if(data){
        navigate("/")
      }
      console.log('Vehicle added:', data);
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  return (
    <CreationContainer>
      <CreationForm onSubmit={handleSubmit}>
        <InputContainer>
          <InputLabel htmlFor="brand">Brand</InputLabel>
          <InputField
            type="text"
            id="brand"
            value={vehicle.brand}
            onChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="model">Model</InputLabel>
          <InputField
            type="text"
            id="model"
            value={vehicle.model}
            onChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="year">Year</InputLabel>
          <InputField
            type="text"
            id="year"
            value={vehicle.year}
            onChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="color">Color</InputLabel>
          <InputField
            type="text"
            id="color"
            value={vehicle.color}
            onChange={handleChange}
            required
          />
          </InputContainer>
          <InputContainer>
          <InputLabel htmlFor="km">Mileage</InputLabel>
          <InputField
            type="text"
            id="km"
            value={vehicle.km}
            onChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="location">Location</InputLabel>
          <InputField
            type="text"
            id="location"
            value={vehicle.location}
            onChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="price">Price</InputLabel>
          <InputField
            type="text"
            id="price"
            value={vehicle.price}
            onChange={handleChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="image">Image URL</InputLabel>
          <InputField
            type="text"
            id="image"
            value={vehicle.image}
            onChange={handleChange}
          />
        </InputContainer>
        <CreateButton type="submit">Create Vehicle</CreateButton>
        <UnderText><Link to="/">Home</Link></UnderText>
      </CreationForm>
    </CreationContainer>
  );
};

export default VehicleRegistration;
