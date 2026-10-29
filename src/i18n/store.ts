import {
  DEFAULT_LANGUAGE,
  isLanguageCode,
  type LanguageCode,
} from './config'

const STORAGE_KEY = 'healthcover:language:v1'
const COOKIE_KEY = 'hc-lang'
const CHOSEN_KEY = 'healthcover:language-chosen:v1'

let cached: LanguageCode | null = null
const listeners = new Set<() => void>()

function readStored(): LanguageCode {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguageCode(stored)) return stored

    const cookie = document.cookie
      .split('; ')
      .find((entry) => entry.startsWith(`${COOKIE_KEY}=`))
      ?.split('=')[1]

    if (isLanguageCode(cookie)) return cookie
  } catch {
    // Storage can be unavailable in private browsing; fall back to English.
  }

  return DEFAULT_LANGUAGE
}

function emit() {
  listeners.forEach((listener) => listener())
}

export function getLanguage(): LanguageCode {
  if (cached === null) cached = readStored()
  return cached
}

export function getServerLanguage(): LanguageCode {
  return DEFAULT_LANGUAGE
}

function hasChosenLanguage(): boolean {
  if (typeof window === 'undefined') return true

  try {
    return window.localStorage.getItem(CHOSEN_KEY) === '1'
  } catch {
    return true
  }
}

export function getLanguagePromptSnapshot(): boolean {
  return !hasChosenLanguage()
}

export function getServerLanguagePromptSnapshot(): boolean {
  return false
}

export function subscribeLanguage(listener: () => void) {
  listeners.add(listener)

  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      cached = readStored()
      emit()
    }
  }

  window.addEventListener('storage', onStorage)

  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

export function setLanguage(code: LanguageCode) {
  cached = code

  try {
    window.localStorage.setItem(STORAGE_KEY, code)
  } catch {
    // Keeping the in-memory choice is enough when storage is blocked.
  }

  try {
    window.localStorage.setItem(CHOSEN_KEY, '1')
  } catch {
    // The cookie below still remembers the choice for the next visit.
  }

  document.cookie = `${COOKIE_KEY}=${code}; path=/; max-age=31536000; SameSite=Lax`
  emit()
}
