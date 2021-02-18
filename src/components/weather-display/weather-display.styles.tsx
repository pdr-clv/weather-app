import styled from 'styled-components';

export const WeatherContainer = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;

  .item-content {
    width: 49%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
export const CityInfo = styled.div`
  padding: 25px 0 25px 25px;

  .time {
    font-size: 0.7em;
    margin: 20px;
    font-weight: bold;
  }
`;

export const WeatherInfo = styled.div`
  img {
  }
`;

export const WeatherDescription = styled.div``;
