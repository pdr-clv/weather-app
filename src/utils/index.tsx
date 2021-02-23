export const getCelsius = (temperature: number): string =>
  (temperature - 273.15).toFixed(0);

export const getFarengeit = (temperature: number): string =>
  (((temperature - 273.15) * 9) / 5 + 32).toFixed(0);

export const getKmHour = (speed: number): string => (speed * 3.6).toFixed(0);

export const getMilesHour = (speed: number): string => (speed * 2.23694).toFixed(0);