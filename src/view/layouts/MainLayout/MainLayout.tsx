import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';

import styles from './styles.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
