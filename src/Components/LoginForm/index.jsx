import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../Components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from './LoginFormSchema';
import { Container } from '../../style/globalStyles';
import { Title1, Body } from '../../style/typograthy';
import logo from '../../assets/logo.svg';
import { LoginContainer } from './style';
import Button from '../Button';
import { FormContainer } from '../../style/formContainer';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Providers/UserContext';

const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  });

  const submit = (formData) => {
    loginUser(formData);
    reset();
  };

  return (
    <Container>
      <LoginContainer>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <FormContainer onSubmit={handleSubmit(submit)}>
          <Title1 color="--grey-0">Login</Title1>

          <Input
            label={<Body color="--grey-0">Email</Body>}
            type="email"
            placeholder="Digite seu email"
            register={register('email')}
            error={errors.email?.message}
          />

          <Input
            label={<Body color="--grey-0">Senha</Body>}
            type="password"
            placeholder="Digite sua senha"
            register={register('password')}
            error={errors.password?.message}
          />

          <Button
            buttonSize="large"
            disabled={isValid}
            text="Entrar"
            type="submit"
            isValid={isValid}
          />

          <Body color="--grey-1">Ainda não possui conta?</Body>

          <Link className="navLink" to="/register">
            <Body color="--grey-0">Cadastre-se</Body>
          </Link>
        </FormContainer>
      </LoginContainer>
    </Container>
  );
};

export default LoginForm;
