import { FC } from 'react';

import { HourlyData } from '../../store/types/forecastTypes';
import { LocalTimeType } from '../../classes/time-format';
import { convertTemperature } from '../../utils';

import { ForecastContainer, ForecastItem } from './forecast.styles';

interface ForecastProps {
  data: HourlyData[];
  localTime: LocalTimeType;
}

const Forecast: FC<ForecastProps> = (props) => {
  const { data, localTime } = props;
  return (
    <ForecastContainer>
      <div className='forecast-container'>
        {[2, 6, 10, 14, 18, 22].map((i) => {
          return (
            <ForecastItem key={i}>
              <div>{localTime.getForecastTime(data[i].dt)}</div>
              <img
                src={`https://openweathermap.org/img/wn/${data[i].weather[0].icon}.png`}
                alt=''
              />
              <div>{(data[i].pop * 100).toFixed(0)}%</div>
              <div>{convertTemperature(data[i].temp, 'C')}º</div>
            </ForecastItem>
          );
        })}
      </div>
    </ForecastContainer>
  );
};

export default Forecast;
