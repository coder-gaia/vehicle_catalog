import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  blue: '#0056b3',
  backgroundColor: '#ede9e8',
  black: '#000',
  grey: '#ccc',
  white: '#fff',
  lightBlue: '#006eff',
  green: '#00e63d',
  red: '#c92f00'
}

export const MainTitle = styled.h1`
  font-family: "Major Mono Display", monospace;
  color: ${colors.black};
  font-size: 42px;
`;

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }


  body {
    background-color: ${colors.backgroundColor};
    color: ${colors.black}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
