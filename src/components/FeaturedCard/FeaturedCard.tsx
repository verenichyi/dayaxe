import React, { CSSProperties, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import icons from '../../assets/icons.svg';
import { HotelPass } from '../../models/HotelPass/HotelPass';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectAuth } from '../../redux/store/selectors';
import {
  addHotelPassToFavorites,
  deleteHotelPassFomFavorites,
} from '../../redux/asyncActions/user';

const FeaturedCard = ({
  _id,
  type,
  image,
  title,
  passType,
  location,
  ratingPercentage,
  ratingAmount,
  price,
}: HotelPass) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user) {
      setIsFavorite(user.favoriteHotelPasses.includes(_id));
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setIsFavorite(user.favoriteHotelPasses.includes(_id));
    }
  }, []);

  const handleFavorite = () => {
    if (user) {
      const payload = { userId: user._id, body: { hotelPassId: _id } };

      if (isFavorite) {
        dispatch(deleteHotelPassFomFavorites(payload));
      } else {
        dispatch(addHotelPassToFavorites(payload));
      }
    }
  };

  const generateStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg key={i} className={styles.featured__cardRatingIcon}>
          <use xlinkHref={`${icons}#star`}></use>
        </svg>
      );
    }
    return stars;
  };

  return (
    <article
      className={`${styles.featured__card} ${isFavorite ? styles.featured__card_isFavorite : ''}`}
    >
      <span className={styles.featured__cardCategory} data-type={type}>
        {type}
      </span>
      <div className={styles.featured__cardImage}>
        <img src={image} alt="card" />
      </div>
      <h3 className={styles.featured__cardTitle}>{title}</h3>
      <div className={styles.featured__passLocationInfo}>
        <span className={styles.featured__cardPassType}>{passType}</span>
        <span className={styles.featured__cardLocation}>{location}</span>
      </div>
      <div className={styles.featured__ratingPriceInfo}>
        <div className={styles.featured__cardRating}>
          <div className={styles.featured__cardRatingIcons}>
            {generateStars()}
            <div
              className={styles.featured__cardRatingCover}
              style={{ '--rating': `${ratingPercentage}%` } as CSSProperties}
            ></div>
          </div>
          <span className={styles.featured__cardRatingAmount}>{ratingAmount}</span>
        </div>
        <span className={styles.featured__favorite}>
          <svg onClick={handleFavorite}>
            <use xlinkHref={`${icons}#heart`} />
          </svg>
        </span>
        <span className={styles.featured__cardPrice}>
          <span>{price}$</span>/guest
        </span>
      </div>
    </article>
  );
};

export default FeaturedCard;
