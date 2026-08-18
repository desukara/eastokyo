"use client";

import { useEffect } from "react";

const SELECTOR = ".story-heart, .story-share, .image-share-button";

function disableEngagement(root: ParentNode = document) {
  root.querySelectorAll<HTMLButtonElement>(SELECTOR).forEach((button) => {
    button.disabled = true;
    button.tabIndex = -1;
    button.setAttribute("aria-disabled", "true");
    button.setAttribute("data-prelaunch-locked", "true");
  });
}

export default function EngagementLockdown() {
  useEffect(() => {
    disableEngagement();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(SELECTOR)) {
            const button = node as HTMLButtonElement;
            button.disabled = true;
            button.tabIndex = -1;
            button.setAttribute("aria-disabled", "true");
            button.setAttribute("data-prelaunch-locked", "true");
          }
          disableEngagement(node);
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
