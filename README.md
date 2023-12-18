# i18n-type-safe

A TypeScript library that provides type safety for i18n (internationalization) and i18next in React projects. Ensure that your translations and placeholders are type-checked, allowing you to catch translation-related bugs at compile-time.

---

## 🛡️ **Translation File Protection**

**Protects Against Wrong/Missing Keys in Translation Files**
Say goodbye to the frustration of missing or incorrect translation keys. This package ensures that all keys are valid and accounted for.

**Prevents Wrong/Missing {{Placeholders}} in Translation Files**
Never worry about placeholders causing issues. The package validates that all placeholders are correctly used in your translation strings.

---

## 🚀 **In-App Protection**

**Protects Against Wrong Keys When Using the `t()` Function in Your App**
When you use the `t()` function in your app, the package makes sure that you're referencing valid translation keys.

**Prevents Wrong {{Placeholders}} When Using the `t()` Function in Your App**
Likewise, the package ensures that your placeholders are used correctly within the `t()` function.

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
  //wellcome: 'Welcome, {{usename}}!', ❌ wrong key or plaseholder are detected
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

🚀 *Don't let translation errors undermine your app's quality! Choose `i18n-type-safe`.*

---

```
i18n-type-safe/
│   .gitignore   
│   .package.json  
│   .tsconfig.json 
│   README.md
│
│
└─── src/
│     │
│     └─── locales/
│     │     │
│     │     └─── en.ts
│     │
│     └─── @types/
│           │
│           └─── i18next.d.ts
│           │
│           └─── locals.d.ts


```

## 📜 **License**

 Licensed under the [GPL-3.0 license](https://github.com/AChristoff/i18n-type-safe/blob/main/LICENSE).  This library is free and open-source.