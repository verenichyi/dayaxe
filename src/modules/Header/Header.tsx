import React from 'react';
import WeatherWidget from '../../components/WeatherWidget';
import LogoLink from '../../components/LogoLink';
import NavMenu from '../../components/NavMenu';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoLink />
        <div className={styles.weather}>
          <WeatherWidget />
        </div>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
