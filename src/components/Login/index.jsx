import React, { useState } from 'react'
import { InputContainer, InputField, InputLabel, LoginContainer, LoginForm, LoginTitle, SubmitButton } from './styles';
import axios from 'axios'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        setIsLoggedIn(true);
        alert(`${username} logado com sucesso!`);
      } else {
        alert('Erro ao fazer login. Por favor, verifique suas credenciais.');
      }
    } catch (error) {
      alert('Erro ao fazer login. Por favor, tente novamente mais tarde.');
      console.error('Erro ao fazer login:', error);
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert(`Deslogado com sucesso!`);
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

// Login.propTypes = {
//   history: PropTypes.object.isRequired
// };

export default Login;
