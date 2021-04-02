import { FC } from 'react';

import { HeaderStyles } from './header.styles';

import InputPlace from '../input-place/input-place.component';

const Header: FC = () => {
  return (
    <HeaderStyles>
      <div className='header-container'>
        <InputPlace />
        <h1>Weather App</h1>
      </div>
    </HeaderStyles>
  );
};

export default Header;
