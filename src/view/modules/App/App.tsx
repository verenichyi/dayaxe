import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound';
import MainLayout from '../../layouts/MainLayout';
import MainPage from '../../pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};

export default App;
