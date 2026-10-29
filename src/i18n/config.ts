export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English', short: 'EN' },
  { code: 'lg', label: 'Luganda', native: 'Oluganda', short: 'LG' },
  { code: 'sw', label: 'Kiswahili', native: 'Kiswahili', short: 'SW' },
  { code: 'nyn', label: 'Runyankole', native: 'Orunyankore', short: 'NY' },
  { code: 'ach', label: 'Acholi', native: 'Leb Acholi', short: 'AC' },
] as const

export type LanguageCode = (typeof LANGUAGES)[number]['code']

export const DEFAULT_LANGUAGE: LanguageCode = 'en'

export function isLanguageCode(value: unknown): value is LanguageCode {
  return LANGUAGES.some((language) => language.code === value)
}

export function languageLabel(code: LanguageCode): string {
  return LANGUAGES.find((language) => language.code === code)?.label ?? 'English'
}
