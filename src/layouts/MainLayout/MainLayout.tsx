import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../modules/Footer';
import PrimarySection from '../../modules/PrimarySection';
import styles from './styles.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <PrimarySection />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
