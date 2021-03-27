import {
  GET_WEATHER_LAT_LON,
  GetWeatherLatLonAction,
  WeatherForecastData,
} from '../types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';

export const getWeatherLatLon = (
  LatLon:{lat: number, lon: number}
  ): ThunkAction<void, RootState, null, GetWeatherLatLonAction> => async (dispatch) => {
  try {
    const {lat, lon} = LatLon;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!res.ok) {
      //const resData: WeatherError = await res.json();
      //throw new Error(resData.message);
      console.log('error')
    }
    const resData: WeatherForecastData = await res.json();
    dispatch({ type: GET_WEATHER_LAT_LON, payload: resData });
  } catch (err) {
    //dispatch({ type: SET_ERROR, payload: err.message });
    console.log(err);
  }
};