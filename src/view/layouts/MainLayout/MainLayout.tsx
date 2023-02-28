import React from 'react';
import styles from './styles.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from '../../modules/Footer';
import PrimarySection from '../../modules/PrimarySection';

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
