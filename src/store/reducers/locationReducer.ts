import { SetLocationAction, LocationState, SET_LOCATION } from '../types';

const initialState: LocationState = {
  latitude: 0,
  longitude: 0,
};
const locationReducer = (
  state = initialState,
  action: SetLocationAction
): LocationState => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    default:
      return state;
  }
};

export default locationReducer;
