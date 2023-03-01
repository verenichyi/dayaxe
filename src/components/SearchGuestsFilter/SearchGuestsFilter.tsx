import React from 'react';
import styles from './styles.module.scss';
import pinIcon from '../../assets/images/header/pin.png';
import { mockGuestsValue } from '../../constants/search-form';

const SearchGuestsFilter = () => {
  return (
    <div className={styles.guests}>
      <div>{mockGuestsValue}</div>
      <img src={pinIcon} className={styles.icon} alt="pin" />
    </div>
  );
};

export default SearchGuestsFilter;
