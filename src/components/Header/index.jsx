import React from 'react'
import { HeaderContainer } from './styles'
import { MainTitle } from '../../styles'
import userIcon from '../../assets/user.svg'

const Header = ()=>{

  return(
    <HeaderContainer>

    <MainTitle>Gaia Motors</MainTitle>

        <div className="nav-links">

          <div className="nav-item">
            <a href="#">Buy Vehicle</a>
          </div>

          <div className="nav-item">
            <a href="#">Sell Vehicle</a>
          </div>

          <div className="nav-item">
            <a href="#contact-address">Address</a>
          </div>

        <div className="login">
          <img src={userIcon} className='user-icon'/>
        <a href="#">Login</a>
        </div>

      </div>

    </HeaderContainer>
  )
}

export default Header
