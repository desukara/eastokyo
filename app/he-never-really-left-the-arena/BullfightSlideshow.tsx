"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./bullfight-slideshow.module.css";

const slides = Array.from({ length: 12 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    number,
    desktop: `/images/editorial/picasso-bullfight-series-${number}-desktop.png`,
    mobile: `/images/editorial/picasso-bullfight-series-${number}-mobile.png`,
    alt: `Picasso bullfight series, image ${index + 1} of 12`,
  };
});

export default function BullfightSlideshow() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((nextIndex: number) => {
    setActive((nextIndex + slides.length) % slides.length);
  }, []);

  const previous = useCallback(() => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
  }, []);

  useEffect(() => {
    const candidates = [
      slides[(active + 1) % slides.length],
      slides[(active - 1 + slides.length) % slides.length],
    ];

    candidates.forEach((slide) => {
      const desktop = new Image();
      desktop.src = slide.desktop;
      const mobile = new Image();
      mobile.src = slide.mobile;
    });
  }, [active]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance > 0) previous();
    else next();
  };

  const slide = slides[active];

  return (
    <section className={styles.gallery} aria-label="Picasso bullfight series">
      <div className={styles.headingRow}>
        <p className={styles.eyebrow}>THE BULLRING, AGAIN AND AGAIN</p>
        <p className={styles.hint}>ARROWS · KEYS · SWIPE</p>
      </div>

      <div
        className={styles.viewer}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={styles.stage}>
          <picture key={slide.number} className={styles.picture}>
            <source media="(max-width: 700px)" srcSet={slide.mobile} />
            <img className={styles.artwork} src={slide.desktop} alt={slide.alt} draggable={false} />
          </picture>

          <button className={`${styles.arrow} ${styles.arrowLeft}`} type="button" onClick={previous} aria-label="Previous artwork">
            <span aria-hidden="true">←</span>
          </button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} type="button" onClick={next} aria-label="Next artwork">
            <span aria-hidden="true">→</span>
          </button>

          <div className={styles.mobileControls}>
            <button type="button" onClick={previous} aria-label="Previous artwork">← PREVIOUS</button>
            <span className={styles.mobileCount} aria-live="polite">{slide.number} / {slides.length}</span>
            <button type="button" onClick={next} aria-label="Next artwork">NEXT →</button>
          </div>
        </div>

        <div className={styles.captionRow}>
          <span>PICASSO · BULLFIGHT SERIES</span>
          <span className={styles.counter} aria-live="polite">{slide.number} / {slides.length}</span>
        </div>

        <div className={styles.progress} aria-label={`Artwork ${active + 1} of ${slides.length}`}>
          {slides.map((item, index) => (
            <button
              key={item.number}
              type="button"
              className={index === active ? styles.progressActive : undefined}
              onClick={() => goTo(index)}
              aria-label={`Show artwork ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
