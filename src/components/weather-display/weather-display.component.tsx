import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { setAlert } from '../../store/actions/alertActions';

const WeatherDisplay: FC = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.weather
  );
  const dispatch = useDispatch();
  if (error) dispatch(setAlert(error));

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <div>
            <div>
              City: {data.name} - {data.sys.country}
            </div>
            <div>Temp: {(data.main.temp - 273).toFixed(0)} ºC</div>
            <div>{data.weather[0].description}</div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt=''
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default WeatherDisplay;
