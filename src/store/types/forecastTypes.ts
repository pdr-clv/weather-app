export const SET_ERROR = 'SET_ERROR';
export const GET_FORECAST = 'GET_FORECAST';
export const SET_LOADING = 'SET_LOADING';

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface currentData {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
}

interface hourlyData {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  pop: number;
}

interface dailyData {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface ForecastData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: currentData;
  daily: dailyData[];
  hourly: hourlyData[];
  place?: string;
}

export interface ForecastError {
  cod: string;
  message: string;
}

export interface ForecastState {
  data: ForecastData | null;
  loading: boolean;
  error: string;
}

interface GetForecastAction {
  type: typeof GET_FORECAST;
  payload: ForecastData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type ForecastAction =
  | GetForecastAction
  | SetLoadingAction
  | SetErrorAction;
