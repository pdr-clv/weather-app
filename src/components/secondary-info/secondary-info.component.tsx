import React, { FC } from 'react';

import { LocalTime } from '../../classes/time-format';
import { getCelsius, getKmHour } from '../../utils';

import { SecondaryContainer } from './secondary-info.styles';

import { WeatherData } from '../../store/types';

const SecondaryInfo: FC<WeatherData> = (props) => {
  //invoque class LocalTime, and initializing with data.timezone
  let localTimeZone = 0;
  if (props) localTimeZone = props.timezone * 1;
  const localTime = new LocalTime(localTimeZone);
  return (
    <SecondaryContainer wind={props.wind.deg}>
      <div className='secondary-item'>
        <div className='wind-item'>
          <h4>
            WIND <p className='direction'>&#8593;&#8593;</p>
          </h4>
          <p>
            {getKmHour(props.wind.speed)} <span>km/h</span>
          </p>
        </div>
      </div>
      <div className='secondary-item'>
        <h4>HUMIDITY</h4>
        <p>
          {props.main.humidity}
          <span>%</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>PRESSURE</h4>
        <p className='p-small'>
          {props.main.pressure}
          <span>Pa</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>SUNRISE</h4>
        <p className='p-small'>
          {localTime.getTargetTime(props.sys.sunrise * 1)}
        </p>
      </div>
      <div className='secondary-item'>
        <h4>CLOUDS</h4>
        <p>
          {props.clouds.all}
          <span>%</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>TEMP MAX</h4>
        <p>
          {getCelsius(props.main.temp_max)}
          <span>ºC</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>TEMP MIN</h4>
        <p>
          {getCelsius(props.main.temp_min)}
          <span>ºC</span>
        </p>
      </div>
      <div className='secondary-item'>
        <h4>SUNSET</h4>
        <p className='p-small'>
          {localTime.getTargetTime(props.sys.sunset * 1)}
        </p>
      </div>
    </SecondaryContainer>
  );
};

export default SecondaryInfo;
