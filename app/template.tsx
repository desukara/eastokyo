"use client";

import { useEffect } from "react";

const PEN_NAME_PATTERN = /THÉO DELACROIX|THEO DELACROIX/gi;

function cleanCredits(root: ParentNode = document) {
  const footerCredit = document.querySelector<HTMLElement>(".mag-creator-credit");
  if (footerCredit && footerCredit.textContent !== "FOUNDER & EDITOR: JAMES SIMMONS") {
    footerCredit.textContent = "FOUNDER & EDITOR: JAMES SIMMONS";
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let node: Node | null;

  while ((node = walker.nextNode())) {
    if (node instanceof Text && PEN_NAME_PATTERN.test(node.data)) {
      textNodes.push(node);
    }
    PEN_NAME_PATTERN.lastIndex = 0;
  }

  for (const textNode of textNodes) {
    textNode.data = textNode.data.replace(PEN_NAME_PATTERN, "JAMES SIMMONS");
  }
}

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    cleanCredits();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
          if (addedNode instanceof Element || addedNode instanceof DocumentFragment) {
            cleanCredits(addedNode);
          } else if (addedNode instanceof Text && PEN_NAME_PATTERN.test(addedNode.data)) {
            addedNode.data = addedNode.data.replace(PEN_NAME_PATTERN, "JAMES SIMMONS");
          }
          PEN_NAME_PATTERN.lastIndex = 0;
        }
      }

      const footerCredit = document.querySelector<HTMLElement>(".mag-creator-credit");
      if (footerCredit && footerCredit.textContent !== "FOUNDER & EDITOR: JAMES SIMMONS") {
        footerCredit.textContent = "FOUNDER & EDITOR: JAMES SIMMONS";
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return children;
}
