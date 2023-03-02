import React, { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import WeatherWidget from '../../components/WeatherWidget';
import LogoLink from '../../UI/LogoLink';
import NavMenu from '../../components/NavMenu';
import styles from './styles.module.scss';
import { Routes } from '../../enums/routes';

type HeaderContextType = {
  isPrimaryPage: boolean;
};
export const HeaderContext = createContext<HeaderContextType>({ isPrimaryPage: false });

const Header = () => {
  const { pathname } = useLocation();
  const isPrimaryPage = pathname === Routes.Home;

  return (
    <HeaderContext.Provider value={{ isPrimaryPage }}>
      <header className={styles.header}>
        <div className={styles.container}>
          <LogoLink />
          <div className={styles.weather}>
            <WeatherWidget />
          </div>
          <NavMenu />
        </div>
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
