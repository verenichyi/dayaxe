import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../modules/Footer';
import PrimarySection from '../../modules/PrimarySection';
import Header from '../../modules/Header';
import styles from './styles.module.scss';
import { Routes } from '../../enums/routes';

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.layout}>
      {pathname === Routes.Home ? <PrimarySection /> : <Header />}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
