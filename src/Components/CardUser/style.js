import styled from 'styled-components';

export const UseContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  .container-user-info {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    .techTitle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;

      @media (min-width: 800px) {
        width: 63%;
      }
      @media (min-width: 900px) {
        width: 68%;
      }
      @media (min-width: 1000px) {
        width: 62%;
      }
      @media (min-width: 1200px) {
        width: 55%;
      }

      button {
        padding: 10px;
        background: var(--grey-3);
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 15px;
        }
      }
    }

    .techList {
      display: flex;
      flex-direction: column;
      background: var(--grey-2);
      padding: 1.25rem 0.5rem;
      gap: 1rem;
      border-radius: 8px;
      width: 100%;
      @media (min-width: 800px) {
        width: 63%;
      }
      @media (min-width: 900px) {
        width: 68%;
      }
      @media (min-width: 1000px) {
        width: 62%;
      }
      @media (min-width: 1200px) {
        width: 55%;
      }

      .techCard {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 13px 10px;
        background: var(--grey-4);
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
`;
