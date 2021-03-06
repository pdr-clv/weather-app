import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import weatherReducer from './reducers/weatherReducer';
import alertReducer from './reducers/alertReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
});

const middlewares = [];

middlewares.push(thunk);
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
