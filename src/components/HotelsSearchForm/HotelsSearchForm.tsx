import React, { useState } from 'react';
import HotelsSearch from '../HotelsSearch';
import styles from './styles.module.scss';
import HotelsPassTypes from '../../constants/hotel-pass-types';

const HotelsSearchForm = () => {
  const [selectedItem, SetSelectedItem] = useState(0);

  const listItems = HotelsPassTypes.map((passType, index) => {
    return (
      <li
        onClick={() => SetSelectedItem(index)}
        key={passType}
        className={`${styles.searchForm__filterItem} ${
          selectedItem === index ? styles.searchForm__filterItem_active : ''
        }`}
      >
        {passType}
      </li>
    );
  });

  return (
    <form action="#" className={styles.searchForm}>
      <div className={styles.searchForm__filter}>
        <ul className={styles.searchForm__filterList}>{listItems}</ul>
      </div>
      <HotelsSearch />
    </form>
  );
};

export default HotelsSearchForm;
