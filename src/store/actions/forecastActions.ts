import {
  SET_LOADING,
  SET_ERROR,
  GET_FORECAST,
  ForecastAction,
  ForecastData,
  ForecastError,
} from '../types/forecastTypes';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';

export const getForecast = (LatLon: {
  lat: number;
  lon: number;
}): ThunkAction<void, RootState, null, ForecastAction> => async (dispatch) => {
  try {
    const { lat, lon } = LatLon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`;
    console.log(apiUrl);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!res.ok) {
      const resData: ForecastError = await res.json();
      throw new Error(resData.message);
    }
    const resData: ForecastData = await res.json();
    dispatch({ type: GET_FORECAST, payload: resData });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err.message });
    console.log(err);
  }
};

export const setLoading = (): ForecastAction => ({ type: SET_LOADING });

export const resetError = (): ForecastAction => ({
  type: SET_ERROR,
  payload: '',
});
