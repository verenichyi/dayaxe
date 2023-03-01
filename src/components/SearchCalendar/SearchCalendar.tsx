import React from 'react';
import styles from './styles.module.scss';
import pinIcon from '../../assets/images/header/pin.png';
import { mockDateValue } from "../../constants/search-form";

const SearchCalendar = () => {
  return (
    <div className={styles.calendar}>
      <div>{mockDateValue}</div>
      <img src={pinIcon} className={styles.icon} alt="pin" />
    </div>
  );
};

export default SearchCalendar;
