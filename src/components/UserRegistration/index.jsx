import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  InputContainer,
  InputField,
  InputLabel,
  SignUpContainer,
  SignUpForm,
  SignUpTitle,
  SubmitButton,
  UnderText,
} from './styles';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          roles: ['USER'],
        }),
      });

      if (response.ok) {
        navigate('/login');
      }
    } catch (error) {
      alert('Erro ao criar usuário', error);
    }
  };

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <SignUpTitle>Sign Up</SignUpTitle>
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
        <UnderText>
          Already have an account? <Link to="/login">Login</Link>
        </UnderText>
        <UnderText>
          <Link to="/">Home</Link>
        </UnderText>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default Registration;
