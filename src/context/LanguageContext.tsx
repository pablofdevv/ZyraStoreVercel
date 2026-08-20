import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES, type Language } from '@/i18n/languages';
import { TRANSLATIONS, type TranslationKeys } from '@/i18n/translations';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('zyra_lang');
    if (saved) {
      const found = LANGUAGES.find((l) => l.code === saved);
      if (found) return found;
    }
    return LANGUAGES[0]; // Default Spanish
  });

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('zyra_lang', lang.code);
    document.documentElement.lang = lang.code;
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  const t = TRANSLATIONS[currentLanguage.code] || TRANSLATIONS['es'];

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
