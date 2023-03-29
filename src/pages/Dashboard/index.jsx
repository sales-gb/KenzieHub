import React, { useContext, useEffect } from 'react';
import CardUser from '../../Components/CardUser';
import Header from '../../Components/Header';
import { Headline, Title1 } from '../../style/typograthy';
import { UserContext } from '../../Providers/UserContext';
import Button from '../../Components/Button';
import { UserContainer } from './style';
import { Container } from '../../style/globalStyles';

const Dashboard = () => {
  const { logoutUser, infoUser, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContainer>
      <Container>
        <Header>
          <Button
            buttonSize="small"
            type="button"
            onClick={logoutUser}
            text="Sair"
          />
        </Header>
      </Container>

      <div className="userInfo">
        {infoUser && infoUser.name && (
          <Title1 color="--grey-0">Olá, {infoUser.name}</Title1>
        )}
        {infoUser && infoUser.course_module && (
          <Headline color="--grey-1">{infoUser.course_module}</Headline>
        )}
      </div>

      <CardUser />
    </UserContainer>
  );
};

export default Dashboard;
