'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { LanguageCode } from '@/i18n/config'
import { useI18n } from '@/i18n/provider'
import {
  PauseIcon,
  PlayIcon,
  VolumeIcon,
  XIcon,
} from '@/components/ui/icons'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'reading' | 'paused'

const VOICE_LANG: Record<LanguageCode, string> = {
  en: 'en-GB',
  lg: 'lg-UG',
  sw: 'sw-KE',
  nyn: 'nyn-UG',
  ach: 'ach-UG',
}

const VOICE_PREFERENCES: Record<LanguageCode, string[]> = {
  en: ['en-ug', 'en-gb', 'en-us', 'en'],
  lg: ['lg-ug', 'lg'],
  sw: ['sw-ke', 'sw-tz', 'sw'],
  nyn: ['nyn-ug', 'nyn', 'nyo', 'ny'],
  ach: ['ach-ug', 'ach'],
}

const FALLBACK_PREFERENCES = ['en-gb', 'en-us', 'en']

function normalizeLang(value: string): string {
  return value.toLowerCase().replace('_', '-')
}

function findVoice(
  voices: SpeechSynthesisVoice[],
  prefixes: string[],
): SpeechSynthesisVoice | null {
  for (const prefix of prefixes) {
    const match = voices.find((voice) =>
      normalizeLang(voice.lang).startsWith(prefix),
    )
    if (match) return match
  }
  return null
}

function loadVoices(timeout = 1500): Promise<SpeechSynthesisVoice[]> {
  const synth = window.speechSynthesis
  const existing = synth.getVoices()
  if (existing.length > 0) return Promise.resolve(existing)

  return new Promise((resolve) => {
    let settled = false
    const finish = () => {
      if (settled) return
      settled = true
      synth.removeEventListener('voiceschanged', finish)
      resolve(synth.getVoices())
    }

    synth.addEventListener('voiceschanged', finish)
    window.setTimeout(finish, timeout)
  })
}

function chunkText(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]*/g) ?? [text]
  const chunks: string[] = []
  let current = ''

  for (const raw of sentences) {
    const sentence = raw.trim()
    if (!sentence) continue

    if (sentence.length > 220) {
      if (current) {
        chunks.push(current)
        current = ''
      }
      const words = sentence.split(' ')
      let part = ''
      for (const word of words) {
        if ((part + ' ' + word).trim().length > 220) {
          if (part) chunks.push(part.trim())
          part = word
        } else {
          part = `${part} ${word}`.trim()
        }
      }
      if (part) chunks.push(part.trim())
      continue
    }

    if ((current + ' ' + sentence).trim().length > 220) {
      if (current) chunks.push(current)
      current = sentence
    } else {
      current = `${current} ${sentence}`.trim()
    }
  }

  if (current) chunks.push(current.trim())
  return chunks
}

function readPageText(): string {
  const main = document.getElementById('main-content')
  if (!main) return ''

  const clone = main.cloneNode(true) as HTMLElement
  clone
    .querySelectorAll('[aria-hidden="true"], .no-print, script, style')
    .forEach((node) => node.remove())

  return (clone.innerText || clone.textContent || '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function ReadAloudButton({
  variant = 'inline',
  className,
}: {
  variant?: 'inline' | 'icon'
  className?: string
}) {
  const { lang, t } = useI18n()
  const pathname = usePathname()
  const [status, setStatus] = useState<Status>('idle')
  const [announcement, setAnnouncement] = useState('')
  const [usingEnglishVoice, setUsingEnglishVoice] = useState(false)
  const runRef = useRef(0)
  const statusRef = useRef<Status>('idle')
  const langRef = useRef<LanguageCode>(lang)

  const updateStatus = useCallback((next: Status) => {
    statusRef.current = next
    setStatus(next)
  }, [])

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel()
    }
  }, [])

  useEffect(() => {
    if (langRef.current === lang) return
    langRef.current = lang

    if (statusRef.current !== 'idle') {
      runRef.current += 1
      window.speechSynthesis?.cancel()
      updateStatus('idle')
      setAnnouncement('')
      setUsingEnglishVoice(false)
    }
  }, [lang, updateStatus])

  useEffect(() => {
    window.speechSynthesis?.cancel()
    runRef.current += 1
    queueMicrotask(() => {
      updateStatus('idle')
      setAnnouncement('')
      setUsingEnglishVoice(false)
    })
  }, [pathname, updateStatus])

  const stop = () => {
    runRef.current += 1
    window.speechSynthesis?.cancel()
    updateStatus('idle')
    setUsingEnglishVoice(false)
    setAnnouncement(t('a11y.stopped'))
  }

  const start = async () => {
    if (!('speechSynthesis' in window)) {
      setAnnouncement(t('a11y.unsupported'))
      return
    }

    const text = readPageText()
    if (!text) {
      setAnnouncement(t('a11y.unsupported'))
      return
    }

    const synth = window.speechSynthesis
    synth.cancel()
    const run = runRef.current + 1
    runRef.current = run
    const chunks = chunkText(text)
    const requestedLang = lang

    updateStatus('reading')
    setAnnouncement(t('a11y.reading'))

    const voices = await loadVoices()
    if (runRef.current !== run) return

    const nativeVoice = findVoice(voices, VOICE_PREFERENCES[requestedLang] ?? [])
    const preferred = nativeVoice ?? findVoice(voices, FALLBACK_PREFERENCES)
    const utteranceLang = preferred?.lang ?? VOICE_LANG[requestedLang] ?? 'en-GB'

    const englishFallback = requestedLang !== 'en' && !nativeVoice
    setUsingEnglishVoice(englishFallback)
    if (englishFallback) {
      setAnnouncement(`${t('a11y.reading')} ${t('a11y.voiceNote')}`)
    }

    let index = 0
    const speakNext = () => {
      if (runRef.current !== run) return

      if (index >= chunks.length) {
        updateStatus('idle')
        setAnnouncement('')
        return
      }

      const utterance = new SpeechSynthesisUtterance(chunks[index])
      index += 1
      utterance.lang = utteranceLang
      utterance.rate = 0.95
      if (preferred) utterance.voice = preferred

      utterance.onend = speakNext
      utterance.onerror = () => {
        if (runRef.current === run) {
          updateStatus('idle')
          setAnnouncement('')
        }
      }

      synth.speak(utterance)
    }

    speakNext()
  }

  const toggle = () => {
    const synth = window.speechSynthesis

    if (status === 'idle') {
      void start()
    } else if (status === 'reading') {
      synth.pause()
      updateStatus('paused')
      setAnnouncement(t('a11y.paused'))
    } else {
      synth.resume()
      updateStatus('reading')
      setAnnouncement(t('a11y.reading'))
    }
  }

  const label =
    status === 'reading'
      ? t('a11y.pause')
      : status === 'paused'
        ? t('a11y.resume')
        : t('a11y.listen')

  return (
    <div className={cn('inline-flex items-center gap-1.5', className)}>
      <button
        type="button"
        onClick={toggle}
        aria-pressed={status !== 'idle'}
        title={t('a11y.voiceNote')}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2',
          variant === 'icon' ? 'h-10 w-10' : 'h-9 px-3',
          status === 'idle'
            ? 'border-line bg-white text-ink hover:border-maroon/30 hover:text-maroon'
            : 'border-maroon/30 bg-maroon-light text-maroon-dark',
        )}
      >
        {status === 'reading' ? (
          <PauseIcon className="h-4 w-4" />
        ) : status === 'paused' ? (
          <PlayIcon className="h-4 w-4" />
        ) : (
          <VolumeIcon className="h-4 w-4" />
        )}
        <span className={variant === 'icon' ? 'sr-only' : 'text-sm font-medium'}>
          {label}
        </span>
      </button>

      {status !== 'idle' && (
        <button
          type="button"
          onClick={stop}
          aria-label={t('a11y.stop')}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white text-muted transition-colors hover:border-maroon/30 hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
        >
          <XIcon className="h-4 w-4" />
        </button>
      )}

      {variant === 'inline' && usingEnglishVoice && status !== 'idle' && (
        <span className="max-w-[18rem] text-[11px] leading-snug text-muted">
          {t('a11y.voiceNote')}
        </span>
      )}

      <span className="sr-only" role="status" aria-live="polite">
        {announcement}
      </span>
    </div>
  )
}
