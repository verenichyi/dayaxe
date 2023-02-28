import React from 'react';
import styles from './styles.module.scss';

const NavMenuAuth = () => {
  return (
    <div className={styles.auth}>
      <button className={styles.auth__loginButton}>Login</button>
      <button className={styles.auth__signupButton}>SignUp</button>
    </div>
  );
};

export default NavMenuAuth;
