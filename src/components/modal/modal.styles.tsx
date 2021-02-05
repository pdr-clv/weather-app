import styled from 'styled-components';

export const ModalContainer = styled.div<{ message?: string }>`
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  display: ${(props) => (props.message === '' ? 'none' : 'flex')};
`;

export const ModalContent = styled.div<{ message?: string }>`
  width: 400px;
  background-color: white;
  border-radius: 7px;
  transform: ${(props) =>
    props.message === '' ? 'translateY(-200px)' : 'translateY(0)'};
  transition: transform 300ms ease;
  //transition is not working for me with type-script.
`;

export const ModalHeader = styled.div`
  span {
    font-size: 3em;
    font-weight: bold;
    color: rgb(254, 0, 50);
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  color: rgb(254, 0, 50);
  padding: 0 0 25px 0;
`;
