import styled from 'styled-components';

export const WeatherContainer = styled.div`
  background-color: orange;
  width: 75%;
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const DataContainer = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

export const WeatherInfo = styled.div`
  img {
    background-color: blue;
    width: 200px;
    height: 200px;
  }
`;

export const WeatherDescription = styled.div`
  margin: -40px;
`;
export const CityInfo = styled.div`
  flex: 1;
  height: 200px;
  background-color: red;
  p {
    font-size: 1.2em;
  }

  .pCity {
    font-size: 1.4em;
    color: blue;
    font-weight: bold;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
`;
