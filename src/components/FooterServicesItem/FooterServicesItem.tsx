import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { FooterServicesLinks } from '../../constants/footer';

interface Props {
  links: FooterServicesLinks[];
  title: string;
}

const FooterServicesItem = ({ links, title }: Props) => {
  const linksItems = links.map((link) => (
    <li key={link.name} className={styles.listItem}>
      <NavLink to={link.url} className={styles.listLink}>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <div className={styles.servicesItem}>
      <h2 className={styles.servicesTitle}>{title}</h2>
      <ul className={styles.servicesItemList}>{linksItems}</ul>
    </div>
  );
};

export default FooterServicesItem;
