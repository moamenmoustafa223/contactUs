// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from '../locales/en.json'; // English translations
import translationAR from '../locales/ar.json'; // Arabic translations

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  interpolation: {
    escapeValue: false, // react already escapes by default
  },
});

export default i18n;
