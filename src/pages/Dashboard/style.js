import styled from 'styled-components';

export const UserContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  header {
    margin: 0 auto;
  }

  .userInfo {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    border-top: 1px solid var(--grey-2);
    border-bottom: 1px solid var(--grey-2);
    padding: 40px 10px;

    @media (min-width: 800px) {
      padding: 40px 185px;
      flex-direction: row;
      justify-content: space-evenly;
    }
    @media (min-width: 900px) {
      padding: 40px 120px;
    }
  }
`;
