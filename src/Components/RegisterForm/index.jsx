import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../Components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from './RegisterFormSchema';
import { Container } from '../../style/globalStyles';
import { Body, Title2 } from '../../style/typograthy';
import { FormContainer } from '../../style/formContainer';
import Button from '../Button';
import Header from '../Header';
import { RegisterContainer } from './style';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Providers/UserContext';

const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  });

  const submit = async (formData) => {
    await registerUser(formData);
    reset();
  };

  return (
    <RegisterContainer>
      <Container className="container">
        <Header>
          <Link className="navLink" to="/">
            <Body color="--grey-0">Voltar</Body>
          </Link>
        </Header>
        <FormContainer onSubmit={handleSubmit(submit)}>
          <Title2 color="--grey-0">Crie sua conta</Title2>

          <Body color="--grey-1">Rápido e grátis, vamos nessa!</Body>

          <Input
            label={<Body color="--grey-0">Nome</Body>}
            type="text"
            placeholder="Digite seu nome"
            register={register('name')}
            error={errors.name?.message}
          />

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

          <Input
            label={<Body color="--grey-0">Confirme sua senha</Body>}
            type="password"
            placeholder="Confirme sua senha"
            register={register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />

          <Input
            label={<Body color="--grey-0">Bio</Body>}
            type="text"
            placeholder="Fale sobre você"
            register={register('bio')}
            error={errors.bio?.message}
          />

          <Input
            label={<Body color="--grey-0">Contato</Body>}
            type="text"
            placeholder="Opção de contato"
            register={register('contact')}
            error={errors.contact?.message}
          />

          <select {...register('course_module')}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>

          <Button buttonSize="medium" text="Cadastrar" type="submit" />
        </FormContainer>
      </Container>
    </RegisterContainer>
  );
};

export default RegisterForm;
