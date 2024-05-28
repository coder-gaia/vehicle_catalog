import React from "react"
import { MainTitle } from "../../styles"
import { Wrapper, FooterLinks, SocialLinks, IconLink, Copyright, InfoWrapper, InfoLink, AdditionalInfo, IconWrapper, Icon, MainWrapper, FantasyName, Address } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube, faAppStore, faGooglePlay, faYelp} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {


  return(
    <MainWrapper>
      <Wrapper>
        <MainTitle>Gaia Motors</MainTitle>

        <FooterLinks>

          <a href="#">Buy Vehicle</a>
          <a href="#">Sell Vehicle</a>
          <a href="#">Where to find us</a>

        </FooterLinks>

        <SocialLinks>

          <IconLink href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </IconLink>

          <IconLink href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </IconLink>

          <IconLink href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </IconLink>

      </SocialLinks>

      </Wrapper>

      <AdditionalInfo>

      <Copyright>
        Copyright © 2022 Gaia Motors. All Rights Reserved.
      </Copyright>

      <InfoWrapper>
          <InfoLink href="#">Privacy Policy</InfoLink>
          <InfoLink href="#">Terms and Conditions</InfoLink>
          <InfoLink href="#">Cookie Definitions</InfoLink>
          <InfoLink href="#">Transparency</InfoLink>
      </InfoWrapper>

      <IconWrapper>

      <Icon href="#">
        <FontAwesomeIcon icon={faAppStore} />
      </Icon>

      <Icon href="#">
        <FontAwesomeIcon icon={faGooglePlay} />
      </Icon>

      <Icon href="#">
        <FontAwesomeIcon icon={faYelp} />
      </Icon>

      </IconWrapper>

      <FantasyName>
        <p>GAIA MOTORS TECHNOLOGY AND VEHICLES BUSINESS LTDA.</p>
      </FantasyName>

      <Address id="contact-address">
        <p>Registered with CRN under nº 36.740.390/0001-83, with headquarters at Privet Drive, nº 8, Under the Cupboard, Module 1, Belval Garden, Beverly Hills/California, ZIP 07.421- 010</p>
      </Address>

      </AdditionalInfo>

    </MainWrapper>
  )
}

export default Footer
