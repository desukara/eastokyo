export default function Head() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('click', function (event) {
              if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              var element = event.target instanceof Element ? event.target.closest('a[href]') : null;
              if (!element || element.hasAttribute('download')) return;
              if (element.target && element.target !== '_self') return;
              var href = element.getAttribute('href');
              if (!href || href.charAt(0) === '#' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || href.indexOf('javascript:') === 0) return;
              var url;
              try { url = new URL(element.href, window.location.href); } catch (_) { return; }
              if (url.origin !== window.location.origin) return;
              if (url.pathname === window.location.pathname && url.search === window.location.search) return;
              event.preventDefault();
              window.location.assign(url.href);
            }, true);
          `,
        }}
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KR8C4FRGRB"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KR8C4FRGRB');
          `,
        }}
      />
    </>
  );
}
