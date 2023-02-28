import React from 'react';
import Container from '../../UI/Container';
import HotelsSearchForm from '../../components/HotelsSearchForm';
import Header from '../Header';
import styles from './styles.module.scss';
import { SectionTitles } from '../../enums/section-titles';

const PrimarySection = () => {
  return (
    <section className={styles.primarySection}>
      <div className={styles.backgroundContainer}>
        <Header />
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>{SectionTitles.Primary}</h1>
            <HotelsSearchForm />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PrimarySection;
