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

  //every item-content is weather and cityinfo and map
  .item-content {
    width: 49%;
    background-color: rgba(0, 0, 0, 0.4);
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

  .temperatura {
    font-size: 3.4em;
  }
  .degrees {
    margin-top: -30px;
    margin-left: 5px;
  }
  .feeling {
    font-size: 0.7em;
    margin-top: 30px;
    margin-left: -15px;
  }
`;

export const ImgWeather = styled.div`
  margin-top: -15px;
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
