import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });
const supported = (value) => String(value || '').toLowerCase().startsWith('ja') ? 'ja' : 'en';

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState(() => {
    const query = new URLSearchParams(window.location.hash.split('?')[1] || '').get('lang') ||
      new URLSearchParams(window.location.search).get('lang');
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
    const params = new URLSearchParams(location.search);
    params.set('lang', value);
    navigate({ pathname: location.pathname, search: `?${params.toString()}` }, { replace: true });
  };

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
export const localized = (lang, en, ja) => lang === 'ja' ? ja : en;
