import styled from "styled-components"
import { colors } from "../../styles"


export const SearchBarContainer = styled.div`
  background-color: ${colors.blue};
  padding: 20px;
  height:100px;
  display: flex;
  align-items: center;
  margin-bottom: 42px;

  .input-container {
    display: flex;
    align-items: center;
    flex: 1;
  }

  input {
    flex: 1;
    padding: 10px;
    height: 50px;
    border: 1px solid ${colors.blue};

    border-radius: 8px;
    font-size: 16px;
}


  button {
    background-color: ${colors.white};
    color: ${colors.black};
    border: none;
    font-weight:400;
    padding: 10px 20px;
    border-radius: 8px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 16px;

    &:hover{
      font-weight: bold;
    }
}
`
