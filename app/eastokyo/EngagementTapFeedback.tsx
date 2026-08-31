'use client';

import { useEffect } from 'react';

const reactionSelector = 'button[aria-label^="Like"],button[aria-label^="Love"],button[aria-label^="Wow"]';
const newsletterSelector = 'form.mag-newsletter-form';
const newsletterEndpoint = 'https://formspree.io/f/xqpkeeov';

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
    };
  }, []);

  return null;
}
