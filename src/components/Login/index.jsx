import React from 'react';
import { InputContainer, InputField, InputLabel, LoginContainer, LoginForm, LoginTitle, SubmitButton } from './styles';
import { Link } from 'react-router-dom';

const Login = () => {


  return (
    <LoginContainer>
        <div>
          <button>Logout</button>
          <button><Link to='/'>Home</Link></button>
        </div>
        <LoginForm>
          <LoginTitle>Login</LoginTitle>
          <InputContainer>
            <InputLabel htmlFor="username">Username</InputLabel>
            <InputField type="text" id="username" name="username"  />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" id="password" name="password" />
          </InputContainer>
          <SubmitButton type="submit">Login</SubmitButton>
        </LoginForm>
    </LoginContainer>
  );
};

export default Login;
