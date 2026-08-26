(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('#site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[data-cta]').forEach((link) => {
    link.addEventListener('click', () => {
      const eventName = link.dataset.cta || 'telegram_cta';
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'telegram_click', { cta_location: eventName });
      }
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: 'telegram_click', cta_location: eventName });
      }
    });
  });
})();
