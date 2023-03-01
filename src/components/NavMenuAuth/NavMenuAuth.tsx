import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { HeaderContext } from '../../modules/Header/Header';

const NavMenuAuth = () => {
  const { isPrimaryPage } = useContext(HeaderContext);

  return (
    <div className={`${styles.auth} ${!isPrimaryPage ? styles.auth_secondary : ''}`}>
      <button className={styles.auth__loginButton}>Login</button>
      <button className={styles.auth__signupButton}>SignUp</button>
    </div>
  );
};

export default NavMenuAuth;
