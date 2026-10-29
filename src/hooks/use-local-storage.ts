'use client'

import { useCallback, useMemo, useSyncExternalStore } from 'react'

const listeners = new Map<string, Set<() => void>>()

function subscribeToKey(key: string, callback: () => void) {
  const existing = listeners.get(key)
  const set = existing ?? new Set<() => void>()
  if (!existing) listeners.set(key, set)
  set.add(callback)
  return () => {
    set.delete(callback)
    if (set.size === 0) listeners.delete(key)
  }
}

function emit(key: string) {
  listeners.get(key)?.forEach((callback) => callback())
}

function read(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

/**
 * Persist state to localStorage, synced across tabs.
 * Server and hydrated markup use the initial value; the stored value is applied
 * once React reads the client snapshot.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const unsubscribe = subscribeToKey(key, onStoreChange)
      const onStorage = (event: StorageEvent) => {
        if (event.key === key) onStoreChange()
      }
      window.addEventListener('storage', onStorage)
      return () => {
        unsubscribe()
        window.removeEventListener('storage', onStorage)
      }
    },
    [key],
  )

  const getSnapshot = useCallback(() => read(key), [key])
  const getServerSnapshot = useCallback(() => null, [])
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const value = useMemo(() => {
    if (raw === null) return initialValue
    try {
      return JSON.parse(raw) as T
    } catch {
      return initialValue
    }
  }, [raw, initialValue])

  const setValue = (update: T | ((prev: T) => T)) => {
    const next = update instanceof Function ? update(value) : update
    try {
      window.localStorage.setItem(key, JSON.stringify(next))
      emit(key)
    } catch {
      // ignore write errors (private browsing, quota exceeded)
    }
  }

  return [value, setValue]
}
