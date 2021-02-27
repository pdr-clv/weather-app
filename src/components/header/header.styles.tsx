import styled from 'styled-components';

export const HeaderStyles = styled.header`
  padding: 10px;
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

    h1 {
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    @media only screen and (max-width: 1200px) {
      width: 95%;
    }

    @media only screen and (max-width: 450px) {
      width: 98%;
    }
  }
  @media only screen and (max-width: 960px) {
    margin-bottom: 10px;
  }
`;
