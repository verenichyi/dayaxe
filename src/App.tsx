import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import './app-styles/App.scss';
import { Routes as RoutePaths } from './enums/routes';

const App = () => {
  return (
    <Routes>
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
