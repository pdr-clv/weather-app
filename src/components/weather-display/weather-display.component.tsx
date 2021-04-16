import { FC, useState } from 'react';
import Switch from 'react-switch';
import { useSelector, useDispatch } from 'react-redux';

import { LocalTime } from '../../classes/time-format';
import { convertTemperature } from '../../utils';
import { RootState } from '../../store';
import { setAlert } from '../../store/actions/alertActions';

import Map from '../map/map.component';
import SecondaryInfo from '../secondary-info/secondary-info.component';
import Forecast from '../forecast/forecast.component';
import ForecastDaily from '../forecast-daily/forecast-daily.component';

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
    tempTranslated = convertTemperature(temp, 'F');
    tempFeelingTranslated = convertTemperature(tempFeeling, 'F');
    grades = 'ºF';
  } else {
    tempTranslated = convertTemperature(temp, 'C');
    tempFeelingTranslated = convertTemperature(tempFeeling, 'C');
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
    (state: RootState) => state.forecast
  );
  const [farengeit, setFarengeit] = useState(false);
  const dispatch = useDispatch();
  if (error) dispatch(setAlert(error));
  //invoque class LocalTime, and initializing with data.timezone
  let localTimeZone = 0;
  if (data) localTimeZone = data.timezone_offset;
  const localTime = new LocalTime(localTimeZone);
  return (
    <WeatherContainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <Content>
            <div className='item-content item-content--temp'>
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
                <h2>{data.place}</h2>
                <span className='span-time'>
                  Local Time: <span>{localTime.getLocalTime()}</span>
                </span>
                <HeaderInfo>
                  <TemperatureInfo
                    temp={data.current.temp}
                    tempFeeling={data.current.feels_like}
                    farengeit={farengeit}
                  />
                  <ImgWeather>
                    <img
                      src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`}
                      alt=''
                    />
                    <span>{data.current.weather[0].main}</span>
                  </ImgWeather>
                </HeaderInfo>
                <SecondaryInfo {...data} farengeit={farengeit} />
                <Forecast data={data.hourly} localTime={localTime} />
                <ForecastDaily
                  data={data.daily}
                  localTime={localTime}
                ></ForecastDaily>
              </CityInfo>
            </div>
            <div className='item-content item-content--map'>
              <Map lat={data.lat} lon={data.lon} zoom={data.zoom}/>
            </div>
          </Content>
        )
      )}
    </WeatherContainer>
  );
};

export default WeatherDisplay;
