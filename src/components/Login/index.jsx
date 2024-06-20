import React, { useState } from 'react';
import { InputContainer, InputField, InputLabel, LoginContainer, LoginForm, LoginTitle, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ handleLogout, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        alert("Logged in successfully!");
        setIsAuthenticated(true); 
        console.log('Login successful. isAuthenticated:', true);
        handleLogout();
        navigate('/');
      } else {
        console.error('Erro ao fazer login');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>Login</LoginTitle>
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
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

Login.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Login;
