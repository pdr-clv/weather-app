import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LocalTime } from '../../classes/time-format';
import { RootState } from '../../store';
import { setAlert } from '../../store/actions/alertActions';

import {
  WeatherContainer,
  DataContainer,
  WeatherInfo,
  WeatherDescription,
  CityInfo,
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
          <DataContainer>
            <WeatherInfo>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt=''
              />
              <WeatherDescription>
                {data.weather[0].description}
              </WeatherDescription>
            </WeatherInfo>
            <CityInfo>
              <p className='pCity'>
                {data.name} - {data.sys.country}
              </p>
              <p>
                Temp: {(data.main.temp - 273.15).toFixed(0)} ºC /{' '}
                {(((data.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)} ºF
              </p>
              <p>Local Time: {localTime.getLocalTime()}</p>
              <p>
                Sunrise: {localTime.getTargetTime(data.sys.sunrise * 1)} Sunset:
                {localTime.getTargetTime(data.sys.sunset * 1)}
              </p>
              <p>
                Pressure: {data.main.pressure} Humidity: {data.main.humidity}
              </p>
              <p>
                Temp. Feeling:
                {(data.main.feels_like - 273.15).toFixed(0)} ºC /{' '}
                {(((data.main.feels_like - 273.15) * 9) / 5 + 32).toFixed(0)} ºF
              </p>
            </CityInfo>
          </DataContainer>
        )
      )}
    </WeatherContainer>
  );
};

export default WeatherDisplay;
