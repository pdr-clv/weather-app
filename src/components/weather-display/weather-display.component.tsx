import React, { FC } from 'react';
import Switch from 'react-switch';
import { useSelector, useDispatch } from 'react-redux';

import { LocalTime } from '../../classes/time-format';
import { getCelsius } from '../../utils';
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
} from './weather-display.styles';

const WeatherDisplay: FC = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );

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
              <Switch
                onChange={() => {}}
                checked={false}
                handleDiameter={24}
                height={10}
                width={40}
                uncheckedIcon={false}
                checkedIcon={false}
              />
              <CityInfo>
                <h2>
                  {data.name} - {data.sys.country}
                </h2>
                <span className='span-time'>
                  Local Time: <span>{localTime.getLocalTime()}</span>
                </span>
                <HeaderInfo>
                  <span className='temperatura'>
                    {getCelsius(data.main.temp * 1)}
                  </span>
                  <span className='degrees'>ºC</span>
                  <span className='feeling'>
                    FEELS LIKE {getCelsius(data.main.feels_like * 1)} ºC
                  </span>
                  <ImgWeather>
                    <img
                      src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                      alt=''
                    />
                    <span>{data.weather[0].main}</span>
                  </ImgWeather>
                </HeaderInfo>
                <SecondaryInfo {...data} />
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
