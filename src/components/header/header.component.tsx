import { FC } from 'react';

import { HeaderStyles } from './header.styles';

import InputCity from '../input-city/input-city.component';

const Header: FC = () => {
  return (
    <HeaderStyles>
      <div className='header-container'>
        <InputCity />
        <h1>Weather App</h1>
      </div>
    </HeaderStyles>
  );
};

export default Header;
