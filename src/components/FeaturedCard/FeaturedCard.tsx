import React, { CSSProperties } from 'react';
import styles from './styles.module.scss';
import icons from '../../assets/icons.svg';
import { IFeaturedCard } from '../../constants/featured-cards';

const FeaturedCard = ({
  type,
  image,
  title,
  passType,
  location,
  ratingPercentage,
  ratingAmount,
  price,
}: IFeaturedCard) => {
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
    <article className={styles.featured__card}>
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
        <span className={styles.featured__cardPrice}>
          <span>{price}</span>/guest
        </span>
      </div>
    </article>
  );
};

export default FeaturedCard;
