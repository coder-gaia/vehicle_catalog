import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';
import { MainTitle } from '../../styles';
import userIcon from '../../assets/user.svg';
import PropTypes from 'prop-types';

const Header = ({ isAuthenticated, handleLogout }) => {
  const isAdmin = localStorage.getItem('token') === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnYWlhQWxleGFuZHJlLWlzc3VlciIsInN1YiI6ImFkbWluQGdtYWlsLmNvbSJ9.X5P30sPOfMpRA33YLBh4ZXcs2n2gjwobWrkVg-udrEQ';

  return (
    <HeaderContainer>
      <MainTitle>Gaia Motors</MainTitle>

      <div className="nav-links">
        <div className="nav-item">
          <a href="#">Buy Vehicle</a>
        </div>

        {isAdmin && (
          <div className="nav-item">
            <Link to="/createVehicle">Create Vehicle</Link>
          </div>
        )}

        <div className="nav-item">
          <a href="#contact-address">Address</a>
        </div>

        <div className="login">
          <img src={userIcon} className="user-icon" />
          {isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/signup">Login</Link>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
