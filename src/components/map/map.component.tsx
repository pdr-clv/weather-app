import React, { FC, useState, useEffect } from 'react';

import { MapContainer, PinImg, MarkerMap } from './map.styles';

interface viewportProps {
  latitude: number;
  longitude: number;
  width: string;
  height: string;
  zoom: number;
}

interface MapProps {
  lat: number;
  lon: number;
}

const Map: FC<MapProps> = (props) => {
  const { lat, lon } = props;
  const [viewPort, setViewPort] = useState({
    latitude: lat,
    longitude: lon,
    width: '100%',
    height: '50vh',
    zoom: 2,
  });

  useEffect(() => {
    const latitude = lat ? lat : 3;
    const longitude = lon ? lon : 4;
    setViewPort((viewPort: viewportProps) => ({
      ...viewPort,
      latitude,
      longitude,
    }));
  }, [lat, lon]);

  return (
    <MapContainer
      {...viewPort}
      onViewportChange={(nextviewport: viewportProps) =>
        setViewPort(nextviewport)
      }
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle='mapbox://styles/pdrclv/ckl43evxb2cvh17mpiwr9h789'
    >
      <MarkerMap className='marker-container' latitude={lat} longitude={lon}>
        <PinImg />
      </MarkerMap>
    </MapContainer>
  );
};

export default Map;
