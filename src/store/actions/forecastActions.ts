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
  zoom: number;
  lat: number;
  lon: number;
  place: string[];
}): ThunkAction<void, RootState, null, ForecastAction> => async (dispatch) => {
  try {
    const { lat, lon, place, zoom } = LatLon;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${process.env.REACT_APP_API_KEY}`
    );
    if (!res.ok) {
      const resData: ForecastError = await res.json();
      throw new Error(resData.message);
    }
    const placeString = place.toString();
    const resData: ForecastData = await res.json();
    const resDataWithPlace: ForecastData = {
      ...resData,
      place: placeString,
      zoom,
    };
    dispatch({ type: GET_FORECAST, payload: resDataWithPlace });
  } catch (err) {
    dispatch({ type: SET_ERROR, payload: err.message });
  }
};

export const setLoading = (): ForecastAction => ({ type: SET_LOADING });

export const resetError = (): ForecastAction => ({
  type: SET_ERROR,
  payload: '',
});
