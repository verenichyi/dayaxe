import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import PromotionsCard from '../PromotionsCard';
import styles from './styles.module.scss';
import prev from '../../assets/images/promotions/previous.png';
import next from '../../assets/images/promotions/next.png';
import { promotionsCards } from '../../constants/promotions';

const PromotionsSlider = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselItem = useRef<HTMLDivElement>(null);
  const [itemWidthWithGap, setItemWidthWithGap] = useState(0);
  const [isDragStart, setIsDragStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);

  const sliderItems = promotionsCards.map(({ url, image, title, description }) => (
    <div ref={carouselItem} key={url} className={styles.navSlider__item}>
      <PromotionsCard url={url} image={image} title={title} description={description} />
    </div>
  ));

  const dragStart = (event: MouseEvent) => {
    setPrevPageX(event.pageX);
    setIsDragStart(true);
    if (carouselRef.current !== null) {
      setPrevScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const dragging = (event: MouseEvent) => {
    if (!isDragStart) return;
    event.preventDefault();
    setIsDragging(true);
    setPositionDiff(event.pageX - prevPageX);
    if (carouselRef.current !== null) {
      carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
    }
  };

  const dragStop = () => {
    setIsDragStart(false);
    if (!isDragging) return;
    setIsDragging(false);
  };

  const handleLeftClick = () => {
    if (carouselRef.current !== null) {
      carouselRef.current.scrollLeft -= itemWidthWithGap;
    }
  };

  const handleRightClick = () => {
    if (carouselRef.current !== null) {
      carouselRef.current.scrollLeft += itemWidthWithGap;
    }
  };

  useEffect(() => {
    if (carouselItem.current !== null) {
      setItemWidthWithGap(carouselItem.current.clientWidth + 30);
    }

    const onWindowResize = () => {
      if (carouselRef.current !== null) {
        carouselRef.current.scrollLeft = 0;
      }

      if (carouselItem.current !== null) {
        setItemWidthWithGap(carouselItem.current.clientWidth + 30);
      }
    };

    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div className={styles.navSlider}>
      <button
        onClick={handleLeftClick}
        className={`${styles.navSlider__navButton} ${styles.navSlider__prevButton}`}
      >
        <img src={prev} alt="previous" />
      </button>
      <button
        onClick={handleRightClick}
        className={`${styles.navSlider__navButton} ${styles.navSlider__nextButton}`}
      >
        <img src={next} alt="next" />
      </button>
      <div
        ref={carouselRef}
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragStop}
        className={`${styles.navSlider__carousel} ${
          isDragging ? styles.navSlider__carousel_dragging : ''
        }`}
      >
        {sliderItems}
      </div>
    </div>
  );
};

export default PromotionsSlider;
