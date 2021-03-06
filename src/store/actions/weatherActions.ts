import {
  SET_ERROR,
  SET_LOADING,
  GET_WEATHER,
  WeatherAction,
  WeatherData,
  WeatherError,
  WeatherDailyData,
} from '../types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => async (dispatch) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!res.ok) {
      const resData: WeatherError = await res.json();
      throw new Error(resData.message);
    }
    const resData: WeatherData = await res.json();
    try {
      const resDaily = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${resData.coord.lat}&lon=${resData.coord.lon}&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`
      );
      if (!resDaily.ok) {
        const resDailyJson: WeatherError = await resDaily.json();
        throw new Error(resDailyJson.message);
      }
      const resDailyJson: WeatherDailyData = await resDaily.json();
      console.log(resDailyJson);
    } catch (err) {
      console.log(err);
    }
    dispatch({ type: GET_WEATHER, payload: resData });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err.message });
  }
};

export const setLoading = (): WeatherAction => ({ type: SET_LOADING });

export const resetError = (): WeatherAction => ({
  type: SET_ERROR,
  payload: '',
});
