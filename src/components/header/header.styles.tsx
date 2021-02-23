import styled from 'styled-components';

export const HeaderStyles = styled.header`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 60px;
  margin: auto;
  display: flex;
  align-items: center;

  .header-container {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    @media only screen and (max-width: 450px) {
      width: 98%;
    }
  }
`;
