import styled from 'styled-components';

export const ForecastContainer = styled.div`
  //background-color: red;
  color: white;
  .forecast-container {
    margin-top: 10px;
    display: flex;
  }
`;

export const ForecastItem = styled.div`
  width: 65px;
  height: 125px;
  border-left: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //background-color: orange;
  div {
    text-align: center;
    //background-color: blue;
  }

  img {
    text-align: center;
    width: 45px;
    height: 45px;
    //background-color: yellow;
  }
`;
