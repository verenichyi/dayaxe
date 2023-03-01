import React from "react";
import { useLocation } from "react-router-dom";
import WeatherWidget from "../../components/WeatherWidget";
import LogoLink from "../../components/LogoLink";
import NavMenu from "../../components/NavMenu";
import styles from "./styles.module.scss";
import { Routes } from "../../enums/routes";

const Header = () => {
  const { pathname } = useLocation();
  const isPrimaryPage = pathname === Routes.Home;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoLink isPrimaryPage={isPrimaryPage}/>
        <div className={styles.weather}>
          <WeatherWidget isPrimaryPage={isPrimaryPage}/>
        </div>
        <NavMenu isPrimaryPage={isPrimaryPage} />
      </div>
    </header>
  );
};

export default Header;
