import React, { useContext } from "react";
import styles from './styles.module.scss';
import icons from '../../assets/icons.svg';
import { HeaderContext } from "../../modules/Header/Header";

const WeatherWidget = () => {
  const { isPrimaryPage } = useContext(HeaderContext);

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
