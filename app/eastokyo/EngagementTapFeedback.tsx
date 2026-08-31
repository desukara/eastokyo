'use client';

import { useEffect } from 'react';

const reactionSelector = 'button[aria-label^="Like"],button[aria-label^="Love"],button[aria-label^="Wow"]';
const newsletterSelector = 'form.mag-newsletter-form';
const newsletterEndpoint = 'https://formspree.io/f/xqpkeeov';
const facebookUrl = 'https://www.facebook.com/Eastokyo/';
const instagramUrl = 'https://www.instagram.com/eastokyo.magazine/';
const pinterestUrl = 'https://jp.pinterest.com/eastokyo/';

const facebookMark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%231876F2'/%3E%3Cpath d='M27.2 16.2h3.4v-5.1c-.6-.1-2.6-.3-5-.3-4.9 0-8.2 3-8.2 8.5V24h-5.5v5.7h5.5V44c1.1.2 2.2.3 3.4.3 1.2 0 2.4-.1 3.5-.3V29.7h5.1l.8-5.7h-5.9v-4.1c0-1.7.5-3.7 2.9-3.7z' fill='white'/%3E%3C/svg%3E")`;
const instagramMark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cdefs%3E%3CradialGradient id='g' cx='25%25' cy='100%25' r='120%25'%3E%3Cstop offset='0' stop-color='%23FFD600'/%3E%3Cstop offset='.38' stop-color='%23FF7A00'/%3E%3Cstop offset='.68' stop-color='%23FF0169'/%3E%3Cstop offset='1' stop-color='%23D300C5'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='24' cy='24' r='22' fill='url(%23g)'/%3E%3Crect x='14.2' y='14.2' width='19.6' height='19.6' rx='6.4' fill='none' stroke='white' stroke-width='2.6'/%3E%3Ccircle cx='24' cy='24' r='4.8' fill='none' stroke='white' stroke-width='2.6'/%3E%3Ccircle cx='30.2' cy='17.8' r='1.45' fill='white'/%3E%3C/svg%3E")`;
const tiktokMark = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjIiIGZpbGw9IiMwOTA5MDkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCA4KSBzY2FsZSgxLjE3KSI+PHBhdGggZD0iTTEyLjUyNS4wMmMxLjMxLS4wMiAyLjYxLS4wMSAzLjkxLS4wMi4wOCAxLjUzLjYzIDMuMDkgMS43NSA0LjE3IDEuMTIgMS4xMSAyLjcgMS42MiA0LjI0IDEuNzl2NC4wM2MtMS40NC0uMDUtMi44OS0uMzUtNC4yLS45Ny0uNTctLjI2LTEuMS0uNTktMS42Mi0uOTMtLjAxIDIuOTIuMDEgNS44NC0uMDIgOC43NS0uMDggMS40LS41NCAyLjc5LTEuMzUgMy45NC0xLjMxIDEuOTItMy41OCAzLjE3LTUuOTEgMy4yMS0xLjQzLjA4LTIuODYtLjMxLTQuMDgtMS4wMy0yLjAyLTEuMTktMy40NC0zLjM3LTMuNjUtNS43Mi0uMDMtLjUtLjA0LTEtLjAxLTEuNDkuMTgtMS45IDEuMTItMy43MiAyLjU4LTQuOTYgMS42Ni0xLjQ0IDMuOTgtMi4xMyA2LjE1LTEuNzIuMDIgMS40OC0uMDQgMi45Ni0uMDQgNC40NC0uOTktLjMyLTIuMTUtLjIzLTMuMDIuMzctLjYzLjQxLTEuMTEgMS4wNC0xLjM2IDEuNzUtLjIxLjUxLS4xNSAxLjA3LS4xNCAxLjYxLjI0IDEuNjQgMS44MiAzLjAyIDMuNSAyLjg3IDEuMTItLjAxIDIuMTktLjY2IDIuNzctMS42MS4xOS0uMzMuNC0uNjcuNDEtMS4wNi4xLTEuNzkuMDYtMy41Ny4wNy01LjM2LjAxLTQuMDMtLjAxLTguMDUuMDItMTIuMDd6IiBmaWxsPSIjMjVGNEVFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtLjg1IC40NSkiLz48cGF0aCBkPSJNMTIuNTI1LjAyYzEuMzEtLjAyIDIuNjEtLjAxIDMuOTEtLjAyLjA4IDEuNTMuNjMgMy4wOSAxLjc1IDQuMTcgMS4xMiAxLjExIDIuNyAxLjYyIDQuMjQgMS43OXY0LjAzYy0xLjQ0LS4wNS0yLjg5LS4zNS00LjItLjk3LS41Ny0uMjYtMS4xLS41OS0xLjYyLS45My0uMDEgMi45Mi4wMSA1Ljg0LS4wMiA4Ljc1LS4wOCAxLjQtLjU0IDIuNzktMS4zNSAzLjk0LTEuMzEgMS45Mi0zLjU4IDMuMTctNS45MSAzLjIxLTEuNDMuMDgtMi44Ni0uMzEtNC4wOC0xLjAzLTIuMDItMS4xOS0zLjQ0LTMuMzctMy42NS01LjcyLS4wMy0uNS0uMDQtMS0uMDEtMS40OS4xOC0xLjkgMS4xMi0zLjcyIDIuNTgtNC45NiAxLjY2LTEuNDQgMy45OC0yLjEzIDYuMTUtMS43Mi4wMiAxLjQ4LS4wNCAyLjk2LS4wNCA0LjQ0LS45OS0uMzItMi4xNS0uMjMtMy4wMi4zNy0uNjMuNDEtMS4xMSAxLjA0LTEuMzYgMS43NS0uMjEuNTEtLjE1IDEuMDctLjE0IDEuNjEuMjQgMS42NCAxLjgyIDMuMDIgMy41IDIuODcgMS4xMi0uMDEgMi4xOS0uNjYgMi43Ny0xLjYxLjE5LS4zMy40LS42Ny40MS0xLjA2LjEtMS43OS4wNi0zLjU3LjA3LTUuMzYuMDEtNC4wMy0uMDEtOC4wNS4wMi0xMi4wN3oiIGZpbGw9IiNGRTJDNTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC44NSAuNykiLz48cGF0aCBkPSJNMTIuNTI1LjAyYzEuMzEtLjAyIDIuNjEtLjAxIDMuOTEtLjAyLjA4IDEuNTMuNjMgMy4wOSAxLjc1IDQuMTcgMS4xMiAxLjExIDIuNyAxLjYyIDQuMjQgMS43OXY0LjAzYy0xLjQ0LS4wNS0yLjg5LS4zNS00LjItLjk3LS41Ny0uMjYtMS4xLS41OS0xLjYyLS45My0uMDEgMi45Mi4wMSA1Ljg0LS4wMiA4Ljc1LS4wOCAxLjQtLjU0IDIuNzktMS4zNSAzLjk0LTEuMzEgMS45Mi0zLjU4IDMuMTctNS45MSAzLjIxLTEuNDMuMDgtMi44Ni0uMzEtNC4wOC0xLjAzLTIuMDItMS4xOS0zLjQ0LTMuMzctMy42NS01LjcyLS4wMy0uNS0uMDQtMS0uMDEtMS40OS4xOC0xLjkgMS4xMi0zLjcyIDIuNTgtNC45NiAxLjY2LTEuNDQgMy45OC0yLjEzIDYuMTUtMS43Mi4wMiAxLjQ4LS4wNCAyLjk2LS4wNCA0LjQ0LS45OS0uMzItMi4xNS0uMjMtMy4wMi4zNy0uNjMuNDEtMS4xMSAxLjA0LTEuMzYgMS43NS0uMjEuNTEtLjE1IDEuMDctLjE0IDEuNjEuMjQgMS42NCAxLjgyIDMuMDIgMy41IDIuODcgMS4xMi0uMDEgMi4xOS0uNjYgMi43Ny0xLjYxLjE5LS4zMy40LS42Ny40MS0xLjA2LjEtMS43OS4wNi0zLjU3LjA3LTUuMzYuMDEtNC4wMy0uMDEtOC4wNS4wMi0xMi4wN3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+")`;
const pinterestMark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%23E60023'/%3E%3Cpath d='M24 11.5c-6.9 0-12.5 5-12.5 11.2 0 4.6 2.6 7.3 5 7.3.8 0 1.3-2.2 1.3-2.8 0-.7-1.8-2.2-1.8-5 0-4.2 3.2-8 8.4-8 4.6 0 7.1 2.8 7.1 6.5 0 4.9-2.2 9-5.4 9-1.8 0-3.1-1.5-2.7-3.3.5-2.1 1.5-4.4 1.5-5.9 0-1.4-.7-2.5-2.2-2.5-1.7 0-3.1 1.8-3.1 4.2 0 1.5.5 2.6.5 2.6l-2.1 8.9c-.6 2.7-.1 6-.1 6s2.1-2.6 2.8-5.1c.2-.7 1.2-4.8 1.2-4.8.6 1.1 2.3 2.1 4.1 2.1 5.4 0 9.1-4.9 9.1-11.5C35.2 15.4 30.6 11.5 24 11.5z' fill='white'/%3E%3C/svg%3E")`;
const blueskyMark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%231185FE'/%3E%3Cpath d='M15.2 13.9c3.6 2.7 7.5 8.2 8.8 11.1 1.3-2.9 5.2-8.4 8.8-11.1 2.6-1.9 6.8-3.4 6.8 1.3 0 .9-.5 7.9-.9 9-.9 3.2-4.1 4-7 3.5 5  .8 6.3 3.4 3.5 6-5.3 4.9-7.6-1.2-8.2-2.8-.1-.3-.2-.5-.3-.7-.1.2-.2.4-.3.7-.6 1.6-2.9 7.7-8.2 2.8-2.8-2.6-1.5-5.2 3.5-6-2.9.5-6.1-.3-7-3.5-.4-1.1-.9-8.1-.9-9 0-4.7 4.2-3.2 6.8-1.3z' fill='white'/%3E%3C/svg%3E")`;
const xMark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%23050505'/%3E%3Cpath d='M14.4 13h6.9l4.8 6.4 5.6-6.4h2.3l-6.8 7.9L35.3 35h-6.9l-5.3-7.1-6.1 7.1h-2.3l7.3-8.5L14.4 13zm5.5 2-1.5 0 11.5 18h1.5L19.9 15z' fill='white'/%3E%3C/svg%3E")`;

export default function EngagementTapFeedback() {
  useEffect(() => {
    const press = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLButtonElement>(reactionSelector);
      if (!target || target.disabled) return;
      target.dataset.eastokyoPressed = 'true';
      window.setTimeout(() => {
        if (target.isConnected) delete target.dataset.eastokyoPressed;
      }, 220);
    };

    const newsletterForms = Array.from(document.querySelectorAll<HTMLFormElement>(newsletterSelector));
    newsletterForms.forEach((form) => {
      form.action = newsletterEndpoint;
      form.method = 'post';
      const input = form.querySelector<HTMLInputElement>('input[name="email"]');
      if (input) input.required = true;
    });

    const socialRails = Array.from(document.querySelectorAll<HTMLElement>('.social-placeholder'));
    const socialStyle = document.createElement('style');
    socialStyle.dataset.eastokyoSocialLinks = 'true';
    socialStyle.textContent = `
      .social-placeholder { pointer-events:auto !important; }
      .social-placeholder::before,.social-placeholder::after { display:none !important; content:none !important; }
      .social-placeholder>.eastokyo-social-item {
        display:block !important; position:relative !important; z-index:20 !important;
        flex:0 0 2.55rem !important; width:2.55rem !important; height:2.55rem !important;
        overflow:hidden !important; border-radius:50% !important; background-position:center !important;
        background-repeat:no-repeat !important; background-size:100% 100% !important;
        box-shadow:0 0 0 1px rgba(255,233,202,.18),0 .35rem 1rem rgba(0,0,0,.2) !important;
        color:transparent !important; font-size:0 !important; line-height:0 !important; text-indent:-9999px !important;
        user-select:none !important;
      }
      .social-placeholder>a.eastokyo-social-item { cursor:pointer !important; pointer-events:auto !important; touch-action:manipulation !important; }
      .social-placeholder>span.eastokyo-social-item { cursor:default !important; pointer-events:none !important; }
      .eastokyo-social-facebook { background-image:${facebookMark} !important; }
      .eastokyo-social-instagram { background-image:${instagramMark} !important; }
      .eastokyo-social-tiktok { background-image:${tiktokMark} !important; }
      .eastokyo-social-pinterest { background-image:${pinterestMark} !important; }
      .eastokyo-social-bluesky { background-image:${blueskyMark} !important; }
      .eastokyo-social-x { background-image:${xMark} !important; }
      .social-placeholder>a.eastokyo-social-item:focus-visible { outline:3px solid #fff !important; outline-offset:3px !important; }
    `;
    document.head.appendChild(socialStyle);

    const makeItem = (className: string, label: string, backgroundLinkedUrl?: string) => {
      const item = backgroundLinkedUrl ? document.createElement('a') : document.createElement('span');
      item.className = `eastokyo-social-item ${className}`;
      item.textContent = label.toUpperCase();
      item.setAttribute('aria-label', backgroundLinkedUrl ? `EASTOKYO on ${label}` : `${label} profile coming soon`);
      item.setAttribute('title', backgroundLinkedUrl ? `EASTOKYO on ${label}` : `${label} profile coming soon`);
      if (item instanceof HTMLAnchorElement && backgroundLinkedUrl) {
        item.href = backgroundLinkedUrl;
        item.target = '_blank';
        item.rel = 'noopener noreferrer';
      }
      return item;
    };

    socialRails.forEach((rail) => {
      rail.replaceChildren(
        makeItem('eastokyo-social-facebook', 'Facebook', facebookUrl),
        makeItem('eastokyo-social-instagram', 'Instagram', instagramUrl),
        makeItem('eastokyo-social-tiktok', 'TikTok'),
        makeItem('eastokyo-social-pinterest', 'Pinterest', pinterestUrl),
        makeItem('eastokyo-social-bluesky', 'Bluesky'),
        makeItem('eastokyo-social-x', 'X'),
      );
    });

    const submitNewsletter = async (event: SubmitEvent) => {
      const form = event.target instanceof HTMLFormElement ? event.target : null;
      if (!form?.matches(newsletterSelector)) return;
      event.preventDefault();

      const input = form.querySelector<HTMLInputElement>('input[name="email"]');
      const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
      if (!input || !button) return;

      input.required = true;
      if (!form.reportValidity()) return;

      let status = form.querySelector<HTMLElement>('.mag-newsletter-status');
      if (!status) {
        status = document.createElement('p');
        status.className = 'mag-newsletter-status';
        status.setAttribute('aria-live', 'polite');
        status.setAttribute('role', 'status');
        status.style.margin = '.65rem 0 0';
        status.style.fontSize = '.62rem';
        status.style.fontWeight = '900';
        status.style.lineHeight = '1.25';
        status.style.letterSpacing = '.08em';
        form.appendChild(status);
      }

      const idleText = 'PUT MY NAME ON THE LIST.';
      button.disabled = true;
      button.textContent = 'ADDING YOU…';
      form.setAttribute('aria-busy', 'true');
      status.textContent = 'ADDING YOUR NAME TO THE EASTOKYO LETTER…';

      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 20000);
      const data = new FormData();
      data.set('email', input.value.trim());
      data.set('_subject', 'EASTOKYO newsletter signup');
      data.set('source', window.location.href);

      try {
        const response = await fetch(newsletterEndpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('Formspree rejected the submission');
        form.reset();
        status.textContent = 'YOU’RE ON THE LIST. SEE YOU IN YOUR INBOX.';
        button.textContent = 'YOU’RE ON THE LIST.';
      } catch {
        status.textContent = 'COULDN’T ADD YOU JUST NOW. PLEASE TRY AGAIN.';
        status.setAttribute('role', 'alert');
        button.disabled = false;
        button.textContent = idleText;
        input.focus();
      } finally {
        window.clearTimeout(timeout);
        form.removeAttribute('aria-busy');
      }
    };

    document.addEventListener('pointerdown', press, { capture: true, passive: true });
    document.addEventListener('submit', submitNewsletter, true);
    return () => {
      document.removeEventListener('pointerdown', press, true);
      document.removeEventListener('submit', submitNewsletter, true);
      socialStyle.remove();
    };
  }, []);

  return null;
}
