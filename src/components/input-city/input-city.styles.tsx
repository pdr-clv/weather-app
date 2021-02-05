import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    padding: 15px;
    font-size: 1.4em;
    color: blue;
  }

  form {
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 50%;
    background: rgba(0, 0, 0, 0.2);
    padding: 10px;
    height: 100px;
    justify-content: center;
    align-content: space-between;

    input,
    button {
      margin: auto;
      padding: 5px;
      width: 100%;
    }

    button {
      width: 25%;
      padding: 5px;
      background-color: blue;
      color: white;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      :hover {
        background-color: blueviolet;
      }
    }
  }
`;
