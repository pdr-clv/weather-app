import { FC, useState } from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';

import { useDispatch } from 'react-redux';
import { getWeather, setLoading } from '../../store/actions/weatherActions';
import { setAlert } from '../../store/actions/alertActions';

import { FormContainer } from './input-place.styles';

const InputPlace: FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }
    dispatch(setLoading());
    dispatch(getWeather(city));
  };
  /*
  const handlerChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };*/

  const handleSelect = () => {};

  const [viewport, setWiewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
    initialPlace: '',
  });

  return (
    <FormContainer onSubmit={(e) => handlerSubmit(e)}>
      {/*<input
        type='text'
        onChange={(e) => handlerChange(e)}
        placeholder='Enter city name'
      />
      <button type='submit'>Search</button>*/}
      <Geocoder
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onSelected={handleSelect}
        viewport={viewport}
        hideOnSelect={true}
        updateInputOnSelect={true}
        className='react-geocoder'
        //inputComponent={InputAddress}
        //itemComponent={ItemAddress}
        //initialInputValue={viewport.initialPlace}
        reverseGeocode={true}
      />
    </FormContainer>
  );
};

export default InputPlace;
