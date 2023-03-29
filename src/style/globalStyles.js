import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: var(--grey-4);
}


img{
  max-width: 100%;
}

ul, li{
  list-style: none;
}

button{
  cursor: pointer;
  border: none;
}

a{
  text-decoration: none;
}

:root{
    --color-primary: #FF577F;  
    --color-primary-focus: #FF427F;   

    --color-primary-negative: #59323F;   

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;

    --white-fixed: #fff;
    --black-fixed: #000;
} 
`;

export const Container = styled.div`
  max-width: 95vw;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;

  @media (min-width: 800px) {
    max-width: 85vw;
  }
`;
