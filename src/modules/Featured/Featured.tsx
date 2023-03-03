import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../UI/Container';
import SectionTitle from '../../UI/SectionTitle';
import FeaturedCard from '../../components/FeaturedCard';
import icons from '../../assets/icons.svg';
import styles from './styles.module.scss';
import { featuredCards } from '../../constants/featured-cards';

const Featured = () => {
  const cards = featuredCards.map((card, index) => (
    <li key={index} className={styles.featured__item}>
      <FeaturedCard {...card} />
    </li>
  ));

  return (
    <section className={styles.featured}>
      <Container>
        <div className={styles.featured__wrapper}>
          <SectionTitle>
            <span>Featured</span> hotel passes
          </SectionTitle>
          <ul className={styles.featured__list}>
            {cards}
          </ul>
          <NavLink to="/all-featured" className={styles.featured__all}>
            <span>All Featured</span>
            <svg>
              <use xlinkHref={`${icons}#featured-arrow`} />
            </svg>
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
