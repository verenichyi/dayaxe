import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './app-styles/App.scss';
import { Routes as RoutePaths } from './enums/routes';
import { useAppDispatch } from "./hooks/redux";
import { checkAuth } from "./redux/asyncActions/user";
import AuthLayout from "./layouts/AuthLayout";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Routes>
      <Route path={RoutePaths.Home} element={<AuthLayout />}>
        <Route path={RoutePaths.SignIn} element={<SignIn />} />
        <Route path={RoutePaths.SignUp} element={<SignUp />} />
      </Route>
      <Route path={RoutePaths.Home} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={RoutePaths.Help} element={'<Help />'} />
        <Route path={RoutePaths.HowItWorks} element={'<HowItWorks />'} />
        <Route path={RoutePaths.ForPartners} element={'<ForPartners />'} />
      </Route>
      <Route path={RoutePaths.NotFound} element={<NotFound />} />
    </Routes>
  );
};

export default App;
