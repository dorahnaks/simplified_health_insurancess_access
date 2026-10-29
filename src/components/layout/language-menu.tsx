'use client'

import { useEffect, useRef, useState } from 'react'
import { LANGUAGES } from '@/i18n/config'
import { useI18n } from '@/i18n/provider'
import {
  CheckIcon,
  ChevronDownIcon,
  GlobeIcon,
} from '@/components/ui/icons'
import { cn } from '@/lib/utils'

export function LanguageMenu({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const current = LANGUAGES.find((language) => language.code === lang)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={wrapperRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${t('nav.language')}: ${current?.native ?? 'English'}`}
        className={cn(
          'inline-flex h-10 items-center gap-1.5 rounded-xl border px-2.5 text-xs font-semibold transition-colors sm:px-3',
          open
            ? 'border-maroon/35 bg-maroon-light text-maroon-dark'
            : 'border-line bg-white text-ink hover:border-maroon/30 hover:text-maroon',
        )}
      >
        <GlobeIcon className="h-4 w-4" />
        <span className="hidden sm:inline">{current?.short ?? 'EN'}</span>
        <ChevronDownIcon
          className={cn(
            'h-3.5 w-3.5 text-muted transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t('nav.language')}
          className="animate-fade-in absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-lift"
        >
          {LANGUAGES.map((language) => {
            const selected = language.code === lang
            return (
              <button
                key={language.code}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  setLang(language.code)
                  setOpen(false)
                }}
                className={cn(
                  'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left transition-colors',
                  selected
                    ? 'bg-maroon-light text-maroon-dark'
                    : 'text-ink hover:bg-surface',
                )}
              >
                <span>
                  <span className="block text-sm font-medium">
                    {language.native}
                  </span>
                  <span className="block text-[11px] text-muted">
                    {language.label}
                  </span>
                </span>
                {selected && <CheckIcon className="h-4 w-4 shrink-0" />}
              </button>
            )
          })}
          <p className="mt-1 border-t border-line px-3 pb-1.5 pt-2.5 text-[11px] leading-relaxed text-muted">
            {t('common.languageNote')}
          </p>
        </div>
      )}
    </div>
  )
}

export function LanguageGrid() {
  const { lang, setLang, t } = useI18n()

  return (
    <div>
      <p className="px-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
        {t('nav.language')}
      </p>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {LANGUAGES.map((language) => {
          const selected = language.code === lang
          return (
            <button
              key={language.code}
              type="button"
              onClick={() => setLang(language.code)}
              aria-pressed={selected}
              className={cn(
                'flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors',
                selected
                  ? 'border-maroon/30 bg-maroon-light text-maroon-dark'
                  : 'border-line bg-white text-ink hover:border-maroon/25',
              )}
            >
              <span className="min-w-0">
                <span className="block truncate font-medium">
                  {language.native}
                </span>
                <span className="block text-[11px] text-muted">
                  {language.label}
                </span>
              </span>
              {selected && <CheckIcon className="h-4 w-4 shrink-0" />}
            </button>
          )
        })}
      </div>
      <p className="mt-2 px-1 text-[11px] leading-relaxed text-muted">
        {t('common.languageNote')}
      </p>
    </div>
  )
}
