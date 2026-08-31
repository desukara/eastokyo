'use client';

import { useEffect } from 'react';

const reactionSelector = 'button[aria-label^="Like"],button[aria-label^="Love"],button[aria-label^="Wow"]';
const newsletterSelector = 'form.mag-newsletter-form';
const newsletterEndpoint = 'https://formspree.io/f/xqpkeeov';
const facebookUrl = 'https://www.facebook.com/Eastokyo/';

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
      .social-placeholder::before {
        display: none !important;
        content: none !important;
        pointer-events: none !important;
      }
      .social-placeholder .eastokyo-social-facebook {
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
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%231876F2'/%3E%3Cpath d='M27.2 16.2h3.4v-5.1c-.6-.1-2.6-.3-5-.3-4.9 0-8.2 3-8.2 8.5V24h-5.5v5.7h5.5V44c1.1.2 2.2.3 3.4.3 1.2 0 2.4-.1 3.5-.3V29.7h5.1l.8-5.7h-5.9v-4.1c0-1.7.5-3.7 2.9-3.7z' fill='white'/%3E%3C/svg%3E") !important;
        box-shadow: 0 0 0 1px rgba(255, 233, 202, .18), 0 .35rem 1rem rgba(0, 0, 0, .2) !important;
        color: transparent !important;
        font-size: 0 !important;
        line-height: 0 !important;
        text-indent: -9999px !important;
        cursor: pointer !important;
        pointer-events: auto !important;
        touch-action: manipulation !important;
        user-select: none !important;
      }
      .social-placeholder .eastokyo-social-facebook:focus-visible {
        outline: 3px solid #fff !important;
        outline-offset: 3px !important;
      }
    `;
    document.head.appendChild(socialStyle);

    socialRails.forEach((rail) => {
      if (rail.querySelector('.eastokyo-social-facebook')) return;
      const facebook = document.createElement('a');
      facebook.className = 'eastokyo-social-facebook';
      facebook.href = facebookUrl;
      facebook.target = '_blank';
      facebook.rel = 'noopener noreferrer';
      facebook.setAttribute('aria-label', 'EASTOKYO on Facebook');
      facebook.title = 'EASTOKYO on Facebook';
      facebook.textContent = 'FACEBOOK';
      rail.prepend(facebook);
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
      socialRails.forEach((rail) => {
        rail.querySelector('.eastokyo-social-facebook')?.remove();
      });
    };
  }, []);

  return null;
}
