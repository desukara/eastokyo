'use client';

import { useEffect } from 'react';

export default function MobileViewportGuard() {
  useEffect(() => {
    const query = window.matchMedia('(max-width: 700px)');
    if (!query.matches) return;

    const html = document.documentElement;
    const body = document.body;
    const shell = document.querySelector<HTMLElement>('.asagayaFestivalShell');
    if (!shell) return;

    const previous = {
      htmlOverflowX: html.style.overflowX,
      htmlOverscrollX: html.style.overscrollBehaviorX,
      htmlTouchAction: html.style.touchAction,
      bodyOverflowX: body.style.overflowX,
      bodyOverscrollX: body.style.overscrollBehaviorX,
      bodyTouchAction: body.style.touchAction,
      shellOverflowX: shell.style.overflowX,
      shellMaxWidth: shell.style.maxWidth,
      shellMinWidth: shell.style.minWidth,
      shellWidth: shell.style.width,
      shellTouchAction: shell.style.touchAction,
    };

    const routeBlocks = Array.from(
      shell.querySelectorAll<HTMLElement>(':scope > .mag-page, :scope > main#top')
    );
    const blockPrevious = routeBlocks.map((element) => ({
      element,
      width: element.style.width,
      maxWidth: element.style.maxWidth,
      minWidth: element.style.minWidth,
      marginLeft: element.style.marginLeft,
      marginRight: element.style.marginRight,
    }));

    const touchAction = 'pan-y pinch-zoom';
    html.style.overflowX = 'hidden';
    html.style.overscrollBehaviorX = 'none';
    html.style.touchAction = touchAction;
    body.style.overflowX = 'hidden';
    body.style.overscrollBehaviorX = 'none';
    body.style.touchAction = touchAction;

    const keepXLocked = () => {
      if (window.scrollX !== 0) window.scrollTo(0, window.scrollY);
    };

    const applyViewportGeometry = () => {
      const viewportWidth = Math.round(window.visualViewport?.width ?? window.innerWidth);
      const exactWidth = `${viewportWidth}px`;

      shell.style.overflowX = 'clip';
      shell.style.width = exactWidth;
      shell.style.maxWidth = exactWidth;
      shell.style.minWidth = '0';
      shell.style.touchAction = touchAction;

      routeBlocks.forEach((element) => {
        element.style.width = exactWidth;
        element.style.maxWidth = exactWidth;
        element.style.minWidth = '0';
        element.style.marginLeft = '0';
        element.style.marginRight = '0';
      });

      keepXLocked();
    };

    applyViewportGeometry();
    window.addEventListener('resize', applyViewportGeometry, { passive: true });
    window.visualViewport?.addEventListener('resize', applyViewportGeometry, { passive: true });
    window.addEventListener('scroll', keepXLocked, { passive: true });

    return () => {
      window.removeEventListener('resize', applyViewportGeometry);
      window.visualViewport?.removeEventListener('resize', applyViewportGeometry);
      window.removeEventListener('scroll', keepXLocked);
      html.style.overflowX = previous.htmlOverflowX;
      html.style.overscrollBehaviorX = previous.htmlOverscrollX;
      html.style.touchAction = previous.htmlTouchAction;
      body.style.overflowX = previous.bodyOverflowX;
      body.style.overscrollBehaviorX = previous.bodyOverscrollX;
      body.style.touchAction = previous.bodyTouchAction;
      shell.style.overflowX = previous.shellOverflowX;
      shell.style.maxWidth = previous.shellMaxWidth;
      shell.style.minWidth = previous.shellMinWidth;
      shell.style.width = previous.shellWidth;
      shell.style.touchAction = previous.shellTouchAction;
      blockPrevious.forEach(({ element, width, maxWidth, minWidth, marginLeft, marginRight }) => {
        element.style.width = width;
        element.style.maxWidth = maxWidth;
        element.style.minWidth = minWidth;
        element.style.marginLeft = marginLeft;
        element.style.marginRight = marginRight;
      });
    };
  }, []);

  return null;
}
