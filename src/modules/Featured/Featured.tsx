import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../UI/Container';
import SectionTitle from '../../UI/SectionTitle';
import FeaturedCard from '../../components/FeaturedCard';
import icons from '../../assets/icons.svg';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectHotelPasses } from '../../redux/store/selectors';
import { getAllHotelPasses } from '../../redux/asyncActions/hotel-passes';

const Featured = () => {
  const dispatch = useAppDispatch();
  const { hotelPasses } = useAppSelector(selectHotelPasses);

  useEffect(() => {
    dispatch(getAllHotelPasses());
  }, []);

  const cards = hotelPasses.map((hotelPass) => (
    <li key={hotelPass._id} className={styles.featured__item}>
      <FeaturedCard {...hotelPass} />
    </li>
  ));

  return hotelPasses.length ? (
    <section className={styles.featured}>
      <Container>
        <div className={styles.featured__wrapper}>
          <SectionTitle>
            <span>Featured</span> hotel passes
          </SectionTitle>
          <ul className={styles.featured__list}>{cards}</ul>
          <NavLink to="/all-featured" className={styles.featured__all}>
            <span>All Featured</span>
            <svg>
              <use xlinkHref={`${icons}#featured-arrow`} />
            </svg>
          </NavLink>
        </div>
      </Container>
    </section>
  ) : null;
};

export default Featured;
