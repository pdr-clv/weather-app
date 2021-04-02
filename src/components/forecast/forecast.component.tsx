import { FC } from 'react';

import { HourlyData } from '../../store/types/forecastTypes';
import { LocalTime } from '../../classes/time-format';
import { getCelsius } from '../../utils';

import { ForecastContainer, ForecastItem } from './forecast.styles';

const Forecast: FC<HourlyData[]> = (props) => {
  const time = new LocalTime();
  return (
    <ForecastContainer>
      <div>Weather per hour</div>
      <div className='forecast-container'>
        {[2, 6, 10, 14, 18, 22].map((i) => {
          return (
            <ForecastItem>
              <div>{time.getPrettyTime(props[i].dt)}</div>
              <img
                src={`https://openweathermap.org/img/wn/${props[i].weather[0].icon}.png`}
                alt=''
              />
              <div>{(props[i].pop * 100).toFixed(0)} %</div>
              <div>{getCelsius(props[i].temp)} ºC</div>
            </ForecastItem>
          );
        })}
      </div>
    </ForecastContainer>
  );
};

export default Forecast;
