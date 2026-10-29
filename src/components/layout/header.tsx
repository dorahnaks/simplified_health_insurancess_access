'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ROUTES } from '@/constants'
import { Logo } from '@/components/layout/logo'
import { Container } from '@/components/layout/container'
import { LanguageGrid, LanguageMenu } from '@/components/layout/language-menu'
import { ReadAloudButton } from '@/components/a11y/read-aloud'
import { buttonStyles } from '@/components/ui/button'
import {
  ChevronDownIcon,
  CompassIcon,
  MenuIcon,
  XIcon,
} from '@/components/ui/icons'
import { useComparison } from '@/hooks/use-comparison'
import { useI18n } from '@/i18n/provider'
import type { TranslationKey } from '@/i18n/dictionaries'
import { cn } from '@/lib/utils'

const PRIMARY_NAV: { key: TranslationKey; href: string }[] = [
  { key: 'nav.plans', href: ROUTES.plans },
  { key: 'nav.compare', href: ROUTES.compare },
  { key: 'nav.guide', href: ROUTES.guide },
  { key: 'nav.insurers', href: ROUTES.insurers },
]

const MORE_NAV: { key: TranslationKey; href: string }[] = [
  { key: 'nav.enrol', href: ROUTES.enrol },
  { key: 'nav.about', href: ROUTES.about },
  { key: 'nav.contact', href: ROUTES.contact },
]

const MOBILE_NAV: { key: TranslationKey; href: string }[] = [
  { key: 'nav.plans', href: ROUTES.plans },
  { key: 'nav.compare', href: ROUTES.compare },
  { key: 'nav.guide', href: ROUTES.guide },
  { key: 'nav.enrol', href: ROUTES.enrol },
  { key: 'nav.insurers', href: ROUTES.insurers },
  { key: 'nav.about', href: ROUTES.about },
  { key: 'nav.contact', href: ROUTES.contact },
]

export function Header() {
  const pathname = usePathname()
  const { t } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const { count } = useComparison()
  const moreRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useEffect(() => {
    if (!moreOpen) return

    const onPointerDown = (event: PointerEvent) => {
      if (!moreRef.current?.contains(event.target as Node)) setMoreOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMoreOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [moreOpen])

  const isActive = (href: string) =>
    href === ROUTES.home ? pathname === href : pathname.startsWith(href)

  const moreActive = MORE_NAV.some((item) => isActive(item.href))

  return (
    <>
      <div className="no-print border-b border-line bg-surface">
        <Container className="flex items-center justify-center gap-2 py-1.5 text-center text-[11px] leading-snug text-muted">
          <span
            aria-hidden="true"
            className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-warning"
          />
          <span>{t('common.demoStrip')}</span>
          <Link
            href={ROUTES.disclaimer}
            className="hidden shrink-0 font-medium text-maroon underline decoration-maroon/30 underline-offset-2 hover:decoration-maroon sm:inline"
          >
            {t('common.learnMore')}
          </Link>
        </Container>
      </div>

      <header className="no-print sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <Container className="flex h-[68px] items-center justify-between gap-3">
          <Logo compact className="shrink-0" />

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'relative inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-medium transition-colors',
                      isActive(item.href)
                        ? 'bg-maroon-light/70 text-maroon-dark'
                        : 'text-muted after:absolute after:inset-x-3 after:bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:rounded-full after:bg-maroon/50 after:transition-transform after:duration-300 after:content-[""] hover:bg-surface hover:text-ink hover:after:scale-x-100',
                    )}
                  >
                    {t(item.key)}
                    {item.href === ROUTES.compare && count > 0 && (
                      <span
                        className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-maroon px-1.5 text-[11px] font-semibold text-white"
                        aria-label={`${count} ${t('common.compareCount')}`}
                      >
                        {count}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li ref={moreRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((open) => !open)}
                  aria-expanded={moreOpen}
                  aria-haspopup="menu"
                  className={cn(
                    'inline-flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium transition-colors',
                    moreActive || moreOpen
                      ? 'bg-maroon-light/70 text-maroon-dark'
                      : 'text-muted hover:bg-surface hover:text-ink',
                  )}
                >
                  {t('nav.more')}
                  <ChevronDownIcon
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200',
                      moreOpen && 'rotate-180',
                    )}
                  />
                </button>
                {moreOpen && (
                  <div
                    role="menu"
                    aria-label={t('nav.more')}
                    className="animate-fade-in absolute left-0 top-full z-50 mt-2 w-52 rounded-2xl border border-line bg-white p-1.5 shadow-lift"
                  >
                    {MORE_NAV.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setMoreOpen(false)}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className={cn(
                          'flex h-10 items-center rounded-xl px-3 text-sm transition-colors',
                          isActive(item.href)
                            ? 'bg-maroon-light text-maroon-dark'
                            : 'text-ink hover:bg-surface',
                        )}
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ReadAloudButton variant="icon" />
            <LanguageMenu />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-ink transition-colors hover:border-maroon/30 hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 lg:hidden"
            >
              <span className="sr-only">
                {menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              </span>
              {menuOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </Container>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="animate-fade-in max-h-[calc(100vh-68px)] overflow-y-auto border-t border-line bg-white lg:hidden"
          >
            <Container className="py-4">
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-0.5">
                  {MOBILE_NAV.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className={cn(
                          'flex h-11 items-center justify-between rounded-xl px-3 text-sm font-medium transition-colors',
                          isActive(item.href)
                            ? 'bg-maroon-light text-maroon-dark'
                            : 'text-ink hover:bg-surface',
                        )}
                      >
                        {t(item.key)}
                        {item.href === ROUTES.compare && count > 0 && (
                          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-maroon px-1.5 text-[11px] font-semibold text-white">
                            {count}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-4 border-t border-line pt-4">
                <LanguageGrid />
              </div>

              <div className="mt-4 border-t border-line pt-4">
                <Link
                  href={ROUTES.plans}
                  onClick={() => setMenuOpen(false)}
                  className={buttonStyles({
                    variant: 'primary',
                    className: 'w-full',
                  })}
                >
                  <CompassIcon className="h-4 w-4" />
                  {t('common.explorePlans')}
                </Link>
                <p className="mt-3 px-1 text-[11px] leading-relaxed text-muted">
                  {t('common.languageNotice')}
                </p>
              </div>
            </Container>
          </div>
        )}
      </header>
    </>
  )
}
