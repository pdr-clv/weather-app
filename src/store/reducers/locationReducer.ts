import {
  GetWeatherLatLonAction,
  WeatherStateLatLon,
  GET_WEATHER_LAT_LON
} from '../types';

const initialState: WeatherStateLatLon = {
  data: null,
  loading: false,
  error: '',
};
const locationReducer = (
  state = initialState,
  action: GetWeatherLatLonAction
): WeatherStateLatLon => {
  switch (action.type) {
    case GET_WEATHER_LAT_LON:
      return { data: action.payload, loading: false, error: '' };
    default:
      return state;
  }
};

export default locationReducer;
