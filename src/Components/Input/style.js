import styled from 'styled-components';

export const InputContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  width: 90%;
  gap: 6px;

  input {
    font-family: 'Inter', sans-serif;

    border: 1px solid var(--grey-0);
    background: var(--grey-2);
    color: var(--grey-0);

    width: 100%;
    height: 40px;

    border-radius: 8px;
    padding: 16px;

    &::placeholder {
      color: var(--grey-1);
    }
  }
`;
