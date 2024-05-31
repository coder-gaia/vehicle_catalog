import React, { useContext, useState } from 'react'
import { InputContainer, InputField, InputLabel, LoginContainer, LoginForm, LoginTitle, SubmitButton } from './styles';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {AuthContext} from '../../AuthContext'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username: username,
        password: password
      });

      if (response.status === 200) {
        login()
        setIsLoggedIn(true);
        alert(`${username} logged successffully!`);
        navigate('/')
      } else {
        alert('Incorrect username or password. Please, check your credentials.');
      }
    } catch (error) {
      alert('Incorrect username or password. Please, check your credentials.');
      console.error('Failed to sign in:', error);
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert(`${username} unlogged successffully!`);
  }

  return (
    <LoginContainer>
      {isLoggedIn ? (
        <div>
          <p>Bem-vindo, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
          <button><Link to='/'>Home</Link></button>
        </div>
      ) : (
        <LoginForm onSubmit={handleSubmit}>
          <LoginTitle>Login</LoginTitle>
          <InputContainer>
            <InputLabel htmlFor="username">Username</InputLabel>
            <InputField type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
          </InputContainer>
          <SubmitButton type="submit">Login</SubmitButton>
        </LoginForm>
      )}
    </LoginContainer>
  )
}


export default Login;
