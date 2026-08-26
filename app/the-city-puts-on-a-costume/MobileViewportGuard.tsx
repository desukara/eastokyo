'use client';

import { useEffect } from 'react';

export default function MobileViewportGuard() {
  useEffect(() => {
    const query = window.matchMedia('(max-width: 700px)');
    if (!query.matches) return;

    const html = document.documentElement;
    const body = document.body;
    const shell = document.querySelector<HTMLElement>('.asagayaFestivalShell');

    const previous = {
      htmlOverflowX: html.style.overflowX,
      htmlOverscrollX: html.style.overscrollBehaviorX,
      htmlTouchAction: html.style.touchAction,
      bodyOverflowX: body.style.overflowX,
      bodyOverscrollX: body.style.overscrollBehaviorX,
      bodyTouchAction: body.style.touchAction,
      shellOverflowX: shell?.style.overflowX ?? '',
      shellMaxWidth: shell?.style.maxWidth ?? '',
      shellWidth: shell?.style.width ?? '',
      shellTouchAction: shell?.style.touchAction ?? '',
    };

    html.style.overflowX = 'hidden';
    html.style.overscrollBehaviorX = 'none';
    html.style.touchAction = 'pan-y';
    body.style.overflowX = 'hidden';
    body.style.overscrollBehaviorX = 'none';
    body.style.touchAction = 'pan-y';

    if (shell) {
      shell.style.overflowX = 'clip';
      shell.style.width = '100%';
      shell.style.maxWidth = '100%';
      shell.style.touchAction = 'pan-y';
    }

    const keepXLocked = () => {
      if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
    };

    keepXLocked();
    window.addEventListener('scroll', keepXLocked, { passive: true });
    window.addEventListener('resize', keepXLocked, { passive: true });

    return () => {
      window.removeEventListener('scroll', keepXLocked);
      window.removeEventListener('resize', keepXLocked);
      html.style.overflowX = previous.htmlOverflowX;
      html.style.overscrollBehaviorX = previous.htmlOverscrollX;
      html.style.touchAction = previous.htmlTouchAction;
      body.style.overflowX = previous.bodyOverflowX;
      body.style.overscrollBehaviorX = previous.bodyOverscrollX;
      body.style.touchAction = previous.bodyTouchAction;
      if (shell) {
        shell.style.overflowX = previous.shellOverflowX;
        shell.style.maxWidth = previous.shellMaxWidth;
        shell.style.width = previous.shellWidth;
        shell.style.touchAction = previous.shellTouchAction;
      }
    };
  }, []);

  return null;
}
