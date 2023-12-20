# 🛡️ [i18n-type-safe](https://www.npmjs.com/package/i18n-type-safe)

---

- This is a **TypeScript**🔷 setup that will provides type safety for i18n (internationalization) in **React**⚛️ projects utilizing **Vite**, **Expo** or **Next.js**.
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

* *Translation File Protection*
```ts

// locales/en.ts
import { Locale } from '@/@types/locals'

export const en: Locale = {
  welcome: 'Welcome, {{username}}!', ✅ Correct!
  //wellcome: 'Welcome, {{usename}}!', ❌ wrong key or placeholder are detected
}
```
* *In-App Protection*

```ts

// app/index.tsx
 <p>{t('welcome', { username: 'John' })}</p> ✅ Correct!
// <p>{t('wellcome', { usename: 'John' })}</p> ❌ Wrong key or placeholder are detected
```
</br>

___


## 🛠️ Getting Started

### Step 1: Install 
Before starting with the setup, install the required the packages. Run the following command in your project's  📂 - `root/` directory:
```bash
npm i i18n-type-safe
```
```bash
# Also add if not included in your project 
npm i i18next
npm i react-i18next
```


### Step 2: Define Translation Types
- *Create `📂/@types/locals.d.ts`*

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
import { TypeSafeLocal } from "../@types/locals";

export const en: TypeSafeLocal = {
  welcome: 'Welcome, {{username}}!', // ✅ Correct!
  //wellcome: 'Welcome, {{usename}}!', ❌ Wrong key OR/AND placeholder detected!
  password: 'Password', // ✅ Correct!
  //pasword: 'Password', // ❌ Wrong OR missing key detected!
}

```

### Step 5: Initialize and configure
- *Create `📂/i18n.tsx`*

```ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import {en} from './locales/en'
// import {de} from './locales/de' // German

const resources = {
  en: {
    translation: en,
  },
  // de: {
  //   translation: de,
  // }
}

i18n
.use(initReactI18next)
.init({
  compatibilityJSON: 'v3',
  lng: 'en', // (default lang)
  resources,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

```
-  Optionally, create a dynamic type for all your language keys, to be used in your project

```ts
export type Lang = keyof typeof resource
```
### Step 6: Provide instance
 `import '../i18n'` in your project root file `index.tsx` or `App.tsx`


 ### Step 7: Use in-app
 ```ts
 import { useTranslation } from 'react-i18next'

 const { t } = useTranslation();

 <p>{t('welcome', { username: 'John' })}</p> ✅ Correct!
// <p>{t('wellcome', { usename: 'John' })}</p> ❌ Wrong key or placeholder are detected

 ```

### 🎉 Congratulations, you are all set! 
Enjoy a wonderful Developer Experience with 'i18n-type-safe', featuring autocomplete and error detection!                                                          
 ___

## 📜 ***License***

 Licensed under the [GPL-3.0 license](https://github.com/AChristoff/i18n-type-safe/blob/main/LICENSE).  This library is free and open-source.
 
 ___


