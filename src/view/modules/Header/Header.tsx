import React from 'react';
import styles from './styles.module.scss';
import WeatherWidget from '../../components/WeatherWidget';
import LogoLink from '../../components/LogoLink';
import NavMenu from '../../components/NavMenu';

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
