(() => {
  const config = {
    googleTagId: '',
    googleAdsConversionId: '',
    googleAdsConversionLabel: '',
    allowExistingDataLayer: false,
    ...(window.SHIFTSIGNAL_CONFIG || {})
  };
  const analyticsTagId = config.googleTagId || config.googleAdsConversionId;
  const consentKey = 'shiftsignal_analytics_consent';

  const readConsent = () => {
    try {
      return window.localStorage.getItem(consentKey);
    } catch (error) {
      return null;
    }
  };

  const writeConsent = (value) => {
    try {
      window.localStorage.setItem(consentKey, value);
    } catch (error) {
      return false;
    }
    return true;
  };

  const loadAnalytics = () => {
    if (!analyticsTagId || window.__shiftsignalAnalyticsReady) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', analyticsTagId, { anonymize_ip: true });
    window.__shiftsignalAnalyticsReady = true;

    if (!document.querySelector('script[data-shiftsignal-google-tag]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsTagId)}`;
      script.dataset.shiftsignalGoogleTag = 'true';
      document.head.appendChild(script);
    }
  };

  const analyticsReady = () => window.__shiftsignalAnalyticsReady || config.allowExistingDataLayer;

  const trackCta = (location) => {
    if (!analyticsReady()) {
      return;
    }

    const eventParams = { cta_location: location };
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'telegram_click', eventParams);
      if (config.googleAdsConversionId && config.googleAdsConversionLabel) {
        window.gtag('event', 'conversion', {
          send_to: `${config.googleAdsConversionId}/${config.googleAdsConversionLabel}`
        });
      }
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'telegram_click', ...eventParams });
    }
  };

  const showConsentNotice = () => {
    if (!analyticsTagId || readConsent()) {
      return;
    }

    const notice = document.createElement('aside');
    notice.className = 'cookie-notice';
    notice.setAttribute('role', 'dialog');
    notice.setAttribute('aria-label', 'Optional analytics settings');
    notice.innerHTML = `
      <p><strong>Optional analytics</strong> We use privacy-conscious analytics to understand which pages and Telegram buttons are useful. You can say no.</p>
      <div class="cookie-actions">
        <button type="button" data-cookie-accept>Allow analytics</button>
        <button type="button" data-cookie-decline>Not now</button>
        <a href="privacy.html">Privacy policy</a>
      </div>
    `;
    document.body.appendChild(notice);

    notice.querySelector('[data-cookie-accept]').addEventListener('click', () => {
      writeConsent('accepted');
      notice.remove();
      loadAnalytics();
    });
    notice.querySelector('[data-cookie-decline]').addEventListener('click', () => {
      writeConsent('declined');
      notice.remove();
    });
  };

  document.querySelectorAll('[data-cta]').forEach((link) => {
    link.addEventListener('click', () => trackCta(link.dataset.cta || 'telegram_cta'));
  });

  if (readConsent() === 'accepted') {
    loadAnalytics();
  } else {
    showConsentNotice();
  }
})();
