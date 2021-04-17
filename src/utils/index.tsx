export const convertTemperature = (
  temperature: number,
  farengeit: boolean,
): string => {  
  if (farengeit) {
    const returnValue = ((temperature - 273.15) * 9) / 5 + 32;
    if (returnValue < 0 && returnValue > -1) return '0';
    return returnValue.toFixed(0);
  }
  const returnValue = temperature - 273.15;
  if (returnValue < 0 && returnValue > -1) return '0';
  return returnValue.toFixed(0);
};

export const getSpeed = (speed:number, farengeit:boolean): string => {
  if (farengeit) return (speed * 2.23694).toFixed(0);
  return (speed * 3.6).toFixed(0);
}