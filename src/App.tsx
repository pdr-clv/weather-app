import { FC } from 'react';

import InputCity from './components/input-city/input-city.component';
import WeatherDisplay from './components/weather-display/weather-display.component';
import Modal from './components/modal/modal.component';

import './App.css';

const App: FC = () => {
  return (
    <div className='App'>
      <InputCity />
      <WeatherDisplay />
      <Modal />
    </div>
  );
};

export default App;
