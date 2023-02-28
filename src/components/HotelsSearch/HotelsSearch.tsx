import React, { memo } from 'react';
import styles from './styles.module.scss';
import locationIcon from '../../assets/images/header/location.png';
import pinIcon from '../../assets/images/header/pin.png';

const HotelsSearch = memo(() => {
  return (
    <div className={styles.search}>
      <ul className={styles.search__fields}>
        <li className={`${styles.search__field} ${styles.select}`}>
          <div className={styles.search__location}>
            <div className={styles.select__search}>Los Angeles, CA</div>
            <img src={locationIcon} className={styles.select__icon} alt="location-icon" />
          </div>
        </li>
        <li className={styles.search__field}>
          <div className={styles.search__calendar}>
            <div className={styles.search__calendarButton}>Apr 8 2023</div>
            <img src={pinIcon} className={styles.search__fieldIcon} alt="pin" />
          </div>
        </li>
        <li className={styles.search__field}>
          <div className={styles.search__guests}>
            <div className={styles.search__guestsButton}>2 guests</div>
            <img src={pinIcon} className={styles.search__fieldIcon} alt="pin" />
          </div>
        </li>
      </ul>
      <button className={styles.search__button}>Find</button>
    </div>
  );
});

export default HotelsSearch;
