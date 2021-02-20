import styled from 'styled-components';

export const SecondaryContainer = styled.div<{ wind?: number }>`
  font-family: sans-serif;
  width: 340px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7em;

  .secondary-item {
    width: 70px;
    height: 70px;
    //border: solid 1px white;

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
`;