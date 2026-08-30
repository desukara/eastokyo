'use client';

import { useEffect } from 'react';

const reactionSelector = 'button[aria-label^="Like"],button[aria-label^="Love"],button[aria-label^="Wow"]';
const GA_MEASUREMENT_ID = 'G-KR8C4FRGRB';

export default function EngagementTapFeedback() {
  useEffect(() => {
    // Load the Google tag once. This component is mounted from the root layout,
    // so Analytics is available across the homepage and every article route.
    if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }

    const analyticsWindow = window as typeof window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.gtag = analyticsWindow.gtag || function gtag(...args: unknown[]) {
      analyticsWindow.dataLayer?.push(args);
    };
    analyticsWindow.gtag('js', new Date());
    analyticsWindow.gtag('config', GA_MEASUREMENT_ID);

    const press = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLButtonElement>(reactionSelector);
      if (!target || target.disabled) return;
      target.dataset.eastokyoPressed = 'true';
      window.setTimeout(() => {
        if (target.isConnected) delete target.dataset.eastokyoPressed;
      }, 220);
    };

    document.addEventListener('pointerdown', press, { capture: true, passive: true });
    return () => document.removeEventListener('pointerdown', press, true);
  }, []);

  return null;
}
