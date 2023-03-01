import React from 'react';
import styles from './styles.module.scss';
import icons from '../../assets/icons.svg';

interface Props {
  isPrimaryPage: boolean;
}

const WeatherWidget = ({ isPrimaryPage }: Props) => {
  return (
    <article className={`${styles.weather} ${!isPrimaryPage ? styles.secondary : ''}`}>
      <svg className={styles.icon}>
        <use xlinkHref={`${icons}#sunny`} />
      </svg>
      <div>90 &deg;F</div>
      <span className={styles.divider}></span>
      <p>Sunny</p>
    </article>
  );
};

export default WeatherWidget;
