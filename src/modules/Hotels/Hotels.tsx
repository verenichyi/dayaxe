import React, { useEffect } from 'react';
import Container from '../../UI/Container';
import HotelsSlider from '../../components/HotelsSlider';
import styles from './styles.module.scss';
import { getAllHotels } from '../../redux/asyncActions/hotels';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectHotels } from '../../redux/store/selectors';

const Hotels = () => {
  const dispatch = useAppDispatch();
  const { hotels } = useAppSelector(selectHotels);

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  return hotels.length ? (
    <section className={styles.hotels}>
      <Container>
        <HotelsSlider items={hotels} />
      </Container>
    </section>
  ) : null;
};

export default Hotels;
