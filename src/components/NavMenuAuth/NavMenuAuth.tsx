import React from 'react';
import styles from './styles.module.scss';

interface Props {
  isPrimaryPage?: boolean;
}

const NavMenuAuth = ({ isPrimaryPage = true }: Props) => {
  return (
    <div className={`${styles.auth} ${!isPrimaryPage ? styles.auth_secondary : ''}`}>
      <button className={styles.auth__loginButton}>Login</button>
      <button className={styles.auth__signupButton}>SignUp</button>
    </div>
  );
};

export default NavMenuAuth;
