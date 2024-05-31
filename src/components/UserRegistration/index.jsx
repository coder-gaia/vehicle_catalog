import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { InputContainer, InputField, InputLabel, SignUpContainer, SignUpForm, SignUpTitle, SubmitButton, UnderText } from "./styles"

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8000/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const data = await response.json();
        setError(data.error || "Failed to sign up.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <SignUpTitle>Sign Up</SignUpTitle>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <InputContainer>
          <InputLabel htmlFor="username">Username</InputLabel>
          <InputField
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="email">Email</InputLabel>
          <InputField
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
