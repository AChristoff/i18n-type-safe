# 🛡️ i18n-type-safe
---

- This is a **TypeScript**🔷 setup that will provides type safety for i18n (internationalization) and i18next in **React**⚛️ projects. 
- Ensure that your **translations** and **placeholders** are **type-safe**, allowing you to catch translation-related bugs at compile-time.
- **Bulletproof** you translations with `i18n-type-safe`! Don't let translation errors undermine your app's quality!

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

___
 
### 🔍 Examples

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
___

## 🛠️ Usage

### Step 1: Install 
Before starting with the setup, install the required the packages. Run the following command in your project's  📂 - `root/` directory:
 ```bash
npm i i18n-type-safe
```


### Step 2: Define Translation Types
- *Create `📂/@types/local.types.ts`*

1.1 Define all types for your translations. 
1.2 Utilize i18n-type-safe Generic to ensure type safety for placeholders in the translations.

```ts
// @types/local.types.ts
import { Locale } from 'i18n-type-safe';

// 1.1
export interface MyInterface {
  welcome: '{{username}}';
  password: string;
  // ... add other translation keys as needed
}

// 1.2
export type TypeSafeLocal = Locale<MyInterface>;
```
### Step 3: Extend the i18next module with custom type options
- *Create  `📂/@types/i18next.d.ts`*


```ts
import { MyInterface } from "./locals";

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en', // default language
    resources: {
      en: MyInterface,
  //  de: MyInterface, 
    }
  }
}

```

### Step 4: Use TypeSafeLocal for Translations
- *Create `📂/locales/en.ts`*

Implement the new TypeSafeLocal type in your translation files.

```ts
import {TypeSafeLocal} from './@types/local.types.ts'

export const en: TypeSafeLocal = {
  welcome: 'Welcome, {{username}}!', ✅ Correct!
  //wellcome: 'Welcome, {{usename}}!', ❌ wrong key or placeholder are detected
}

```

### Step 5: Initialize and configure i18n-type-safe
- *Create `📂/i18n.tsx`*

```ts
import { initI18n } from 'i18n-type-safe';

import {en} from '@/locales/en' // English
// import {de} from '@/locales/de' // German

const resources = {
  en: {
    translation: en,
  },
// de: {
//   translation: de,
// }

}

initI18n({
  resources,
  lng: 'en'  // (default lang)
  // Other custom settings 
});
```
-  Optionally, create a dynamic type for all your language keys, to be used in your project
```ts
export type Lang = keyof typeof resource
```

 ___

## 📜 ***License***

 Licensed under the [GPL-3.0 license](https://github.com/AChristoff/i18n-type-safe/blob/main/LICENSE).  This library is free and open-source.
 
 ___


