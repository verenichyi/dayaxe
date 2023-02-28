import React from 'react';
import styles from './styles.module.scss';
import Container from '../../UI/Container';
import Header from '../Header';

const PrimarySection = () => {
  return (
    <section className={styles.primarySection}>
      <div className={styles.backgroundContainer}>
        <Header />
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>Book pool time and amenities at luxury hotels</h1>
            <form action="#" className="header__search-form search-form">
              <div className="search-from__filter">
                <ul className="search-from__filter-list">
                  <li className="search-from__filter-item search-from__filter-item_active">All</li>
                  <li className="search-from__filter-item">Day Pass</li>
                  <li className="search-from__filter-item">Cabana</li>
                  <li className="search-from__filter-item">Spa pass</li>
                  <li className="search-from__filter-item">Fitness pass</li>
                  <li className="search-from__filter-item">Beach Day Pass</li>
                  <li className="search-from__filter-item">Pool and Beach Day Pass</li>
                  <li className="search-from__filter-item">Events</li>
                </ul>
              </div>
              <div className="search-from__search search">
                <ul className="search__fields">
                  <li className="search__field">
                    <div className="search__location select">
                      <div className="select__search">Los Angeles, CA</div>
                      <img
                        src="assets/images/header/location.png"
                        className="select__icon"
                        alt="location-icon"
                      />
                    </div>
                  </li>
                  <li className="search__field">
                    <div className="search__calendar">
                      <div className="search__calendar-button">Apr 8 2023</div>
                      <img
                        src="assets/images/header/pin.png"
                        className="search__field-icon"
                        alt="pin"
                      />
                    </div>
                  </li>
                  <li className="search__field">
                    <div className="search__guests">
                      <div className="search__guests-button">2 guests</div>
                      <img
                        src="assets/images/header/pin.png"
                        className="search__field-icon"
                        alt="pin"
                      />
                    </div>
                  </li>
                </ul>
                <button className="search__button">Find</button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PrimarySection;
