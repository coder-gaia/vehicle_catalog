import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  blue: '#006eff',
  backgroundColor: '#ede9e8',
  black: '#000',
  grey: '#ccc',
  white: '#fff'
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

  body {
    background-color: ${colors.bigBackgroundColor};
    color: ${colors.mainTextColor}
  }

  .container {
    max-width: 1340px;
    width: 100%;
    margin: 0 auto;
  }
`
