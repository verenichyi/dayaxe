import React from 'react';
import styles from './styles.module.scss';
import locationIcon from '../../assets/images/header/location.png';
import { Path, UseFormRegister } from 'react-hook-form';
import { SearchForm } from '../../models/HotelPass/HotelPass';

interface Props {
  name: Path<SearchForm>;
  register: UseFormRegister<SearchForm>;
}

const SearchInput = ({ name, register }: Props) => {
  return (
    <div className={styles.select}>
      <input {...register(name)} className={styles.select__input} placeholder={'City'} />
      <img src={locationIcon} className={styles.select__icon} alt="location-icon" />
    </div>
  );
};

export default SearchInput;
