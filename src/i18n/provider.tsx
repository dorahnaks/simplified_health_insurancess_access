'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react'
import { type LanguageCode } from './config'
import { translate, type TranslationKey } from './dictionaries'
import {
  getLanguage,
  getServerLanguage,
  setLanguage,
  subscribeLanguage,
} from './store'

interface I18nValue {
  lang: LanguageCode
  setLang: (code: LanguageCode) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeLanguage,
    getLanguage,
    getServerLanguage,
  )

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((code: LanguageCode) => setLanguage(code), [])

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: (key) => translate(lang, key),
    }),
    [lang, setLang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider')
  }

  return context
}
