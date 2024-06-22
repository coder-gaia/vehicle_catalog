import React, { useState } from 'react';
import { CreateButton, CreationContainer, CreationForm, InputContainer, InputField, InputLabel, UnderText } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const VehicleRegistration = () => {
  const navigate = useNavigate();
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

      if (response.ok) {
        const data = await response.json();
        console.log('Vehicle added:', data);
        navigate('/');
      } else {
        alert('Error adding vehicle');
      }
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  if (!token) {
    return <div>You must be logged in to register a vehicle.</div>;
  }

  if (token !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnYWlhQWxleGFuZHJlLWlzc3VlciIsInN1YiI6ImFkbWluQGdtYWlsLmNvbSJ9.X5P30sPOfMpRA33YLBh4ZXcs2n2gjwobWrkVg-udrEQ') {
    return <div>You do not have permission to register a vehicle.</div>;
  }

  return (
    <CreationContainer>
      <CreationForm onSubmit={handleSubmit}>
        <InputContainer>
          <InputLabel htmlFor="brand">Brand</InputLabel>
          <InputField
            type="text"
            id="brand"
            value={vehicle.brand}
            onChange={(e) => setVehicle({ ...vehicle, brand: e.target.value })}
            required
          />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="model">Model</InputLabel>
          <InputField
            type="text"
            id="model"
            value={vehicle.model}
            onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}
            required
          />
        </InputContainer>

        <InputContainer>
          <InputLabel htmlFor="year">Year</InputLabel>
          <InputField
            type="text"
            id="year"
            value={vehicle.year}
            onChange={(e) => setVehicle({ ...vehicle, year: e.target.value })}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="color">Color</InputLabel>
          <InputField
            type="text"
            id="color"
            value={vehicle.color}
            onChange={(e) => setVehicle({ ...vehicle, color: e.target.value })}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="km">Mileage</InputLabel>
          <InputField
            type="text"
            id="km"
            value={vehicle.km}
            onChange={(e) => setVehicle({ ...vehicle, km: e.target.value })}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="location">Location</InputLabel>
          <InputField
            type="text"
            id="location"
            value={vehicle.location}
            onChange={(e) => setVehicle({ ...vehicle, location: e.target.value })}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="price">Price</InputLabel>
          <InputField
            type="text"
            id="price"
            value={vehicle.price}
            onChange={(e) => setVehicle({ ...vehicle, price: e.target.value })}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="image">Image URL</InputLabel>
          <InputField
            type="text"
            id="image"
            value={vehicle.image}
            onChange={(e) => setVehicle({ ...vehicle, image: e.target.value })}
          />
        </InputContainer>
        <CreateButton type="submit">Create Vehicle</CreateButton>
        <UnderText><Link to="/">Home</Link></UnderText>
      </CreationForm>
    </CreationContainer>
  );
};

VehicleRegistration.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default VehicleRegistration;
