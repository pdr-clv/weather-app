import React, { FC } from 'react';

import { LocalTime } from '../../classes/time-format';
import { getCelsius, getKmHour, getFarengeit, getMilesHour } from '../../utils';

import { SecondaryContainer } from './secondary-info.styles';

import { ForecastData } from '../../store/types/forecastTypes';

interface SecondaryProps extends ForecastData {
  farengeit: boolean;
}

const SecondaryInfo: FC<SecondaryProps> = (props) => {
  //invoque class LocalTime, and initializing with data.timezone
  let localTimeZone = 0;
  if (props) localTimeZone = props.timezone_offset;
  const localTime = new LocalTime(localTimeZone);
  let windSpeed: string;
  let temp_max_translated: string;
  let temp_min_translated: string;
  let speedUnits: string;
  let temp_units: string;
  if (props.farengeit) {
    windSpeed = getMilesHour(props.current.wind_speed);
    temp_max_translated = getFarengeit(props.daily[0].temp.max);
    temp_min_translated = getFarengeit(props.daily[0].temp.min);
    speedUnits = 'miles/h';
    temp_units = 'ºF';
  } else {
    windSpeed = getKmHour(props.current.wind_speed);
    temp_max_translated = getCelsius(props.daily[0].temp.max);
    temp_min_translated = getCelsius(props.daily[0].temp.min);
    speedUnits = 'km/h';
    temp_units = 'ºC';
  }

  return (
    <SecondaryContainer wind={props.current.wind_deg}>
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
          {props.current.humidity}
          <span>%</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>SUNRISE</h4>
        <p className='p-small'>
          {localTime.getTargetTime(props.daily[0].sunrise)}
        </p>
      </div>
      <div className='secondary-item'>
        <h4>CLOUDS</h4>
        <p>
          {props.current.clouds}
          <span>%</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>PRESSURE</h4>
        <p className='p-small'>
          {props.current.pressure}
          <span>Pa</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>SUNSET</h4>
        <p className='p-small'>
          {localTime.getTargetTime(props.daily[0].sunset)}
        </p>
      </div>
    </SecondaryContainer>
  );
};

export default SecondaryInfo;
