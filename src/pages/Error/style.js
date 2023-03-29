import styled from 'styled-components';

export const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 40px 20px;

  gap: 20px;

  .navLink {
    font-family: 'Inter', sans-serif;

    padding: 9px 10px;
    margin-top: 10px;
    text-align: center;
    background: var(--color-primary);
    color: var(--grey-0);
    font-weight: 700;
    max-width: 80%;
    border-radius: 8px;
    @media (min-width: 600px) {
      width: 200px;
    }
  }

  img {
    margin-top: 30px;
  }
`;
