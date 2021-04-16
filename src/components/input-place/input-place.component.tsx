import { FC, useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getForecast } from '../../store/actions/forecastActions';

import { ViewPortType, ItemType } from '../component-types';
import {
  FormContainer,
  GeocoderReact,
  GeocoderInput,
  GeocoderItem,
} from './input-place.styles';

const InputAddress: FC = (props) => {
  return <GeocoderInput {...props} placeholder='Search city' type='text' />;
};

const ItemAddress: FC = (props) => {
  return (
    <GeocoderItem {...props} className='react-geocoder-item'>
      {props.children}
    </GeocoderItem>
  );
};

const InputPlace: FC = () => {
  const dispatch = useDispatch();
  /*  const [place, setPlace] = useState('');

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (place.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }
    dispatch(setLoading());
    dispatch(getWeather(place));
  };
  /*
  const handlerChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };*/
  const [inputPlace, setInputPlace] = useState('');
  const [loadingGeocoder, setLoadingGeocoder] = useState(true);
  useEffect((): any => {
    let mountedGeocoder = true;
    const geoFindMe = () => {
      if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
        return;
      }
      const success = async (position: any) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        try {
          if (mountedGeocoder) {
            const response = await fetch(
              `http://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/${longitude},${latitude}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
            );
            const jsonResponse = await response.json();
            const place = jsonResponse.features[0].place_name;
            setInputPlace(place);
            dispatch(
              getForecast({ lat: latitude, lon: longitude, place, zoom: 5 })
            );
            setLoadingGeocoder(false);
          }
        } catch (err) {
          if (mountedGeocoder) {
            console.log(err);
            setLoadingGeocoder(false);
          }
        }
      };
      const error = () => {
        console.log('Unable to retrieve your location');
      };
      navigator.geolocation.getCurrentPosition(success, error);
    };
    geoFindMe();

    return () => (mountedGeocoder = false);
    // eslint-disable-next-line
  }, []);
  const handleSelect = (viewport: ViewPortType, item: ItemType) => {
    const { latitude, longitude, zoom } = viewport;
    //sometimes zoom is too small, we set it 3 bydefault is zoom is smaller than 2
    let zoomToState = zoom;
    if (zoom < 3) {
      zoomToState = 3;
    } else if (zoom > 12) {
      zoomToState = 12;
    }
    //setWiewport({ latitude, longitude, zoom });
    //console.log(latitude, ' ', longitude, ' ', zoom);
    //console.log(viewport, item);
    // place it can be very long, we keep only 3 last items of the description separeted by comas
    const place = item.place_name.split(',').slice(-3);
    dispatch(
      getForecast({ lat: latitude, lon: longitude, place, zoom: zoomToState })
    );
  };
  /*
  const [viewport, setWiewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
    initialPlace: '',
  });*/

  return (
    <FormContainer>
      {loadingGeocoder ? (
        <span>...Loading</span>
      ) : (
        <GeocoderReact
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onSelected={handleSelect}
          viewport={{}}
          hideOnSelect={true}
          updateInputOnSelect={true}
          inputComponent={InputAddress}
          itemComponent={ItemAddress}
          initialInputValue={inputPlace}
          reverseGeocode={true}
          onChange={() => console.log('geocoder changes')}
        />
      )}
    </FormContainer>
  );
};

export default InputPlace;
