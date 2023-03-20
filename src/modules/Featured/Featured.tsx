import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../../UI/Container';
import SectionTitle from '../../UI/SectionTitle';
import FeaturedCard from '../../components/FeaturedCard';
import icons from '../../assets/icons.svg';
import styles from './styles.module.scss';
import { handleAxiosError } from '../../utils/handleAxiosErrors';
import HotelPassesService from '../../http/services/HotelPassesService';
import { HotelPass } from '../../models/HotelPass/HotelPass';

const Featured = () => {
  const [hotelPasses, setHotelPasses] = useState<HotelPass[]>([]);

  useEffect(() => {
    const getHotelPasses = async () => {
      try {
        const { data } = await HotelPassesService.getAllHotelPasses();
        setHotelPasses(data);
      } catch (error) {
        alert(handleAxiosError(error));
      }
    };

    getHotelPasses();
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
