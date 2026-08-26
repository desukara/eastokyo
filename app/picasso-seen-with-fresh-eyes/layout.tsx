import { SiteFooter, SiteHeader } from "../eastokyo/SiteChrome";

export default function StoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <>
    <SiteHeader />
    <style>{`
      @media (min-width: 1081px) {
        main#top > section[aria-labelledby="story-title"] {
          position: relative !important;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-end !important;
          width: 100% !important;
          min-height: clamp(580px, 74vh, 780px) !important;
          margin: clamp(.8rem, 1.2vw, 1.2rem) 0 0 !important;
          padding: clamp(3rem, 5vw, 5.5rem) max(3rem, calc((100vw - 1240px) / 2)) !important;
          overflow: hidden !important;
          isolation: isolate;
          background: #173d70 !important;
          color: #fff !important;
        }

        main#top > section[aria-labelledby="story-title"]::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(10,29,55,.03) 0%, rgba(10,29,55,.03) 42%, rgba(18,54,102,.32) 58%, rgba(18,54,102,.70) 74%, rgba(18,54,102,.90) 100%);
        }

        main#top > section[aria-labelledby="story-title"] > div:first-child {
          position: absolute !important;
          inset: 0 !important;
          z-index: 0 !important;
          width: 100% !important;
          height: 100% !important;
          min-height: 0 !important;
          max-height: none !important;
          aspect-ratio: auto !important;
          overflow: hidden !important;
          background: #10233e !important;
          box-shadow: none !important;
        }

        main#top > section[aria-labelledby="story-title"] > div:first-child picture,
        main#top > section[aria-labelledby="story-title"] > div:first-child img {
          position: absolute !important;
          inset: 0 !important;
          display: block !important;
          width: 100% !important;
          height: 100% !important;
        }

        main#top > section[aria-labelledby="story-title"] > div:first-child img {
          object-fit: cover !important;
          object-position: 28% 60% !important;
          transform: none !important;
        }

        main#top > section[aria-labelledby="story-title"] > div:first-child > span {
          display: none !important;
        }

        main#top > section[aria-labelledby="story-title"] > div:first-child > div {
          top: clamp(1.5rem, 2.4vw, 2.4rem) !important;
          left: max(3rem, calc((100vw - 1240px) / 2)) !important;
          right: auto !important;
          text-align: left !important;
          z-index: 3 !important;
          text-shadow: 0 1px 10px rgba(0,0,0,.28);
        }

        main#top > section[aria-labelledby="story-title"] > div:nth-child(2) {
          position: relative !important;
          z-index: 2 !important;
          width: min(47%, 620px) !important;
          min-width: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          align-self: auto !important;
        }

        main#top > section[aria-labelledby="story-title"] #story-title {
          max-width: 7.4ch !important;
          color: #fff !important;
          font-size: clamp(4.7rem, 6.25vw, 7.35rem) !important;
          line-height: .78 !important;
          letter-spacing: -.055em !important;
          text-shadow: 0 2px 24px rgba(5,18,38,.22);
        }

        main#top > section[aria-labelledby="story-title"] #story-title em {
          color: #f3efe6 !important;
        }
      }
    `}</style>
    {children}
    <SiteFooter />
  </>;
}
