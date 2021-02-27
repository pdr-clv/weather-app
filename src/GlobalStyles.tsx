import styled, { createGlobalStyle } from 'styled-components';

import BackgroundImage from './imgs/background-night-light.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    background: url(${BackgroundImage}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: rgb(206, 195, 193);
  } 

  body {
    font-family: 'Roboto', sans-serif, Helvetica,Arial;
  }

`;

export const ComponentsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
