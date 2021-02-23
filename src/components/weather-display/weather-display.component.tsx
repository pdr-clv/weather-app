import React, { FC, useState } from 'react';
import Switch from 'react-switch';
import { useSelector, useDispatch } from 'react-redux';

import { LocalTime } from '../../classes/time-format';
import { getCelsius, getFarengeit } from '../../utils';
import { RootState } from '../../store';
import { setAlert } from '../../store/actions/alertActions';
import Map from '../map/map.component';
import SecondaryInfo from '../secondary-info/secondary-info.component';

import {
  WeatherContainer,
  Content,
  ImgWeather,
  CityInfo,
  HeaderInfo,
  SwitchContainer,
} from './weather-display.styles';

interface TemperatureProps {
  farengeit: boolean;
  temp: number;
  tempFeeling: number;
}

const TemperatureInfo: FC<TemperatureProps> = (props) => {
  const { farengeit, temp, tempFeeling } = props;
  let tempTranslated: string;
  let tempFeelingTranslated: string;
  let grades: string;

  if (farengeit) {
    tempTranslated = getFarengeit(temp);
    tempFeelingTranslated = getFarengeit(tempFeeling);
    grades = 'ºF';
  } else {
    tempTranslated = getCelsius(temp);
    tempFeelingTranslated = getCelsius(tempFeeling);
    grades = 'ºC';
  }
  return (
    <div className='temperature-container'>
      <div className='degrees-container'>
        <span className='temperatura'>{tempTranslated}</span>
        <span>{grades}</span>
      </div>
      <span className='feeling'>
        FEELS LIKE {tempFeelingTranslated} {grades}
      </span>
    </div>
  );
};

const WeatherDisplay: FC = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );
  const [farengeit, setFarengeit] = useState(false);
  const dispatch = useDispatch();
  if (error) dispatch(setAlert(error));
  //invoque class LocalTime, and initializing with data.timezone
  let localTimeZone = 0;
  if (data) localTimeZone = data.timezone * 1;
  const localTime = new LocalTime(localTimeZone);
  return (
    <WeatherContainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <Content>
            <div className='item-content'>
              <SwitchContainer farengeit={farengeit}>
                <span>ºC</span>
                <Switch
                  onChange={() => {
                    setFarengeit(!farengeit);
                  }}
                  checked={farengeit}
                  handleDiameter={24}
                  height={10}
                  width={40}
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
                <span className='farengeit'>ºF</span>
              </SwitchContainer>

              <CityInfo>
                <h2>
                  {data.name} - {data.sys.country}
                </h2>
                <span className='span-time'>
                  Local Time: <span>{localTime.getLocalTime()}</span>
                </span>
                <HeaderInfo>
                  <TemperatureInfo
                    temp={data.main.temp}
                    tempFeeling={data.main.feels_like}
                    farengeit={farengeit}
                  />
                  <ImgWeather>
                    <img
                      src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                      alt=''
                    />
                    <span>{data.weather[0].main}</span>
                  </ImgWeather>
                </HeaderInfo>
                <SecondaryInfo {...data} farengeit={farengeit} />
              </CityInfo>
            </div>
            <div className='item-content'>
              <Map lat={data.coord.lat} lon={data.coord.lon} />
            </div>
          </Content>
        )
      )}
    </WeatherContainer>
  );
};

export default WeatherDisplay;
