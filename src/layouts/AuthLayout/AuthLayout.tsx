import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { selectAuth } from '../../redux/store/selectors';
import { Routes } from '../../enums/routes';

const AuthLayout = () => {
  const { isAuthorized } = useAppSelector(selectAuth);
  const location = useLocation();

  if (isAuthorized) {
    const origin = location.state?.from?.pathname || Routes.Home;
    return <Navigate to={origin} replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default AuthLayout;
