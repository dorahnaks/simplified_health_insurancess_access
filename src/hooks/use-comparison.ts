'use client'

import { useSyncExternalStore } from 'react'
import { COMPARISON_LIMIT } from '@/lib/insurance'

const STORAGE_KEY = 'healthcover:comparison:v1'
const EMPTY: string[] = []

let snapshot: string[] = EMPTY
let loaded = false
let listening = false
const listeners = new Set<() => void>()

function readStorage(): string[] {
  if (typeof window === 'undefined') return EMPTY
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return EMPTY
    const ids = parsed.filter((id): id is string => typeof id === 'string')
    return ids.slice(0, COMPARISON_LIMIT)
  } catch {
    return EMPTY
  }
}

function emit() {
  for (const listener of listeners) listener()
}

function ensureLoaded() {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  snapshot = readStorage()

  if (!listening) {
    listening = true
    window.addEventListener('storage', (event) => {
      if (event.key === STORAGE_KEY) {
        snapshot = readStorage()
        emit()
      }
    })
  }
}

function subscribe(listener: () => void) {
  ensureLoaded()
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot() {
  ensureLoaded()
  return snapshot
}

function getServerSnapshot() {
  return EMPTY
}

function update(next: string[]) {
  snapshot = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Storage can be unavailable in private browsing; keep in-memory state.
  }
  emit()
}

export function useComparison() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const has = (id: string) => ids.includes(id)
  const isFull = ids.length >= COMPARISON_LIMIT

  const add = (id: string) => {
    if (ids.includes(id) || ids.length >= COMPARISON_LIMIT) return
    update([...ids, id])
  }

  const remove = (id: string) => {
    update(ids.filter((entry) => entry !== id))
  }

  const toggle = (id: string) => {
    if (ids.includes(id)) {
      remove(id)
    } else {
      add(id)
    }
  }

  const clear = () => update([])

  return {
    ids,
    count: ids.length,
    limit: COMPARISON_LIMIT,
    has,
    add,
    remove,
    toggle,
    clear,
    isFull,
  }
}
