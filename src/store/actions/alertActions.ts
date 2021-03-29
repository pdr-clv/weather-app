import { SET_ALERT, AlertAction } from '../types/alertTypes';

export const setAlert = (message: string): AlertAction => ({
  type: SET_ALERT,
  payload: message,
});
