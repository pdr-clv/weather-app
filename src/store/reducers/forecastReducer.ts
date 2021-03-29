import {
  ForecastAction,
  ForecastState,
  GET_FORECAST,
} from '../types/forecastTypes';

const initialState: ForecastState = {
  data: null,
  loading: false,
  error: '',
};
const forecastReducer = (
  state = initialState,
  action: ForecastAction
): ForecastState => {
  switch (action.type) {
    case GET_FORECAST:
      return { data: action.payload, loading: false, error: '' };
    default:
      return state;
  }
};

export default forecastReducer;
