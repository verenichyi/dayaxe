import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { HeaderContext } from '../../modules/Header/Header';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectAuth } from '../../redux/store/selectors';
import { Routes } from '../../enums/routes';
import { userActions } from '../../redux/slices/user';

const NavMenuAuth = () => {
  const { isPrimaryPage } = useContext(HeaderContext);
  const { isAuthorized, user } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userActions.logout());
    navigate(0);
  };

  return (
    <div className={`${styles.auth} ${!isPrimaryPage ? styles.auth_secondary : ''}`}>
      {isAuthorized ? (
        <>
          <span className={styles.auth__username}>{user && user.username}</span>
          <button onClick={handleLogout} className={styles.auth__logoutButton}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to={Routes.SignIn}>
            <button className={styles.auth__loginButton}>Login</button>
          </NavLink>
          <NavLink to={Routes.SignUp}>
            <button className={styles.auth__signupButton}>SignUp</button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default NavMenuAuth;
