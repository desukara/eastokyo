"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./bullfight-slideshow.module.css";

const slides = Array.from({ length: 12 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    number,
    desktop: `/images/editorial/picasso-bullfight-series-${number}-desktop.png`,
    alt: `Picasso bullfight series, image ${index + 1} of 12`,
  };
});

export default function BullfightSlideshow() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const activeRef = useRef(0);
  const decoded = useRef(new Map<number, Promise<void>>());
  const navigationToken = useRef(0);

  const prepareSlide = useCallback((index: number) => {
    const normalized = (index + slides.length) % slides.length;
    const cached = decoded.current.get(normalized);
    if (cached) return cached;

    const promise = new Promise<void>((resolve) => {
      const image = new Image();
      image.decoding = "async";
      image.src = slides[normalized].desktop;

      const finish = () => resolve();

      if (image.decode) {
        image.decode().then(finish).catch(finish);
      } else if (image.complete) {
        finish();
      } else {
        image.onload = finish;
        image.onerror = finish;
      }
    });

    decoded.current.set(normalized, promise);
    return promise;
  }, []);

  const showSlide = useCallback(
    async (index: number) => {
      const normalized = (index + slides.length) % slides.length;
      if (normalized === activeRef.current) return;

      const token = ++navigationToken.current;
      await prepareSlide(normalized);
      if (token !== navigationToken.current) return;

      activeRef.current = normalized;
      setActive(normalized);

      void prepareSlide(normalized + 1);
      void prepareSlide(normalized - 1);
    },
    [prepareSlide]
  );

  const previous = useCallback(() => {
    void showSlide(activeRef.current - 1);
  }, [showSlide]);

  const next = useCallback(() => {
    void showSlide(activeRef.current + 1);
  }, [showSlide]);

  useEffect(() => {
    slides.forEach((_, index) => {
      void prepareSlide(index);
    });
  }, [prepareSlide]);

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
          <button className={`${styles.arrow} ${styles.arrowLeft}`} type="button" onClick={previous} aria-label="Previous artwork">
            <span aria-hidden="true">←</span>
          </button>

          <div className={styles.artworkFrame}>
            {slides.map((item, index) => (
              <img
                key={item.number}
                className={`${styles.artwork} ${index === active ? styles.artworkVisible : ""}`}
                src={item.desktop}
                alt={index === active ? item.alt : ""}
                aria-hidden={index !== active}
                draggable={false}
                decoding="async"
              />
            ))}
          </div>

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
      </div>
    </section>
  );
}
