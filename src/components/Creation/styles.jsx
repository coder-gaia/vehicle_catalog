import styled from "styled-components"
import {colors} from '../../styles'

export const CreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${colors.backgroundColor};
`;

export const CreationForm = styled.form`
  background-color: ${colors.white};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const CreationTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: ${colors.black};
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${colors.black};
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.grey};
  border-radius: 4px;
  font-size: 16px;
`;

export const CreateButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${colors.blue};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.lightBlue};
  }
`;

export const UnderText = styled.p`
  margin-top: 8px;
`
