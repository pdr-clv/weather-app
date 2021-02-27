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
    height: '100%',
    zoom: 2,
  });
  /*
  useEffect(() => {
    const latitude = lat ? lat : 3;
    const longitude = lon ? lon : 4;
    setViewPort((viewPort: viewportProps) => ({
      ...viewPort,
      latitude,
      longitude,
    }));
  }, [lat, lon]);*/

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      const mapwidth = '100%';
      let mapheight: string;
      if (window.innerWidth < 960) {
        mapheight = '400px';
      } else {
        mapheight = '100%';
      }
      setViewPort((viewPort: viewportProps) => ({
        ...viewPort,
        width: mapwidth,
        height: mapheight,
      }));
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

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
