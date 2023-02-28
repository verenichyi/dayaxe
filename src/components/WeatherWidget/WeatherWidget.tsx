import React from 'react';
import oval from '../../assets/images/header/oval.png';

import styles from './styles.module.scss';

const WeatherWidget = () => {
  return (
    <article className={styles.weather}>
      <img src={oval} alt="weather-icon" />
      <div>90 &deg;F</div>
      <span className={styles.weather__divider}></span>
      <p>Sunny</p>
    </article>
  );
};

export default WeatherWidget;
