"use client";

import { useEffect } from "react";

export default function ShareLanding({
  destination,
  section,
  title,
}: {
  destination: string;
  section?: string;
  title: string;
}) {
  const href = `${destination}${section ? `#${section}` : ""}`;

  useEffect(() => {
    const timer = window.setTimeout(() => window.location.replace(href), 80);
    return () => window.clearTimeout(timer);
  }, [href]);

  return (
    <main className="share-landing">
      <p>EASTOKYO</p>
      <h1>{title}</h1>
      <p>Taking you to the story.</p>
      <a href={href}>Open story</a>
    </main>
  );
}
