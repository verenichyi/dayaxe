import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  items: string[];
}

const HotelsSlider = ({ items }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [partsAmount, setPartsAmount] = useState(1);
  const [elementsPerScreen, setElementsPerScreen] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const hotelsLogosItems = items.map((logo) => (
    <img ref={imgRef} className={styles.slider__item} key={logo} src={logo} alt="hotel" />
  ));

  const setElementsPerScreenAmount = () => {
    const width = window.innerWidth;

    if (width >= 320) {
      setElementsPerScreen(3);
    }

    if (width >= 480) {
      setElementsPerScreen(5);
    }

    if (width >= 768) {
      setElementsPerScreen(8);
    }
  };

  const navigateSlider = (index: number) => {
    setCurrentIndex(index);

    if (carouselRef.current !== null && imgRef.current !== null) {
      carouselRef.current.scrollLeft = index * elementsPerScreen * imgRef.current.width;
    }
  };

  const circles =
    partsAmount === 1
      ? null
      : Array(partsAmount)
          .fill(null)
          .map((value, index) => {
            const className =
              index === currentIndex
                ? `${styles.slider__paginationCircle} ${styles.slider__paginationCircle_active}`
                : styles.slider__paginationCircle;

            return (
              <span onClick={() => navigateSlider(index)} key={index} className={className}></span>
            );
          });

  const onWindowResize = () => {
    setCurrentIndex(0);
    setElementsPerScreenAmount();

    if (carouselRef.current !== null) {
      carouselRef.current.scrollLeft = 0;
    }
  };

  useEffect(() => {
    setElementsPerScreenAmount();
    setPartsAmount(Math.ceil(hotelsLogosItems.length / elementsPerScreen));

    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  useEffect(() => {
    setPartsAmount(Math.ceil(hotelsLogosItems.length / elementsPerScreen));
  }, [elementsPerScreen, hotelsLogosItems]);

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <div ref={carouselRef} className={styles.slider__carousel}>
          {hotelsLogosItems}
        </div>
        <div className={styles.slider__pagination}>{circles}</div>
      </div>
    </div>
  );
};

export default HotelsSlider;
