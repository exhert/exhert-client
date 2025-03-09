import React from 'react';
import { useLanguage } from '../utils/LanguageContext';
import styles from './LanguageToggle.module.sass';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className={styles.languageToggle}
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
};

export default LanguageToggle; 