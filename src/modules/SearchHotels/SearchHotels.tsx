import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../UI/Container';
import FeaturedCard from '../../components/FeaturedCard';
import styles from './styles.module.scss';
import { useAppSelector } from '../../hooks/redux';
import { selectSearchHotels } from '../../redux/store/selectors';
import { Routes } from '../../enums/routes';

const SearchHotels = () => {
  const { hotelPasses } = useAppSelector(selectSearchHotels);

  const cards = hotelPasses.map((hotelPass) => (
    <li key={hotelPass._id} className={styles.featured__item}>
      <FeaturedCard {...hotelPass} />
    </li>
  ));

  return (
    <section className={styles.featured}>
      <Container>
        <div className={styles.featured__wrapper}>
          {hotelPasses.length ? <ul className={styles.featured__list}>{cards}</ul> : 'No results'}
        </div>
        <NavLink to={Routes.Home} className={styles.featured__back}>
          <span>Go back</span>
        </NavLink>
      </Container>
    </section>
  );
};

export default SearchHotels;
