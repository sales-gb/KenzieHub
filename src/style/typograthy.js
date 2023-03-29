import styled, { css } from 'styled-components';

export const Title1 = styled.h1`
  font-family: 'Inter', sans-serif;

  font-weight: 700;
  font-size: 1.375rem;
  line-height: 28px;

  color: var(${(props) => props.color});
`;

export const Title2 = styled.h2`
  font-family: 'Inter', sans-serif;

  font-weight: 700;
  font-size: 1.25rem;
  line-height: 28px;

  color: var(${(props) => props.color});
`;

export const Title3 = styled.h3`
  font-family: 'Inter', sans-serif;

  font-weight: 700;
  font-size: 1.125rem;
  line-height: 22px;

  color: var(${(props) => props.color});
`;

export const Headline = styled.p`
  font-family: 'Inter', sans-serif;

  font-weight: 400;
  font-size: 1rem;
  line-height: 22px;

  color: var(${(props) => props.color});
`;

export const Body = styled.span`
  font-family: 'Inter', sans-serif;

  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: var(${(props) => props.color});
`;
