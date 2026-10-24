import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let lastPageLocation = '';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    const pageLocation = window.location.href;
    if (pageLocation === lastPageLocation || typeof window.gtag !== 'function') return;
    lastPageLocation = pageLocation;

    window.gtag('event', 'page_view', {
      page_location: pageLocation,
      page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
      page_title: document.title,
    });
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const trackContactClick = (event) => {
      const link = event.target instanceof Element
        ? event.target.closest('a[href^="mailto:"]')
        : null;
      if (!link) return;

      const subject = new URL(link.href).searchParams.get('subject') || '';
      const contactType = /recruit|role|designer|engineer/i.test(subject) ? 'recruiting' : 'business';
      window.gtag?.('event', contactType === 'business' ? 'business_contact_click' : 'recruiting_contact_click', {
        contact_type: contactType,
        transport_type: 'beacon',
      });
    };

    document.addEventListener('click', trackContactClick);
    return () => document.removeEventListener('click', trackContactClick);
  }, []);

  return null;
}
