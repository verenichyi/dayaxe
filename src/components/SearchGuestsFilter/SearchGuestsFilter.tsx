import React from 'react';
import styles from './styles.module.scss';
import pinIcon from '../../assets/images/header/pin.png';

const SearchGuestsFilter = () => {
  return (
    <div className={styles.guests}>
      <div>2 guests</div>
      <img src={pinIcon} className={styles.icon} alt="pin" />
    </div>
  );
};

export default SearchGuestsFilter;
