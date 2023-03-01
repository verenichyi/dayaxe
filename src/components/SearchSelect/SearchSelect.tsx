import React from 'react';
import styles from './styles.module.scss';
import locationIcon from '../../assets/images/header/location.png';
import { mockLocationValue } from '../../constants/search-form';

const SearchSelect = () => {
  return (
    <div className={styles.select}>
      <div>{mockLocationValue}</div>
      <img src={locationIcon} className={styles.select__icon} alt="location-icon" />
    </div>
  );
};

export default SearchSelect;
