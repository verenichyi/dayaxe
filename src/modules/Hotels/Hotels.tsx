import React, { useEffect, useState } from 'react';
import Container from '../../UI/Container';
import HotelsSlider from '../../components/HotelsSlider';
import styles from './styles.module.scss';
import HotelsService from '../../http/services/HotelsService';
import { handleAxiosError } from '../../utils/handleAxiosErrors';
import { Hotel } from '../../models/Hotels/Hotel';

const Hotels = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const { data } = await HotelsService.getAllHotels();
        setHotels(data);
      } catch (error) {
        alert(handleAxiosError(error));
      }
    };

    getHotels();
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
