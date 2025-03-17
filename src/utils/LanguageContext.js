import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Effect to detect language from URL or localStorage on initial load
  useEffect(() => {
    // Function to get language from URL
    const getLanguageFromURL = () => {
      // Check if window is defined (to avoid SSR issues)
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const langParam = params.get('lang');
        
        if (langParam && ['en', 'fr'].includes(langParam)) {
          return langParam;
        }
      }
      return null;
    };

    // First check URL query parameter
    const urlLang = getLanguageFromURL();
    
    if (urlLang) {
      setLanguage(urlLang);
      localStorage.setItem('preferredLanguage', urlLang);
    } else {
      // If no valid URL parameter, check localStorage
      const savedLanguage = localStorage.getItem('preferredLanguage');
      if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
        setLanguage(savedLanguage);
      }
    }

    // Set up listener for URL changes
    const handleURLChange = () => {
      const newLang = getLanguageFromURL();
      if (newLang && newLang !== language) {
        setLanguage(newLang);
        localStorage.setItem('preferredLanguage', newLang);
      }
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleURLChange);

    return () => {
      window.removeEventListener('popstate', handleURLChange);
    };
  }, []); // Only run on mount

  // Function to change language
  const changeLanguage = (lang) => {
    if (['en', 'fr'].includes(lang)) {
      setLanguage(lang);
      localStorage.setItem('preferredLanguage', lang);
      
      // Update URL with the new language parameter
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.pushState({}, '', url.toString());
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 