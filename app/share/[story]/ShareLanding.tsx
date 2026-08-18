"use client";

import { useEffect } from "react";

export default function ShareLanding({ anchor, title }: { anchor: string; title: string }) {
  useEffect(() => {
    const destination = `/#${anchor}`;
    const timer = window.setTimeout(() => window.location.replace(destination), 80);
    return () => window.clearTimeout(timer);
  }, [anchor]);

  return (
    <main className="share-landing">
      <p>EASTOKYO</p>
      <h1>{title}</h1>
      <p>Taking you to the story.</p>
      <a href={`/#${anchor}`}>Open story</a>
    </main>
  );
}
