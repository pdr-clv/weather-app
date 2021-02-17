import styled from 'styled-components';

export const FormContainer = styled.form`
  input,
  button {
    padding: 5px;
    border-radius: 5px;
    border: none;
    font-size: 1.3em;
  }

  button {
    margin-left: 10px;
    padding: 3px;
    margin: -75px;
    background-color: blue;
    color: white;
    cursor: pointer;
    :hover {
      background-color: blueviolet;
    }
  }

  input {
    width: 385px;
    color: blue;
  }
`;
