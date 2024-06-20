import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles';
import { MainTitle } from '../../styles';
import userIcon from '../../assets/user.svg';
import PropTypes from 'prop-types';

const Header = ({ isAuthenticated, handleLogout }) => {

  return (
    <HeaderContainer>
      <MainTitle>Gaia Motors</MainTitle>

      <div className="nav-links">
        <div className="nav-item">
          <a href="#">Buy Vehicle</a>
        </div>

        <div className="nav-item">
          <Link to="/createVehicle">Create Vehicle</Link>
        </div>

        <div className="nav-item">
          <a href="#contact-address">Address</a>
        </div>

        <div className="login">
          <img src={userIcon} className="user-icon" />
          {isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
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
