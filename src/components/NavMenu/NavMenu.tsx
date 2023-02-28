import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoLink from '../LogoLink';
import NavMenuAuth from '../NavMenuAuth';
import styles from './styles.module.scss';

const navLinks = [
  { to: 'help', link: 'Help' },
  { to: 'how-it-works', link: 'How it works' },
  { to: 'for-partners', link: 'For partners' },
];

const NavMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleOnMenuClick = () => {
    document.body.classList.toggle('_lock');
    setIsMenuActive(!isMenuActive);
  };

  const menuList = (
    <ul className={styles.menu__list}>
      {navLinks.map((link) => (
        <li key={link.to}>
          <NavLink to={link.to} className={styles.menu__link}>
            {link.link}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`${styles.menu} ${isMenuActive ? styles.menu_active : ''}`}>
      <div
        onClick={handleOnMenuClick}
        className={`${styles.menu__button} ${isMenuActive ? styles.menu__button_active : ''}`}
      >
        <span></span>
      </div>
      <nav className={`${styles.menu__body} ${isMenuActive ? styles.menu__body_active : ''}`}>
        <div className={styles.menu__logo}>
          <LogoLink />
        </div>
        {menuList}
        <div className={styles.menu__auth}>
          <NavMenuAuth />
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;