import { FC } from 'react';

import { useDispatch } from 'react-redux';
import { getForecast } from '../../store/actions/forecastActions';

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

  const handleSelect = (viewport: any, item: any) => {
    const { latitude, longitude, zoom } = viewport;
    //sometimes zoom is too small, we set it 3 bydefault is zoom is smaller than 2
    /*if (zoom < 3 || zoom > 9) {
      console.log('zoom pequeño');
      //setWiewport({ latitude, longitude, zoom: 4 });
      return;
    }*/
    //setWiewport({ latitude, longitude, zoom });
    //console.log(latitude, ' ', longitude, ' ', zoom);
    //console.log(viewport, item);
    // place it can be very long, we keep only 3 last items of the description separeted by comas
    const place = item.place_name.split(',').slice(-3);
    dispatch(getForecast({ lat: latitude, lon: longitude, place }));
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
      <GeocoderReact
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onSelected={handleSelect}
        viewport={{}}
        hideOnSelect={true}
        updateInputOnSelect={true}
        inputComponent={InputAddress}
        itemComponent={ItemAddress}
        //initialInputValue={viewport.initialPlace}
        reverseGeocode={true}
        onChange={() => console.log('geocoder changes')}
      />
    </FormContainer>
  );
};

export default InputPlace;
