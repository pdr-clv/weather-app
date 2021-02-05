import { FC, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getWeather, setLoading } from '../../store/actions/weatherActions';
import { setAlert } from '../../store/actions/alertActions';


import { InputContainer } from './input-city.styles';

const InputCity: FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('city', city);
    if (city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }
    dispatch(setLoading());
    dispatch(getWeather(city));
  };

  const handlerChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  return (
    <InputContainer>
      <h2>Find the weather at any City in the world</h2>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <input
          type='text'
          onChange={(e) => handlerChange(e)}
          placeholder='Enter city name'
        />
        <button type='submit'>Search</button>
      </form>
    </InputContainer>
  );
};

export default InputCity;
