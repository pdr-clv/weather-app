import { FC } from 'react';

import { DailyData } from '../../store/types/forecastTypes';
import { LocalTimeType } from '../../classes/time-format';
import { convertTemperature } from '../../utils';

import { ForecastContainer, ForecastItem } from './forecast-daily.styles';

interface ForecastDailyProps {
  data: DailyData[];
  localTime: LocalTimeType;
  farengeit: boolean;
}

const ForecastDaily: FC<ForecastDailyProps> = (props) => {
  const { data, localTime, farengeit } = props;
  return (
    <ForecastContainer>
      <div className='forecast-container'>
        {[1, 2, 3, 4, 5, 6].map((i) => {
          return (
            <ForecastItem key={i}>
              <div>{localTime.getWeekDay(data[i].dt)}</div>
              <img
                src={`https://openweathermap.org/img/wn/${data[i].weather[0].icon}.png`}
                alt=''
              />
              <div>{(data[i].pop * 100).toFixed(0)}%</div>
              <div>
                {convertTemperature(data[i].temp.max, farengeit)}º/
                {convertTemperature(data[i].temp.min, farengeit)}º
              </div>
            </ForecastItem>
          );
        })}
      </div>
    </ForecastContainer>
  );
};

export default ForecastDaily;
