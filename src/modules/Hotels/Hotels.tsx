import React from 'react';
import Container from '../../UI/Container';
import HotelsSlider from '../../components/HotelsSlider';
import styles from './styles.module.scss';
import { hotelsLogos } from '../../constants/hotels-logos';

const Hotels = () => {

  return (
    <section className={styles.hotels}>
      <Container>
        <HotelsSlider items={hotelsLogos} />
      </Container>
    </section>
  );
};

export default Hotels;
