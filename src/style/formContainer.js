import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;

  background: var(--grey-3);
  border-radius: 8px;

  select {
    font-family: 'Inter', sans-serif;
    border: 1px solid var(--grey-0);
    background: var(--grey-2);
    color: var(--grey-0);
    width: 90%;
    height: 45px;
    border-radius: 8px;
    padding: 5px 16px;
    margin-top: 20px;
  }

  option {
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: 10px;
    padding: 5px 16px;
  }

  @media (min-width: 1000px) {
    width: 30%;
    gap: 20px;
    padding: 60px 10px;
  }
`;
