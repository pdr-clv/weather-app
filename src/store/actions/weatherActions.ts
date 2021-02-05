import {
  SET_ERROR,
  SET_LOADING,
  GET_WEATHER,
  WeatherAction,
  WeatherData,
  WeatherError,
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
