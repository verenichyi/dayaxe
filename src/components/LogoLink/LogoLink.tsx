import React from 'react';

import styles from './styles.module.scss';
import logo from '../../assets/images/header/logo.png';
import { NavLink } from 'react-router-dom';

const LogoLink = () => {
  return (
    <NavLink to="/" className={styles.logo}>
      <img src={logo} alt="logo" />
      <p className={styles.text}>dayaxe</p>
    </NavLink>
  );
};

export default LogoLink;
