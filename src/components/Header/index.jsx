import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './styles'
import { MainTitle } from '../../styles'
import userIcon from '../../assets/user.svg'
import {AuthContext} from '../../AuthContext'
const Header = ()=>{

  const {isLoggedIn, logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout();
    alert('Logged out successfully!')
  };

  return(
    <HeaderContainer>

    <MainTitle>Gaia Motors</MainTitle>

        <div className="nav-links">

          <div className="nav-item">
            <a href="#">Buy Vehicle</a>
          </div>

          <div className="nav-item">
            <Link to="creatingVehicle">Create Vehicle</Link>
          </div>

          <div className="nav-item">
            <a href="#contact-address">Address</a>
          </div>

        <div className="login">
          <img src={userIcon} className='user-icon'/>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/signup">Login</Link>
          )}
        </div>

      </div>

    </HeaderContainer>
  )
}

export default Header
