import styled from 'styled-components';
import ReactMapGL, { Marker } from 'react-map-gl';

import pin from '../../imgs/pin.png';
//we import this mapbox-gl.css to avoid warnings of styles for the map.
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

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
