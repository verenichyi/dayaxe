import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { FooterServicesLinks } from '../../constants/footer';

interface Props {
  links: FooterServicesLinks[];
}

const FooterServicesItem = ({ links }: Props) => {
  const linksItems = links.map((link) => (
    <li key={link.name} className={styles.listItem}>
      <NavLink to={link.url} className={styles.listLink}>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.servicesItem}>
      <h2 className={styles.servicesTitle}>Dayaxe</h2>
      <ul className={styles.servicesItemList}>{linksItems}</ul>
    </div>
  );
};

export default FooterServicesItem;
