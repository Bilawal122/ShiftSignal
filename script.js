(() => {
  const config = {
    googleTagId: '',
    googleAdsConversionId: '',
    googleAdsConversionLabel: '',
    allowExistingDataLayer: false,
    ...(window.SHIFTSIGNAL_CONFIG || {})
  };
  const analyticsTagId = config.googleTagId || config.googleAdsConversionId;
  const conversionSendTo = config.googleAdsConversionId && config.googleAdsConversionLabel
    ? `${config.googleAdsConversionId}/${config.googleAdsConversionLabel}`
    : '';
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
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted'
    });
    window.__shiftsignalAnalyticsReady = true;
  };

  const analyticsReady = () => window.__shiftsignalAnalyticsReady || config.allowExistingDataLayer;

  const sendEvent = (eventName, eventParams) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...eventParams });
    }
  };

  const sendConversion = (eventParams) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', eventParams);
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'conversion', ...eventParams });
    }
  };

  const trackCta = (link, event) => {
    if (!analyticsReady()) {
      return;
    }

    const isTelegramDestination = link.hostname === 't.me' || link.hostname === 'telegram.me';
    const eventParams = {
      cta_location: link.dataset.cta || 'telegram_cta',
      link_url: link.href
    };
    sendEvent(isTelegramDestination ? 'telegram_click' : 'cta_click', eventParams);

    if (!isTelegramDestination || !conversionSendTo) {
      return;
    }

    const conversionParams = {
      send_to: conversionSendTo,
      value: 1.0,
      currency: 'GBP'
    };

    if (link.target === '_blank') {
      sendConversion(conversionParams);
      return;
    }

    event.preventDefault();
    let hasNavigated = false;
    const navigate = () => {
      if (hasNavigated) {
        return;
      }
      hasNavigated = true;
      window.location.assign(link.href);
    };
    sendConversion({ ...conversionParams, event_callback: navigate });
    window.setTimeout(navigate, 750);
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
    link.addEventListener('click', (event) => trackCta(link, event));
  });

  if (readConsent() === 'accepted') {
    loadAnalytics();
  } else {
    showConsentNotice();
  }
})();
