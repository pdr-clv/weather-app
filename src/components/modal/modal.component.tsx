import React, { FC } from 'react';

import { RootState } from '../../store';

import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../store/actions/alertActions';
import { resetError } from '../../store/actions/forecastActions';

import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalBody,
} from './modal.styles';

const Modal: FC = () => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.alert.message);
  return (
    <ModalContainer message={message}>
      <ModalContent message={message}>
        <ModalHeader>
          <span
            onClick={() => {
              dispatch(setAlert(''));
              dispatch(resetError());
            }}
          >
            &times;
          </span>
        </ModalHeader>
        <ModalBody>{message}</ModalBody>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
