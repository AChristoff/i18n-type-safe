# 🛡️ i18n-type-safe
---

This is a **TypeScript**🔷 setup that will provides type safety for i18n (internationalization) and i18next in **React**⚛️ projects. Ensure that your translations and placeholders are type-checked, allowing you to catch translation-related bugs at compile-time.

---


## 🌍 ***Translation File Protection***

**Protects Against Wrong/Missing Keys in Translation Files**
Say goodbye to the frustration of missing or incorrect translation keys. This setup ensures that all keys are valid and accounted for.

**Prevents Wrong/Missing {{Placeholders}} in Translation Files**
Never worry about placeholders causing issues. The setup validates that all placeholders are correctly used in your translation strings.



## 🚀 ***In-App Protection***

**Protects Against Wrong Keys When Using the `t()` Function in Your App**
When you use the `t()` function in your app, the setup makes sure that you're referencing valid translation keys.

**Prevents Wrong {{Placeholders}} When Using the `t()` Function in Your App**
Likewise, the setup ensures that your placeholders are used correctly within the `t()` function.

**Autocomplete for Translation Keys and Placeholders**
Enjoy the convenience of autocomplete when working with translation keys and placeholders in both your translation files and your app.


### Examples

**Usage:**
```ts
// locals.d.ts
export interface ILocale {
  welcome: '{{username}}'
}

/** 
 * --------------------------------------------------
 * TRANSLATION FILES PROTECTION
 * locales/en.ts
 * --------------------------------------------------
 */
import { Locale } from '@/@types/locals'

export const en: Locale = {
  welcome: 'Welcome, {{username}}!', ✅ Correct!
  //wellcome: 'Welcome, {{usename}}!', ❌ wrong key or placeholder are detected
}

/** 
 * --------------------------------------------------
 * IN-APP PROTECTION
 * app/index.tsx
 * --------------------------------------------------
 */
 <p>{t('welcome', { username: 'John' })}</p> ✅ Correct!
// <p>{t('wellcome', { usename: 'John' })}</p> ❌ Wrong key or placeholder are detected
```
---

🚀 *Don't let translation errors undermine your app's quality! Follow `i18n-type-safe` way of doing localization type-safety and bulletproof you translations!*

---

📦 Required packages: 

```
npm i typescript
npm i i18next
npm i react-i18next
```

```
i18n-type-safe/
  │
  │
  └─── i18n.tsx
  │
  │
  └─── locales/
  │     │
  │     └─── en.ts
  │
  └─── @types/
        │
        └─── i18next.d.ts
        │
        └─── locals.d.ts


```

```ts

// 1.Dine all types for your translations here
// @types/local.types.ts
import { Locale } from 'i18n-type-safe'

export interface MyInterface {
   welcome: '{{username}}'
   password: string
   ...
}

// 2. User i18n-type-sage Generic to type safe the placeholders inside the translations as well 
export type TypeSafeLocal = Locale<MyInterface>;


// 3. User the new type TypeSafeLocal for you translations 
// locales/en.ts
import {TypeSafeLocal} from './@types/local.types.ts'

export const en: TypeSafeLocal = {
  welcome: 'Welcome, {{username}}!', ✅ Correct!
  //wellcome: 'Welcome, {{usename}}!', ❌ wrong key or placeholder are detected
}



// -------------------------------------------

// Initialize i18n-type-safe
// 1. Create i18n.tsx
import { initI18n } from 'i18n-type-safe';

import {en} from '@/locales/en' // english
import {es} from '@/locales/es' // spanish

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
}

initI18n({
  resources,
  lng: 'en'  // (default lang)
  // Other settings 
});

// You can additionally create a dynamic type for all your lang keys to be used in your project
// export type Lang = keyof typeof resources 


// 2. Create @types/i18next.d.ts
import { MyInterface } from "./locals";

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en', // default lang
    resources: {
      en: MyInterface,
      de: MyInterface,
      // other langs
    }
  }
}


```

---
## 📜 ***License***

 Licensed under the [GPL-3.0 license](https://github.com/AChristoff/i18n-type-safe/blob/main/LICENSE).  This library is free and open-source.