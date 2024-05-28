import styled from "styled-components"
import {colors} from '../../styles'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${colors.backgroundColor};
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .nav-links {
    display: flex;
    gap: 20px;
}

  .nav-item {
    position: relative;
}

  .nav-item a {
    color: ${colors.black};
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;

    &:hover{
      color: ${colors.blue};
      text-decoration-line: underline;
      text-decoration-style: solid;
      font-weight: bold;
    }
}


  .login {
    display: flex;
    align-items: center;
    font-weight: 400;
    gap: 10px;
    cursor: pointer;
    margin-left: 24px;
    text-decoration: none;
}

  .user-icon {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
`
