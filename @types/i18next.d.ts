import { ILocale } from './locals'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en'
    resources: {
      en: ILocale
    }
  }
}
