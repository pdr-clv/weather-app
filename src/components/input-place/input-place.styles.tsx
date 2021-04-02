import styled from 'styled-components';
import Geocoder from 'react-mapbox-gl-geocoder';

export const FormContainer = styled.form`
  position: relative;
  top: -17px;
  left: -10px;
  @media only screen and (max-width: 370px) {
    top: -12px;
  }
`;

export const GeocoderReact = styled(Geocoder)`
  position: absolute;
  z-index: 1000;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

export const GeocoderInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-size: 1.3em;
  width: 385px;
  color: rgb(24, 40, 37);
  @media only screen and (max-width: 370px) {
    font-size: 1em;
  }
  @media only screen and (max-width: 400px) {
    width: 250px;
  }
`;

export const GeocoderItem = styled.p`
  padding: 5px;
  width: 500px;
  color: rgb(24, 27, 40);
  border-bottom: 1px solid rgb(24, 40, 37);
  &:hover {
    background-color: rgba(18, 14, 77, 0.5);
  }
  @media only screen and (max-width: 550px) {
    width: 385px;
  }

  @media only screen and (max-width: 400px) {
    width: 250px;
  }
`;
