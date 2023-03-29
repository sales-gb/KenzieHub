import logo from '../../assets/logo.svg';
import React from 'react';
import { HeaderContainer } from './style';
import { Container } from '../../style/globalStyles';

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      <Container>
        <img src={logo} alt="Kenzie Hub" />
        {children}
      </Container>
    </HeaderContainer>
  );
};

export default Header;
