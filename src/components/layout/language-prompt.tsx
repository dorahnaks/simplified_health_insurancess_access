'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'
import { LANGUAGES } from '@/i18n/config'
import { useI18n } from '@/i18n/provider'
import {
  getLanguagePromptSnapshot,
  getServerLanguagePromptSnapshot,
  subscribeLanguage,
} from '@/i18n/store'
import { Logo } from '@/components/layout/logo'
import { ArrowRightIcon, XIcon } from '@/components/ui/icons'

export function LanguagePrompt() {
  const shouldAsk = useSyncExternalStore(
    subscribeLanguage,
    getLanguagePromptSnapshot,
    getServerLanguagePromptSnapshot,
  )
  const { setLang, t } = useI18n()
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!shouldAsk) return

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLang('en')
        return
      }
      if (event.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable || focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      previousFocus?.focus()
    }
  }, [shouldAsk, setLang])

  if (!shouldAsk) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/45 p-3 backdrop-blur-sm sm:items-center sm:p-6">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-prompt-title"
        className="animate-fade-up max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-lift"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
          <Logo compact />
          <button
            type="button"
            onClick={() => setLang('en')}
            aria-label="Continue in English"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white text-muted transition-colors hover:border-maroon/30 hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>

        <div className="px-5 py-5 sm:px-7 sm:py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-maroon">
            HealthCover Uganda
          </p>
          <h2
            id="language-prompt-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-ink"
          >
            {t('prompt.title')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {t('prompt.description')}
          </p>
          <p className="mt-1.5 text-xs text-muted">
            Londa olulimi lwo · Chagua lugha yako
          </p>

          <div className="mt-5 space-y-2">
            {LANGUAGES.map((language, index) => (
              <button
                key={language.code}
                type="button"
                autoFocus={index === 0}
                onClick={() => setLang(language.code)}
                className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-left transition-colors hover:border-maroon/30 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
              >
                <span>
                  <span className="block text-sm font-semibold text-ink group-hover:text-maroon">
                    {language.native}
                  </span>
                  <span className="block text-xs text-muted">
                    {language.label}
                  </span>
                </span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-maroon" />
              </button>
            ))}
          </div>

          <p className="mt-4 text-[11px] leading-relaxed text-muted">
            {t('prompt.note')}
          </p>
        </div>
      </div>
    </div>
  )
}
