import React from 'react';
import Container from '../../UI/Container';
import SectionTitle from '../../UI/SectionTitle';
import MainButton from '../../UI/MainButton';
import styles from './styles.module.scss';
import { howItWorkCards } from '../../constants/how-it-works-cards';

const HowItWorks = () => {
  const listItems = howItWorkCards.map(({ title, description, buttonText }, index) => (
    <li key={title} className={styles.howItWorks__card} data-order={index + 1}>
      <h3 className={styles.howItWorks__cardTitle}>{title}</h3>
      <p className={styles.howItWorks__cardDescription}>{description}</p>
      <div className={styles.howItWorks__cardButton}>
        <MainButton inverted={index !== 0} padding={'16px 22px'}>
          {buttonText}
        </MainButton>
      </div>
    </li>
  ));

  return (
    <section className={styles.howItWorks}>
      <Container>
        <SectionTitle>
          <span>How</span> it works
        </SectionTitle>
        <ul className={styles.howItWorks__list}>{listItems}</ul>
      </Container>
    </section>
  );
};

export default HowItWorks;
