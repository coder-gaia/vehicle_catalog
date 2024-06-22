import React, { useState } from 'react';
import { InputContainer, InputField, InputLabel, LoginContainer, LoginForm, LoginTitle, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ setIsAuthenticated }) => {
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

        const data = await response.json();
        console.log('Data from API:', data);

        localStorage.setItem('token', data.token);


        if (data.token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnYWlhQWxleGFuZHJlLWlzc3VlciIsInN1YiI6ImFkbWluQGdtYWlsLmNvbSJ9.X5P30sPOfMpRA33YLBh4ZXcs2n2gjwobWrkVg-udrEQ") {
          alert('You are an administrator. You can create vehicles.');

          setIsAuthenticated(true);
          navigate('/');
        } else {
          alert('You do not have permission to create vehicles.');
        }

        alert("Logged in successfully!");
        setIsAuthenticated(true);

        console.log('Login successful. isAuthenticated:', true);
        navigate('/');
      } else {
        alert('The credentials do not match');
      }
    } catch (error) {
      console.error('The credentials do not match', error);
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
  setIsAuthenticated: PropTypes.func.isRequired,
};

export default Login;
