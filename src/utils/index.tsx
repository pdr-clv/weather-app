export const convertTemperature = (
  temperature: number,
  scale: string
): string => {
  if (scale === 'C') {
    const returnValue = temperature - 273.15;
    if (returnValue < 0 && returnValue > -1) return '0';
    return returnValue.toFixed(0);
  } else {
    const returnValue = ((temperature - 273.15) * 9) / 5 + 32;
    if (returnValue < 0 && returnValue > -1) return '0';
    return returnValue.toFixed(0);
  }
};

export const getKmHour = (speed: number): string => (speed * 3.6).toFixed(0);

export const getMilesHour = (speed: number): string =>
  (speed * 2.23694).toFixed(0);
