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
  flex-wrap: wrap;

  //every item-content is weather and cityinfo and map
  .item-content {
    border-radius: 10px;
    width: 49%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 1200px) {
    .item-content--temp {
      width: 39%;
    }

    .item-content--map {
      width: 59%;
    }
  }

  @media only screen and (max-width: 960px) {
    .item-content--temp {
      width: 100%;
      margin-bottom: 10px;
    }

    .item-content--map {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 95%;
  }

  @media only screen and (max-width: 450px) {
    width: 98%;
  }
`;

export const SwitchContainer = styled.div<{ farengeit: boolean }>`
  padding: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  span {
    margin: 0 5px;
    font-weight: ${({ farengeit }) => (!farengeit ? 'bold' : 'unset')};
    color: ${({ farengeit }) => (!farengeit ? 'rgb(135, 245, 251)' : 'unset')};
  }

  .farengeit {
    font-weight: ${({ farengeit }) => (farengeit ? 'bold' : 'unset')};
    color: ${({ farengeit }) => (farengeit ? 'rgb(135, 245, 251)' : 'unset')};
  }
`;
export const CityInfo = styled.div`
  padding: 25px 0 25px 25px;

  .span-time {
    font-size: 0.8em;
    margin: 20px;
    span {
      font-weight: bold;
      color: rgb(135, 245, 251);
    }
  }
`;

export const HeaderInfo = styled.div`
  margin: 12px 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  .temperature-container {
    display: flex;
    .degrees-container {
      display: flex;
      .temperatura {
        font-size: 3.4em;
      }
    }

    .feeling {
      font-size: 0.7em;
      margin: 35px -10px;
    }
  }
`;

export const ImgWeather = styled.div`
  margin: 0 20px;
  position: relative;
  padding: 0 12px;
  img {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    width: 75px;
    height: 75px;
    border: solid 1px white;
  }
  span {
    text-align: center;
    font-size: 0.8em;
    position: absolute;
    left: 0;
    top: 73%;
    right: 0;
    bottom: 9%;
  }
`;
