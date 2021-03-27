import { FC } from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';

import { useDispatch } from 'react-redux';
import { getWeatherLatLon } from '../../store/actions/locationActions';

import { FormContainer } from './input-place.styles';

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
    console.log(latitude, ' ', longitude, ' ', zoom);
    console.log(viewport, item);
    dispatch(getWeatherLatLon({ lat: latitude, lon: longitude }));
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
      {/*<input
        type='text'
        onChange={(e) => handlerChange(e)}
        placeholder='Enter city name'
      />
      <button type='submit'>Search</button>*/}
      <Geocoder
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onSelected={handleSelect}
        viewport={{}}
        hideOnSelect={true}
        updateInputOnSelect={true}
        className='react-geocoder'
        //inputComponent={InputAddress}
        //itemComponent={ItemAddress}
        //initialInputValue={viewport.initialPlace}
        reverseGeocode={true}
        onChange={() => console.log('geocoder changes')}
      />
    </FormContainer>
  );
};

export default InputPlace;
