import React from 'react';
import styles from './styles.module.scss';
import pinIcon from '../../assets/images/header/pin.png';

const SearchCalendar = () => {
  return (
    <div className={styles.calendar}>
      <div>Apr 8 2023</div>
      <img src={pinIcon} className={styles.icon} alt="pin" />
    </div>
  );
};

export default SearchCalendar;
