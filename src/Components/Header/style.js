import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 20px 0;
  div {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    @media (min-width: 800px) {
      max-width: 100%;
    }
  }
  @media (min-width: 800px) {
    width: 60%;
  }
  @media (min-width: 1200px) {
    width: 54.5%;
  }
`;
