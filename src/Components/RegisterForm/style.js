import styled from 'styled-components';

export const RegisterContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 0;
  gap: 20px;
  justify-content: center;
  align-items: center;

  .navLink {
    padding: 8px 25px;
    text-align: center;
    background: var(--grey-3);
    border-radius: 8px;
    font-weight: 700;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;
