import { AlertAction, SET_ALERT, AlertState } from '../types/alertTypes';

const initialState: AlertState = {
  message: '',
};
const alertReducer = (
  state = initialState,
  action: AlertAction
): AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return { message: action.payload };
    default:
      return state;
  }
};

export default alertReducer;
