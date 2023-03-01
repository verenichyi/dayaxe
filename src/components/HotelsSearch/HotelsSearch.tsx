import React, { memo } from 'react';
import SearchSelect from '../SearchSelect';
import SearchCalendar from '../SearchCalendar';
import SearchGuestsFilter from '../SearchGuestsFilter';
import styles from './styles.module.scss';

const HotelsSearch = memo(() => {
  return (
    <div className={styles.search}>
      <ul className={styles.search__fields}>
        <li className={`${styles.search__field}`}>
          <SearchSelect />
        </li>
        <li className={styles.search__field}>
          <SearchCalendar />
        </li>
        <li className={styles.search__field}>
          <SearchGuestsFilter />
        </li>
      </ul>
      <button className={styles.search__button}>Find</button>
    </div>
  );
});

export default HotelsSearch;
