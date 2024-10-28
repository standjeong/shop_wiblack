import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';
import ShapeDivider from './ShapeDivider';

const slides = [
  {
    image: '/images/banner1.png',
    captionText: '심플함을 아는 당신의 선택, WiBlack',
  },
  {
    image: '/images/banner2.png',
    captionText: '오직 블랙&화이트로.',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideContainerRef = useRef(null);

  const totalSlides = slides.length;

  const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToNext = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [isAnimating]);

  useEffect(() => {
    const slideContainer = slideContainerRef.current;

    const handleTransitionEnd = () => {
      setIsAnimating(false);
      if (currentIndex === totalSlides + 1) {
        setCurrentIndex(1);
        slideContainer.style.transition = 'none';
        slideContainer.style.transform = `translateX(-100%)`;
        setTimeout(
          () =>
            (slideContainer.style.transition = 'transform 0.5s ease-in-out'),
          0
        );
      } else if (currentIndex === 0) {
        setCurrentIndex(totalSlides);
        slideContainer.style.transition = 'none';
        slideContainer.style.transform = `translateX(-${totalSlides * 100}%)`;
        setTimeout(
          () =>
            (slideContainer.style.transition = 'transform 0.5s ease-in-out'),
          0
        );
      }
    };

    if (slideContainer) {
      slideContainer.addEventListener('transitionend', handleTransitionEnd);
      return () =>
        slideContainer.removeEventListener(
          'transitionend',
          handleTransitionEnd
        );
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.slideContainer}
        ref={slideContainerRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className={styles.slide}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
            <div className={styles.caption}>
              <h2>{slide.captionText}</h2>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`${styles.button} ${styles.previous}`}
        onClick={goToPrevious}
      ></button>
      <button
        className={`${styles.button} ${styles.next}`}
        onClick={goToNext}
      ></button>
      <ShapeDivider />
    </div>
  );
}
