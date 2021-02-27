import styled from 'styled-components';

export const SecondaryContainer = styled.div<{ wind?: number }>`
  font-family: sans-serif;
  width: 340px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7em;

  .secondary-item {
    width: 70px;
    height: 70px;

    h4 {
      margin: 5px 0;
    }

    p {
      margin-top: 10px;
      font-size: 2.4em;
    }
    .p-small {
      margin-top: 14px;
      font-size: 1.9em;
    }
    span {
      position: absolute;
      font-size: 0.5em;
    }
  }
  .secondary-item .wind-item {
    h4 {
      display: flex;
      .direction {
        margin-left: 5px;
        margin-top: -5px;
        transform: ${(props) =>
          props.wind ? `rotateZ(${props.wind}deg)` : 'rotateZ(0deg)'};
        font-size: 1.4em;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    width: 290px;
    font-size: 0.6em;
    .secondary-item {
      width: 60px;
      height: 60px;
    }
    h4 {
      margin: 3px 0;
    }

    p {
      margin-top: 5px;
      font-size: 2em;
    }
    .p-small {
      margin-top: 7px;
      font-size: 1.4em;
    }
    span {
      position: absolute;
      font-size: 0.4em;
    }
  }
  .secondary-item .wind-item {
    h4 {
      display: flex;
      .direction {
        margin-left: 3px;
        margin-top: -3px;
        transform: ${(props) =>
          props.wind ? `rotateZ(${props.wind}deg)` : 'rotateZ(0deg)'};
        font-size: 1.1em;
      }
    }
  }
`;
