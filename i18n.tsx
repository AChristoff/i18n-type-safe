import i18n, { InitOptions } from 'i18next'
import { en } from './locales/en'
import { initReactI18next } from 'react-i18next'

export function initI18n(options: InitOptions = {}) {
  const defaultResources = {
    en: { translation: en },
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    resources: defaultResources,
    interpolation: {
      escapeValue: false,
    },
    ...options, // Use user-provided options
  })

  return i18n
}

export default i18n
