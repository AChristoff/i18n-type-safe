/**
 * ------------------------------------------------------------------
 * TRANSLATIONS INTERFACE
 * ------------------------------------------------------------------
 * 
 * @Placeholders usage:
 * @CORRECT  welcome: '{{username}}'
 * @WRONG    welcome: 'Welcome, {{username}}!'
 * 
 * ------------------------------------------------------------------
 */

export interface ILocale {
  welcome: '{{username}}'
  password: string
}


/**
 * ------------------------------------------------------------------
 * ADD TYPE SAFETY FOR PLACEHOLDERS IN TRANSLATIONS
 * ------------------------------------------------------------------
 */

type ExtractPlaceholders<T extends string> =
  T extends `${string}{{${infer Param}}}${infer Rest}`
    ? { [K in Param]: string } & ExtractPlaceholders<Rest>
    : {}

type MatchPlaceholders<
  T extends string,
  Placeholders extends object
> = T extends `${infer Start}{{${infer Key}}}${infer Rest}`
  ? Key extends keyof Placeholders
    ? `${string}{{${Key}}}${string}`
    : never
  : T extends string
  ? string
  : never

type WithPlaceholders<T> = {
  [P in keyof T]: T[P] extends string
    ? MatchPlaceholders<T[P], ExtractPlaceholders<T[P]>>
    : WithPlaceholders<T[P]>
}

// Add type checking for placeholders in "t" function t('welcome', { username: 'John' })
export type Locale<T extends ILocale = ILocale> = WithPlaceholders<T>;
