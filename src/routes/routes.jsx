import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage, DashboardPage, RegisterPage, ErrorPage } from '../pages';
import { TechProvider } from '../Providers/TechContext';
import { UserContext } from '../Providers/UserContext';

const AppRoutes = () => {
  const { isAuth } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {isAuth && <Route path="/dashboard" element={<DashboardPage />} />}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
