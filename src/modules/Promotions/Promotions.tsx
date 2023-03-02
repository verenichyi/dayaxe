import React from 'react';
import PromotionsSlider from '../../components/PromotionsSlider';
import Container from '../../UI/Container';
import SectionTitle from '../../UI/SectionTitle';
import styles from './styles.module.scss';

const Promotions = () => {
  return (
    <section className={styles.promotions}>
      <Container>
        <div className={styles.promotions__wrapper}>
          <div className={styles.promotions__title}>
            <SectionTitle>
              Our <span>promotions</span>
            </SectionTitle>
          </div>
          <PromotionsSlider />
        </div>
      </Container>
    </section>
  );
};

export default Promotions;
