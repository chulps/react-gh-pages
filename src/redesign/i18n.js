import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });
const supported = (value) => String(value || '').toLowerCase().startsWith('ja') ? 'ja' : 'en';

export function LanguageProvider({ children, initialLang }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState(() => {
    if (initialLang) return supported(initialLang);
    const publicPath = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    const browserPath = typeof window !== 'undefined' ? window.location.pathname : '';
    if (browserPath === `${publicPath}/ja` || browserPath.startsWith(`${publicPath}/ja/`)) return 'ja';
    const hashLanguage = typeof window !== 'undefined' ? new URLSearchParams(window.location.hash.split('?')[1] || '').get('lang') : null;
    const query = hashLanguage || new URLSearchParams(location.search).get('lang');
    if (query === 'ja' || query === 'en') return query;
    try {
      const saved = window.localStorage.getItem('chulps-language');
      if (saved === 'ja' || saved === 'en') return saved;
    } catch (_) { /* Storage can be disabled; browser language is still available. */ }
    return supported(window.navigator.language);
  });

  const setLang = (next) => {
    const value = supported(next);
    setLangState(value);
    try { window.localStorage.setItem('chulps-language', value); } catch (_) { /* Keep language for this session. */ }
    if (process.env.NODE_ENV === 'test') {
      const params = new URLSearchParams(location.search);
      params.set('lang', value);
      navigate({ pathname: location.pathname, search: `?${params.toString()}` }, { replace: true });
      return;
    }
    const publicPath = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    const path = window.location.pathname.slice(publicPath.length) || '/';
    const cleanPath = path.replace(/^\/ja(?=\/|$)/, '') || '/';
    const localizedPath = value === 'ja' ? `/ja${cleanPath === '/' ? '/' : cleanPath}` : cleanPath;
    const params = new URLSearchParams(window.location.search);
    params.delete('lang');
    const search = params.toString();
    window.location.assign(`${publicPath}${localizedPath}${search ? `?${search}` : ''}`);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'test' || lang !== 'ja') return;
    const publicPath = (process.env.PUBLIC_URL || '').replace(/\/$/, '');
    const browserPath = window.location.pathname;
    if (browserPath === `${publicPath}/ja` || browserPath.startsWith(`${publicPath}/ja/`)) return;
    const route = browserPath.slice(publicPath.length) || '/';
    const params = new URLSearchParams(window.location.search);
    params.delete('lang');
    const search = params.toString();
    window.location.replace(`${publicPath}/ja${route === '/' ? '/' : route}${search ? `?${search}` : ''}`);
  }, [lang]);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
export const localized = (lang, en, ja) => lang === 'ja' ? ja : en;
