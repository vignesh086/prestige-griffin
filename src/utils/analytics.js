// Google Analytics 4 utility functions
// Replace G-XXXXXXXXXX with your actual GA4 Measurement ID in index.html

/**
 * Track page views - call this on route changes
 * @param {string} path - The page path (e.g., '/about', '/services')
 * @param {string} title - The page title
 */
export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
      page_title: title,
    });
  }
};

/**
 * Track custom events
 * @param {string} eventName - Name of the event (e.g., 'form_submission', 'button_click')
 * @param {object} eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form (e.g., 'contact_form', 'job_application')
 */
export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', {
    event_category: 'Form',
    event_label: formName,
  });
};

/**
 * Track outbound link clicks
 * @param {string} url - The URL being clicked
 * @param {string} linkText - The text of the link
 */
export const trackOutboundLink = (url, linkText) => {
  trackEvent('click', {
    event_category: 'Outbound Link',
    event_label: linkText,
    transport_type: 'beacon',
    event_callback: () => {
      document.location = url;
    },
  });
};

/**
 * Track CTA button clicks
 * @param {string} buttonName - Name/text of the button
 * @param {string} location - Where the button is located (e.g., 'hero', 'footer')
 */
export const trackCTAClick = (buttonName, location) => {
  trackEvent('cta_click', {
    event_category: 'CTA',
    event_label: buttonName,
    button_location: location,
  });
};
