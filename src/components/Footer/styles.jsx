import styled from 'styled-components';
import { MainTitle, colors } from '../../styles';

export const MainWrapper = styled.div`
  background-color: black;
  padding: 15px 10px;
  margin-top: 40px;
`

export const Wrapper = styled.div`
  margin-top: 64px;
  height:100%;
  display:flex;
  justify-content: space-around;
  padding: 60px;
  margin-top: 40px;
  align-items:center;
  border-bottom: 1px solid ${colors.grey};
  background-color: ${colors.black};

  ${MainTitle}{
    color: ${colors.white};
    margin-top: -10px;
  }
`
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${colors.white};
    margin-bottom: 8px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: ${colors.grey};
    }
  }
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: ${colors.white};
    margin-bottom: 8px;
    text-decoration: none;

    &:hover {
      color: ${colors.grey};
    }
  }
`

export const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  font-size: 24px;

  &:hover {
    color: ${colors.grey};
  }
`

export const Copyright = styled.p`
  color: ${colors.white};
  background-color: ${colors.black};
  text-align: center;
`

export const InfoWrapper = styled.div`
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const InfoLink = styled.div`
  color: ${colors.white};
  display: flex;
  margin-right: 20px;
  margin-bottom: 8px;
  margin-top: 16px;
  font-size: 16px;

  &:hover {
    color: ${colors.grey};
}
`
export const AdditionalInfo = styled.div`
  background-color: ${colors.black};
  display: block;
  margin-top:40px;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:10px;
  margin-bottom:10px;
`
export const Icon = styled.a`
  color: ${colors.white};
  display: flex;
  margin-right: 24px;
  margin-bottom: 8px;
  font-size: 36px;

  &:hover {
  color: ${colors.grey};
  }
`
export const FantasyName = styled.div`
  color: ${colors.white};
  display:flex;
  text-align:center;
  justify-content: center;
  font-size: 16px;
`

export const Address = styled.div`
  color: ${colors.white};
  display:flex;
  text-align:center;
  justify-content: center;
  font-size: 14px;
`
