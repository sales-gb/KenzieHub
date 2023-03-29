import styled from 'styled-components';

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 80px 0;
  gap: 20px;

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .navLink {
    padding: 9px 40px;
    text-align: center;
    background: var(--grey-1);
    border-radius: 8px;
    margin-top: 8px;
    font-weight: 700;
    min-width: 80%;
    @media (min-width: 600px) {
      width: 220px;
    }
    @media (min-width: 800px) {
      min-width: 90%;
    }
  }

  @media (min-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;
