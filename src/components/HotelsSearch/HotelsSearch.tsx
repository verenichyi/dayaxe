import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../SearchSelect';
import SearchCalendar from '../SearchCalendar';
import styles from './styles.module.scss';
import MainButton from '../../UI/MainButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SearchForm } from '../../models/HotelPass/HotelPass';
import { Routes } from '../../enums/routes';
import { searchHotelPasses } from '../../redux/asyncActions/search-hotels';
import { useAppDispatch } from '../../hooks/redux';

const HotelsSearch = memo(() => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<SearchForm>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<SearchForm> = (data: SearchForm) => {
    const { location, date } = data;
    dispatch(searchHotelPasses({ location, date }));
    navigate(Routes.SearchHotels, { replace: true });
    reset();
  };

  return (
    <div className={styles.search}>
      <ul className={styles.search__fields}>
        <li className={`${styles.search__field}`}>
          <SearchInput name={'location'} register={register} />
        </li>
        <li className={styles.search__field}>
          <SearchCalendar name={'date'} register={register} />
        </li>
      </ul>
      <div onClick={handleSubmit(onSubmit)} className={styles.search__button}>
        <MainButton padding={'20px 30px'} inverted={false}>
          Find
        </MainButton>
      </div>
    </div>
  );
});

export default HotelsSearch;
