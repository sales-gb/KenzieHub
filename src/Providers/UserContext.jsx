import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem('@KenziHub:USERID'));
    const token = JSON.parse(localStorage.getItem('@KenziHub:TOKEN'));

    return user && token;
  };
  const [infoUser, setInfoUser] = useState();

  const getUserInfo = async () => {
    const userId = JSON.parse(localStorage.getItem('@KenziHub:USERID'));
    try {
      const res = await api.get(`/users/${userId}`);
      setInfoUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(isAuthenticated());

  const registerUser = async (formData) => {
    try {
      const res = await api.post('/users', formData);
      navigate('/');

      toast.success('Perfil cadastrado com sucesso!');
      return true;
    } catch (error) {
      toast.error(error.response.data.message);
      return false;
    }
  };

  const loginUser = async (formData) => {
    try {
      const res = await api.post('/sessions', formData);

      toast.success('Bem vindo ao seu perfil!');

      localStorage.clear();
      localStorage.setItem('@KenziHub:TOKEN', JSON.stringify(res.data.token));
      localStorage.setItem(
        '@KenziHub:USERID',
        JSON.stringify(res.data.user.id),
      );

      navigate('/dashboard');
      setAuth(true);
    } catch (error) {
      toast.error('algo de errado não está certo, tente novamente!');
    }
  };

  const logoutUser = () => {
    localStorage.clear();
    toast.success('Logout bem sucedido');
    navigate('/');
    setAuth(false);
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        logoutUser,
        isAuth,
        infoUser,
        getUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
