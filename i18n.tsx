import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './src/locales/en'

const resources = {
  en: {
    translation: en,
  },
  // Add more languages here
}

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3', // polyfill
    lng: 'en', // default language
    resources, // language files
    interpolation: {
      escapeValue: false, 
    },
  })

export default i18n
