import React, { useState } from "react";
import { CreateButton, CreationContainer, CreationForm, InputContainer, InputField, InputLabel, UnderText } from "./styles";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const CreateVehicle = () => {
    const navigate = useNavigate();
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        const response = await axios.post(
          "http://localhost:8000/admin/vehicles/create/",
          {
            brand: brand,
            model: model,
            year: year,
            color: color
          },
          {
            withCredentials: true
          }
        );

        if (response.status === 201) {
          alert("Vehicle created successfully!");
          navigate("/");
        } else {
          alert("Failed to create vehicle.");
        }
      } catch (error) {
        console.error("Failed to create vehicle:", error);
        alert("Failed to create vehicle.");
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
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="model">Model</InputLabel>
          <InputField
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="year">Year</InputLabel>
          <InputField
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="color">Color</InputLabel>
          <InputField
            type="text"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </InputContainer>
        <CreateButton type="submit">Create Vehicle</CreateButton>
        <UnderText><Link to="/">Home</Link></UnderText>
      </CreationForm>
    </CreationContainer>
  );
};

export default CreateVehicle;
