import { FC } from 'react';

import InputCity from './components/input-city/input-city.component';
import WeatherDisplay from './components/weather-display/weather-display.component';
import Modal from './components/modal/modal.component';

import './App.css';

const App: FC = () => {
  return (
    <div className='App'>
      <h2 className='app-title'>Find the weather at any City in the world</h2>
      <div className='container'>
        <InputCity />
        <WeatherDisplay />
      </div>
      <Modal />
    </div>
  );
};

export default App;
