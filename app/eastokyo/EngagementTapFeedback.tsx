'use client';

import { useEffect } from 'react';

const reactionSelector = 'button[aria-label^="Like"],button[aria-label^="Love"],button[aria-label^="Wow"]';
const newsletterSelector = 'form.mag-newsletter-form';
const newsletterEndpoint = 'https://formspree.io/f/xqpkeeov';
const facebookUrl = 'https://www.facebook.com/Eastokyo/';
const instagramUrl = 'https://www.instagram.com/eastokyo.magazine/';
const pinterestUrl = 'https://jp.pinterest.com/eastokyo/';

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
      .social-placeholder {
        pointer-events: auto !important;
      }
      .social-placeholder::before,
      .social-placeholder::after {
        display: none !important;
        content: none !important;
        pointer-events: none !important;
      }
      .social-placeholder > .eastokyo-social-item {
        display: block !important;
        position: relative !important;
        z-index: 20 !important;
        flex: 0 0 2.55rem !important;
        width: 2.55rem !important;
        height: 2.55rem !important;
        overflow: hidden !important;
        border-radius: 50% !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: 100% 100% !important;
        box-shadow: 0 0 0 1px rgba(255,233,202,.18), 0 .35rem 1rem rgba(0,0,0,.2) !important;
        color: transparent !important;
        font-size: 0 !important;
        line-height: 0 !important;
        text-indent: -9999px !important;
        user-select: none !important;
      }
      .social-placeholder > a.eastokyo-social-item {
        cursor: pointer !important;
        pointer-events: auto !important;
        touch-action: manipulation !important;
      }
      .social-placeholder > span.eastokyo-social-item {
        cursor: default !important;
        pointer-events: none !important;
      }
      .eastokyo-social-facebook {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%231876F2'/%3E%3Cpath d='M27.2 16.2h3.4v-5.1c-.6-.1-2.6-.3-5-.3-4.9 0-8.2 3-8.2 8.5V24h-5.5v5.7h5.5V44c1.1.2 2.2.3 3.4.3 1.2 0 2.4-.1 3.5-.3V29.7h5.1l.8-5.7h-5.9v-4.1c0-1.7.5-3.7 2.9-3.7z' fill='white'/%3E%3C/svg%3E") !important;
      }
      .eastokyo-social-instagram {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cdefs%3E%3CradialGradient id='g' cx='25%25' cy='100%25' r='120%25'%3E%3Cstop offset='0' stop-color='%23FFD600'/%3E%3Cstop offset='.38' stop-color='%23FF7A00'/%3E%3Cstop offset='.68' stop-color='%23FF0169'/%3E%3Cstop offset='1' stop-color='%23D300C5'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='24' cy='24' r='22' fill='url(%23g)'/%3E%3Crect x='14.2' y='14.2' width='19.6' height='19.6' rx='6.4' fill='none' stroke='white' stroke-width='2.6'/%3E%3Ccircle cx='24' cy='24' r='4.8' fill='none' stroke='white' stroke-width='2.6'/%3E%3Ccircle cx='30.2' cy='17.8' r='1.45' fill='white'/%3E%3C/svg%3E") !important;
      }
      .eastokyo-social-tiktok {
        background: #090909 !important;
      }
      .eastokyo-social-tiktok::after {
        content: '♪' !important;
        display: grid !important;
        place-items: center !important;
        width: 100% !important;
        height: 100% !important;
        color: white !important;
        -webkit-text-fill-color: white !important;
        font-size: 1.55rem !important;
        font-weight: 900 !important;
        line-height: 1 !important;
        text-indent: 0 !important;
        text-shadow: -2px 0 #25F4EE, 2px 0 #FE2C55 !important;
      }
      .eastokyo-social-pinterest {
        background: #fff !important;
      }
      .eastokyo-social-pinterest::after {
        content: 'P' !important;
        display: grid !important;
        place-items: center !important;
        width: 100% !important;
        height: 100% !important;
        color: #E60023 !important;
        -webkit-text-fill-color: #E60023 !important;
        font-family: Georgia, serif !important;
        font-size: 1.85rem !important;
        font-weight: 700 !important;
        line-height: 1 !important;
        text-indent: 0 !important;
      }
      .eastokyo-social-bluesky {
        background: #1185FE !important;
      }
      .eastokyo-social-bluesky::after {
        content: 'B' !important;
        display: grid !important;
        place-items: center !important;
        width: 100% !important;
        height: 100% !important;
        color: white !important;
        -webkit-text-fill-color: white !important;
        font-size: 1.25rem !important;
        font-weight: 900 !important;
        line-height: 1 !important;
        text-indent: 0 !important;
      }
      .eastokyo-social-x {
        background: #050505 !important;
      }
      .eastokyo-social-x::after {
        content: 'X' !important;
        display: grid !important;
        place-items: center !important;
        width: 100% !important;
        height: 100% !important;
        color: white !important;
        -webkit-text-fill-color: white !important;
        font-size: 1.15rem !important;
        font-weight: 900 !important;
        line-height: 1 !important;
        text-indent: 0 !important;
      }
      .social-placeholder > a.eastokyo-social-item:focus-visible {
        outline: 3px solid #fff !important;
        outline-offset: 3px !important;
      }
    `;
    document.head.appendChild(socialStyle);

    const makeLink = (className: string, label: string, href: string) => {
      const link = document.createElement('a');
      link.className = `eastokyo-social-item ${className}`;
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `EASTOKYO on ${label}`);
      link.title = `EASTOKYO on ${label}`;
      link.textContent = label.toUpperCase();
      return link;
    };

    const makePlaceholder = (className: string, label: string) => {
      const item = document.createElement('span');
      item.className = `eastokyo-social-item ${className}`;
      item.setAttribute('aria-label', `${label} profile coming soon`);
      item.title = `${label} profile coming soon`;
      item.textContent = label.toUpperCase();
      return item;
    };

    socialRails.forEach((rail) => {
      rail.replaceChildren(
        makeLink('eastokyo-social-facebook', 'Facebook', facebookUrl),
        makeLink('eastokyo-social-instagram', 'Instagram', instagramUrl),
        makePlaceholder('eastokyo-social-tiktok', 'TikTok'),
        makeLink('eastokyo-social-pinterest', 'Pinterest', pinterestUrl),
        makePlaceholder('eastokyo-social-bluesky', 'Bluesky'),
        makePlaceholder('eastokyo-social-x', 'X'),
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
