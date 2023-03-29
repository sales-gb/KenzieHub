import React, { useContext } from 'react';
import LoginForm from '../../Components/LoginForm';
import { UserContext } from '../../Providers/UserContext';

const Login = () => {
  const { loginUser } = useContext(UserContext);
  return (
    <>
      <LoginForm loginUser={loginUser} />
    </>
  );
};

export default Login;
