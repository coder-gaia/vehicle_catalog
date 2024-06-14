import React from "react"
import { Link } from "react-router-dom"
import { InputContainer, InputField, InputLabel, SignUpContainer, SignUpForm, SignUpTitle, SubmitButton, UnderText } from "./styles"

const Registration = () => {

  

  return (
    <SignUpContainer>
      <SignUpForm>
        <SignUpTitle>Sign Up</SignUpTitle>
        <InputContainer>
          <InputLabel htmlFor="username">Username</InputLabel>
          <InputField
            type="text"
            id="username"
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="email">Email</InputLabel>
          <InputField
            type="email"
            id="email"
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputField
            type="password"
            id="password"
            required
          />
        </InputContainer>
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <UnderText>Already have an account? <Link to="/login">Login</Link></UnderText>
        <UnderText><Link to="/">Home</Link></UnderText>
      </SignUpForm>
    </SignUpContainer>
  );
}

export default Registration
