import { FC } from 'react';

import GlobalStyle, { ComponentsContainer } from './GlobalStyles';

import WeatherDisplay from './components/weather-display/weather-display.component';
import Modal from './components/modal/modal.component';
import Header from './components/header/header.component';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <ComponentsContainer>
        <Header />
        <WeatherDisplay />
      </ComponentsContainer>
      <Modal />
    </>
  );
};

export default App;
