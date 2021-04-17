import { FC } from 'react';

import { LocalTime } from '../../classes/time-format';
import { getSpeed } from '../../utils';

import { SecondaryContainer } from './secondary-info.styles';

import { ForecastData } from '../../store/types/forecastTypes';

interface SecondaryProps extends ForecastData {
  farengeit: boolean;
}

const SecondaryInfo: FC<SecondaryProps> = (props) => {
  const { daily, current, timezone_offset, farengeit } = props;
  //invoque class LocalTime, and initializing with data.timezone
  let localTimeZone = 0;
  if (props) localTimeZone = timezone_offset;
  const localTime = new LocalTime(localTimeZone);
  let windSpeed: string;
  let speedUnits: string;
  windSpeed = getSpeed(current.wind_speed, farengeit);
  speedUnits = farengeit ? 'miles/h' : 'km/h';

  return (
    <SecondaryContainer wind={current.wind_deg}>
      <div className='secondary-item'>
        <div className='wind-item'>
          <h4>
            WIND <p className='direction'>&#8593;&#8593;</p>
          </h4>
          <p>
            {windSpeed} <span>{speedUnits}</span>
          </p>
        </div>
      </div>
      <div className='secondary-item'>
        <h4>HUMIDITY</h4>
        <p>
          {current.humidity}
          <span>%</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>SUNRISE</h4>
        <p className='p-small'>{localTime.getTargetTime(daily[0].sunrise)}</p>
      </div>
      <div className='secondary-item'>
        <h4>CLOUDS</h4>
        <p>
          {current.clouds}
          <span>%</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>PRESSURE</h4>
        <p className='p-small'>
          {current.pressure}
          <span>Pa</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>SUNSET</h4>
        <p className='p-small'>{localTime.getTargetTime(daily[0].sunset)}</p>
      </div>
    </SecondaryContainer>
  );
};

export default SecondaryInfo;
