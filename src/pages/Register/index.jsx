import React, { useContext } from 'react';
import RegisterForm from '../../Components/RegisterForm';
import { UserContext } from '../../Providers/UserContext';

const Register = () => {
  const { registerUser } = useContext(UserContext);
  return (
    <>
      <RegisterForm registerUser={registerUser} />
    </>
  );
};

export default Register;
