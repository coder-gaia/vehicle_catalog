import styled from 'styled-components'
import {colors} from '../../styles'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const LoginForm = styled.form`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  margin-bottom: 20px;
`

export const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0056b3;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003a78;
  }
`
export const ErrorMessage = styled.p`
  color: ${colors.red};
  text-align: center;
  margin-bottom: 15px;
`
