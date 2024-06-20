import React, { useState } from 'react';
import { GlobalStyle } from './styles';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log('User logged out. isAuthenticated:', isAuthenticated); 
  };

  console.log('App rendered. isAuthenticated:', isAuthenticated);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas isAuthenticated={isAuthenticated} handleLogout={handleLogout} setIsAuthenticated={setIsAuthenticated} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
