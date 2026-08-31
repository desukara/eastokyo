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
      .social-placeholder::before {
        display: none !important;
        content: none !important;
        pointer-events: none !important;
      }
      .social-placeholder .eastokyo-social-facebook,
      .social-placeholder .eastokyo-social-instagram,
      .social-placeholder .eastokyo-social-pinterest {
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
      .social-placeholder .eastokyo-social-facebook {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='22' fill='%231876F2'/%3E%3Cpath d='M27.2 16.2h3.4v-5.1c-.6-.1-2.6-.3-5-.3-4.9 0-8.2 3-8.2 8.5V24h-5.5v5.7h5.5V44c1.1.2 2.2.3 3.4.3 1.2 0 2.4-.1 3.5-.3V29.7h5.1l.8-5.7h-5.9v-4.1c0-1.7.5-3.7 2.9-3.7z' fill='white'/%3E%3C/svg%3E") !important;
      }
      .social-placeholder .eastokyo-social-instagram {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cdefs%3E%3CradialGradient id='g' cx='25%25' cy='100%25' r='120%25'%3E%3Cstop offset='0' stop-color='%23FFD600'/%3E%3Cstop offset='.38' stop-color='%23FF7A00'/%3E%3Cstop offset='.68' stop-color='%23FF0169'/%3E%3Cstop offset='1' stop-color='%23D300C5'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='24' cy='24' r='22' fill='url(%23g)'/%3E%3Crect x='14.2' y='14.2' width='19.6' height='19.6' rx='6.4' fill='none' stroke='white' stroke-width='2.6'/%3E%3Ccircle cx='24' cy='24' r='4.8' fill='none' stroke='white' stroke-width='2.6'/%3E%3Ccircle cx='30.2' cy='17.8' r='1.45' fill='white'/%3E%3C/svg%3E") !important;
      }
      .social-placeholder .eastokyo-social-pinterest {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjIiIGZpbGw9IiNmZmYiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjQgNi40KSBzY2FsZSgxLjQ2NjcpIj48cGF0aCBkPSJNMTIuMDE3IDBDNS4zOTYgMCAuMDI5IDUuMzY3LjAyOSAxMS45ODdjMCA1LjA3OSAzLjE1OCA5LjQyNCA3LjYxOCAxMS4xNzQtLjEwNS0uOTQ5LS4xOTktMi40MDMuMDQxLTMuNDM5LjIxOS0uOTM3IDEuNDA3LTUuOTY1IDEuNDA3LTUuOTY1cy0uMzU5LS43Mi0uMzU5LTEuNzgzYzAtMS42NjguOTY4LTIuOTE1IDIuMTczLTIuOTE1IDEuMDI0IDAgMS41MTguNzY5IDEuNTE4IDEuNjkgMCAxLjAyOS0uNjU1IDIuNTY4LS45OTQgMy45OTUtLjI4MyAxLjE5NC41OTkgMi4xNjkgMS43NzcgMi4xNjkgMi4xMzMgMCAzLjc3Mi0yLjI0OSAzLjc3Mi01LjQ5NSAwLTIuODc0LTIuMDY2LTQuODgzLTUuMDE4LTQuODgzLTMuNDE4IDAtNS40MjQgMi41NjMtNS40MjQgNS4yMTUgMCAxLjAzMy4zOTggMi4xNC44OTUgMi43NDQuMDk5LjEyLjExMi4yMjUuMDg1LjM0Ny0uMDkzLjM4LS4yOTMgMS4xOTQtLjMzMyAxLjM2LS4wNTMuMjI1LS4xNzIuMjcxLS40MDIuMTY1LTEuNDk1LS42OTUtMi40My0yLjg3OC0yLjQzLTQuNjMgMC0zLjc3MSAyLjczOS03LjI1NiA3LjktNy4yNTYgNC4xNDcgMCA3LjM3MyAyLjk1NiA3LjM3MyA2LjkxIDAgNC4xMjItMi41OTggNy40NDEtNi4xOTQgNy40NDEtMS4yMSAwLTIuMzQ3LS42MjktMi43MzctMS4zNzhsLS43NDQgMi44MzVjLS4yNjkgMS4wMzQtLjk5NSAyLjMyNy0xLjQ4IDMuMTE4IDEuMTE0LjM0NCAyLjI5NC41MyAzLjUxNS41MyA2LjYyNCAwIDExLjk5LTUuMzY3IDExLjk5LTExLjk4N0MyNC4wMDcgNS4zNjcgMTguNjQxLjAwMSAxMi4wMTcuMDAxeiIgZmlsbD0iI0U2MDAyMyIvPjwvZz48L3N2Zz4=") !important;
      }
      .social-placeholder .eastokyo-social-facebook:focus-visible,
      .social-placeholder .eastokyo-social-instagram:focus-visible,
      .social-placeholder .eastokyo-social-pinterest:focus-visible {
        outline: 3px solid #fff !important;
        outline-offset: 3px !important;
      }
    `;
    document.head.appendChild(socialStyle);

    socialRails.forEach((rail) => {
      if (!rail.querySelector('.eastokyo-social-facebook')) {
        const facebook = document.createElement('a');
        facebook.className = 'eastokyo-social-facebook';
        facebook.href = facebookUrl;
        facebook.target = '_blank';
        facebook.rel = 'noopener noreferrer';
        facebook.setAttribute('aria-label', 'EASTOKYO on Facebook');
        facebook.title = 'EASTOKYO on Facebook';
        facebook.textContent = 'FACEBOOK';
        rail.prepend(facebook);
      }

      const instagramPlaceholder = Array.from(rail.querySelectorAll('span')).find((span) => span.textContent?.trim() === 'INSTAGRAM');
      if (!rail.querySelector('.eastokyo-social-instagram')) {
        const instagram = document.createElement('a');
        instagram.className = 'eastokyo-social-instagram';
        instagram.href = instagramUrl;
        instagram.target = '_blank';
        instagram.rel = 'noopener noreferrer';
        instagram.setAttribute('aria-label', 'EASTOKYO on Instagram');
        instagram.title = 'EASTOKYO on Instagram';
        instagram.textContent = 'INSTAGRAM';
        if (instagramPlaceholder) instagramPlaceholder.replaceWith(instagram);
        else rail.appendChild(instagram);
      }

      const pinterestPlaceholder = Array.from(rail.querySelectorAll('span')).find((span) => span.textContent?.trim() === 'PINTEREST');
      if (!rail.querySelector('.eastokyo-social-pinterest')) {
        const pinterest = document.createElement('a');
        pinterest.className = 'eastokyo-social-pinterest';
        pinterest.href = pinterestUrl;
        pinterest.target = '_blank';
        pinterest.rel = 'noopener noreferrer';
        pinterest.setAttribute('aria-label', 'EASTOKYO on Pinterest');
        pinterest.title = 'EASTOKYO on Pinterest';
        pinterest.textContent = 'PINTEREST';
        if (pinterestPlaceholder) pinterestPlaceholder.replaceWith(pinterest);
        else rail.appendChild(pinterest);
      }
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
