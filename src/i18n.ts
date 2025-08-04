import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationES from './locales/es/es.json'
import translationEN from './locales/en/en.json'
import translationDE from './locales/de/de.json' 

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationES },
      en: { translation: translationEN },
      de: { translation: translationDE }, // <- AÑADIDO
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
