import { useLanguage } from './LanguageContext';
import { translations } from './translations';

export const useTranslation = () => {
  const { language, changeLanguage } = useLanguage();

  const t = (key) => {
    const translation = translations[language]?.[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    return translation;
  };

  return { t, language, changeLanguage };
}; 