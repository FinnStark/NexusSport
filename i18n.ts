import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';
import LanguageDetector from 'i18next-browser-languagedetector'; // Import du détecteur

// Importer les fichiers de traduction
import en from '@/translations/en.json';
import fr from '@/translations/fr.json';

// Définir les ressources pour chaque langue
const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(initReactI18next) // Intégration avec react-i18next
  .use(LanguageDetector) // Utiliser le détecteur de langue fourni par i18next-browser-languagedetector
  .init({
    resources, // Ressources de traduction
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement
    },
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'], // Ordre dans lequel i18next détecte la langue
      caches: ['localStorage', 'cookie'], // Où stocker la langue choisie
    },
  });

  

export default i18n;
