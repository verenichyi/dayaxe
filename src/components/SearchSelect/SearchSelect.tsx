import React from 'react';
import styles from './styles.module.scss';
import locationIcon from '../../assets/images/header/location.png';

const SearchSelect = () => {
  return (
    <div className={styles.select}>
      <div>Los Angeles, CA</div>
      <img src={locationIcon} className={styles.select__icon} alt="location-icon" />
    </div>
  );
};

export default SearchSelect;
