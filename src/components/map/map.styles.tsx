import styled from 'styled-components';

import pin from '../../imgs/pin.png';

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
