import styled, { css } from 'styled-components';

export const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 8px;

  transition: 0.3s;

  ${(props) => {
    switch (props.buttonSize) {
      case `large`:
        return css`
          padding: 0.5625rem 6.875rem;
          margin-top: 10px;
          background: var(--color-primary);
          color: var(--grey-0);
          font-weight: 700;
          min-width: 80%;
          @media (min-width: 600px) {
            width: 200px;
          }
          @media (min-width: 800px) {
            min-width: 90%;
          }
        `;
      case `medium`:
        return css`
          padding: 9px 4.375rem;
          margin-top: 10px;
          background: var(--color-primary);
          color: var(--grey-0);
          font-weight: 700;
          min-width: 90%;
          @media (min-width: 600px) {
            width: 200px;
          }
          @media (min-width: 800px) {
            min-width: 90%;
          }
        `;
      case `small`:
        return css`
          margin-top: 10px;
          padding: 9px 10px;
          background: var(--grey-2);
          color: var(--grey-1);
          font-weight: 700;
        `;
      case `add`:
        return css`
          margin-top: 10px;
          padding: 9px 50px;
          background: var(--color-primary);
          color: var(--grey-0);
          font-weight: 700;
          width: 90%;
        `;

      case `edit`:
        return css`
          margin-top: 10px;
          padding: 9px 28px;
          background: var(--color-primary);
          color: var(--grey-0);
          font-weight: 700;
        `;
      case `remove`:
        return css`
          margin-top: 10px;
          padding: 9px 18px;
          background: var(--grey-1);
          color: var(--grey-0);
          font-weight: 700;
        `;

      default:
        return false;
    }
  }}
`;
