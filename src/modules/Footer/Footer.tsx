import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../UI/Container';
import FooterServicesItem from '../../components/FooterServicesItem';
import styles from './styles.module.scss';
import {
  contactsLinks,
  copyrightText,
  dayaxeLinks,
  discoverLinks,
  infoLinks,
  othersTitle,
  partnersLinks,
} from '../../constants/footer';

const Footer = () => {
  const infoLinksItems = infoLinks.map((link) => (
    <li key={link.name} className={styles.footer__infoItem}>
      <NavLink to={link.url} className={styles.footer__infoLink}>
        {link.name}
      </NavLink>
    </li>
  ));

  const contactsItemsLinks = contactsLinks.map((link) => (
    <li key={link.url} className={styles.footer__contactsItem}>
      <NavLink to={link.url} target={'_blank'} className={styles.footer__contactsLink}>
        <img className={styles.footer__contactsIcon} src={link.content} alt="contact-icon" />
      </NavLink>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__services}>
          <FooterServicesItem links={dayaxeLinks} title={'Dayaxe'}/>
          <FooterServicesItem links={discoverLinks} title={'Discover'}/>
          <FooterServicesItem links={partnersLinks} title={'Partners'}/>
          <div className={styles.footer__others}>
            <h2 className={styles.footer__othersTitle}>{othersTitle}</h2>
            <div className={styles.footer__othersWrapper}>
              <div className={styles.footer__offer}>
                <form className={styles.footer__offerForm}>
                  <input
                    className={styles.footer__formInput}
                    type="email"
                    name="email"
                    placeholder="Enter email..."
                  />
                  <button className={styles.footer__formButton}>Sign Up</button>
                </form>
                <p className={styles.footer__offerDescription}>
                  <span>+15%</span> off promo
                </p>
              </div>
              <ul className={styles.footer__contacts}>{contactsItemsLinks}</ul>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.footer__inner}>
        <Container>
          <div className={styles.footer__innerWrapper}>
            <p className={styles.footer__copyright}>&copy; {copyrightText}</p>
            <ul className={styles.footer__info}>{infoLinksItems}</ul>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
