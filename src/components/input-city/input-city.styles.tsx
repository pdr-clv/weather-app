import styled from 'styled-components';

export const FormContainer = styled.form`
  input,
  button {
    padding: 5px 80px 5px 5px;
    border-radius: 5px;
    border: none;
    font-size: 1.3em;
  }

  button {
    margin-left: 10px;
    padding: 3px;
    margin: -75px;
    background-color: rgb(1, 111, 185);
    color: white;
    cursor: pointer;
    :hover {
      background-color: rgb(222, 60, 75);
    }
  }

  input {
    width: 385px;
    color: rgb(24, 40, 37);
  }
`;
