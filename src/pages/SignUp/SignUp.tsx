import React from 'react';
import { NavLink } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm';
import styles from './styles.module.scss';
import { Routes } from '../../enums/routes';

const SignUp = () => {
  return (
    <section className={styles.signUpSection}>
      <div className={styles.header}>
        <h1 className={styles.title}>Sign Up</h1>
        <p className={styles.signIn}>
          Do you already have an account?{' '}
          <NavLink to={Routes.SignIn} className={styles.signInLink}>
            Sign In
          </NavLink>
        </p>
      </div>
      <div className={styles.formContainer}>
        <SignUpForm />
      </div>
    </section>
  );
};

export default SignUp;
