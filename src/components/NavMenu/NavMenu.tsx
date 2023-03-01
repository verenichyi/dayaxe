import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoLink from '../../UI/LogoLink';
import NavMenuAuth from '../NavMenuAuth';
import styles from './styles.module.scss';
import { HeaderContext } from '../../modules/Header/Header';

const navLinks = [
  { to: 'help', link: 'Help' },
  { to: 'how-it-works', link: 'How it works' },
  { to: 'for-partners', link: 'For partners' },
];

const NavMenu = () => {
  const { isPrimaryPage } = useContext(HeaderContext);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleOnMenuClick = () => {
    document.body.classList.toggle('_lock');
    setIsMenuActive(!isMenuActive);
  };

  const menuList = (
    <ul className={styles.menu__list}>
      {navLinks.map((link) => (
        <li key={link.to}>
          <NavLink
            to={link.to}
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? `${styles.menu__link} ${styles.menu__link_active}` : styles.menu__link
            }
          >
            {link.link}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  const dynamicClassNames = {
    menu: `${styles.menu} ${isMenuActive ? styles.menu_active : ''} ${
      !isPrimaryPage ? styles.menu_secondary : ''
    }`,
    menuButton: `${styles.menu__button} ${isMenuActive ? styles.menu__button_active : ''}`,
    menuBody: `${styles.menu__body} ${isMenuActive ? styles.menu__body_active : ''}`,
  };

  return (
    <div className={dynamicClassNames.menu}>
      <div onClick={handleOnMenuClick} className={dynamicClassNames.menuButton}>
        <span></span>
      </div>
      <nav className={dynamicClassNames.menuBody}>
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
