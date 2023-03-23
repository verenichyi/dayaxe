import React from 'react';
import styles from './styles.module.scss';
import { Path, UseFormRegister } from 'react-hook-form';
import { SearchForm } from '../../models/HotelPass/HotelPass';

interface Props {
  name: Path<SearchForm>;
  register: UseFormRegister<SearchForm>;
}

const SearchCalendar = ({ name, register }: Props) => {
  return (
    <div className={styles.calendar}>
      <input {...register(name)} className={styles.datePicker} type="date" />
    </div>
  );
};

export default SearchCalendar;
