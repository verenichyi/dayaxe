import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import { IPromotionsCard } from '../../constants/promotions';

const PromotionsCard = ({ url, image, title, description }: IPromotionsCard) => {
  return (
    <NavLink className={styles.link} to={url}>
      <article className={styles.card}>
        <header className={styles.image}>
          <img src={image} alt="card" />
        </header>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </article>
    </NavLink>
  );
};

export default PromotionsCard;
