import { FC } from 'react';

import GlobalStyle from './GlobalStyles';

import WeatherDisplay from './components/weather-display/weather-display.component';
import Modal from './components/modal/modal.component';
import Header from './components/header/header.component';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <WeatherDisplay />
      <Modal />
    </>
  );
};

export default App;
