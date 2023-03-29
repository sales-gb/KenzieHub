import React from 'react';
import { Link } from 'react-router-dom';
import { Title1 } from '../../style/typograthy';
import { ErrorPage } from './style';
import errorImage from '../../assets/404-image.svg';

const Error = () => {
  return (
    <ErrorPage>
      <Title1 color="--grey-0">Ops... Não encontramos essa página :(</Title1>

      <Link className="navLink" to="/">
        Voltar
      </Link>

      <img src={errorImage} alt="" />
    </ErrorPage>
  );
};

export default Error;
