'use client'

import Link from 'next/link'
import { APP_NAME, ROUTES } from '@/constants'
import { Container } from '@/components/layout/container'
import { Logo } from '@/components/layout/logo'
import { InfoIcon } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'
import type { TranslationKey } from '@/i18n/dictionaries'

const exploreLinks: { key: TranslationKey; href: string }[] = [
  { key: 'footer.explorePlans', href: ROUTES.plans },
  { key: 'footer.comparePlans', href: ROUTES.compare },
  { key: 'footer.guide', href: ROUTES.guide },
  { key: 'footer.enrol', href: ROUTES.enrol },
]

const supportLinks: { key: TranslationKey; href: string }[] = [
  { key: 'footer.insurers', href: ROUTES.insurers },
  { key: 'footer.about', href: ROUTES.about },
  { key: 'footer.contact', href: ROUTES.contact },
]

const legalLinks: { key: TranslationKey; href: string }[] = [
  { key: 'footer.privacy', href: ROUTES.privacy },
  { key: 'footer.disclaimer', href: ROUTES.disclaimer },
]

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="no-print mt-auto bg-maroon-dark text-white">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo variant="inverse" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {t('footer.tagline')}
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80">
              <InfoIcon className="h-3.5 w-3.5" />
              {t('footer.infoOnly')}
            </p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              {t('footer.explore')}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-support">
            <h2
              id="footer-support"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              {t('footer.support')}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal">
            <h2
              id="footer-legal"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              {t('footer.legal')}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 rounded-xl border border-white/15 bg-white/5 p-4 text-xs leading-relaxed text-white/65 sm:p-5">
          <p>
            <strong className="font-semibold text-white">
              {t('footer.important')}
            </strong>{' '}
            {t('footer.note')}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; 2026 {APP_NAME}. {t('footer.copyrightNote')}
          </p>
          <p>{t('footer.builtFor')}</p>
        </div>
      </Container>
    </footer>
  )
}
