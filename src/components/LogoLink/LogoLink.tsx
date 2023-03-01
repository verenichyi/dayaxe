import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import icons from '../../assets/icons.svg';
import { HeaderContext } from '../../modules/Header/Header';

const LogoLink = () => {
  const { isPrimaryPage } = useContext(HeaderContext);

  return (
    <NavLink to="/" className={`${styles.logo} ${!isPrimaryPage ? styles.secondary : ''}`}>
      <svg className={styles.icon}>
        <use xlinkHref={`${icons}#logo`} />
      </svg>
      <p className={styles.text}>dayaxe</p>
    </NavLink>
  );
};

export default LogoLink;
