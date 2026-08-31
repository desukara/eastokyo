import EastokyoHome from "./eastokyo/page";

export default function HomePage() {
  return <>
    <EastokyoHome />
    <style>{`
      #latest .story-cta {
        display: none !important;
      }
    `}</style>
  </>;
}
