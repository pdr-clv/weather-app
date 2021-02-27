import styled from 'styled-components';
import ReactMapGL, { Marker } from 'react-map-gl';

import pin from '../../imgs/pin.png';

export const MapContainer = styled(ReactMapGL)`
  border-radius: 10px;
`;

export const PinImg = styled.img`
  position: absolute;
  width: 20px;
  height: 30px;
  top: -30px;
  left: -10px;
`;

PinImg.defaultProps = {
  src: pin,
};

export const MarkerMap = styled(Marker)``;
