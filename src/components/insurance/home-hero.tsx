'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '@/constants'
import { Container } from '@/components/layout/container'
import { useI18n } from '@/i18n/provider'
import { ReadAloudButton } from '@/components/a11y/read-aloud'
import { buttonStyles } from '@/components/ui/button'
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LockIcon,
  SearchIcon,
  ShieldCheckIcon,
  XCircleIcon,
} from '@/components/ui/icons'

export function HomeHero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-28 h-[420px] w-[420px] rounded-full bg-maroon-light/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-cream-deep blur-3xl"
      />

      <Container className="relative grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 lg:py-20">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-maroon/15 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-maroon">
            <ShieldCheckIcon className="h-3.5 w-3.5" />
            {t('home.eyebrow')}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.06] tracking-tight text-ink text-balance sm:text-5xl xl:text-6xl">
            {t('home.titleA')}
            <span className="block text-maroon">{t('home.titleB')}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t('home.description')}
          </p>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
            <Link
              href={ROUTES.plans}
              className={buttonStyles({
                size: 'lg',
                className: 'sm:px-7',
              })}
            >
              {t('common.explorePlans')}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href={ROUTES.compare}
              className={buttonStyles({
                variant: 'outline',
                size: 'lg',
                className: 'sm:px-7',
              })}
            >
              {t('common.comparePlans')}
            </Link>
          </div>

          <form
            action={ROUTES.plans}
            role="search"
            className="mt-7 flex max-w-xl flex-col gap-2 sm:flex-row"
          >
            <div className="relative flex-1">
              <label htmlFor="home-plan-search" className="sr-only">
                {t('common.searchPlaceholder')}
              </label>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
              <input
                id="home-plan-search"
                name="q"
                type="search"
                placeholder={t('common.searchPlaceholder')}
                className="h-12 w-full rounded-xl border border-line bg-white pl-11 pr-4 text-sm text-ink shadow-sm placeholder:text-muted/70 focus:border-maroon/40 focus:outline-none focus:ring-2 focus:ring-maroon/20 sm:h-[3.25rem] sm:text-base"
              />
            </div>
            <button
              type="submit"
              className={buttonStyles({
                size: 'lg',
                className: 'h-12 sm:h-[3.25rem]',
              })}
            >
              {t('common.search')}
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs leading-relaxed text-muted">
            <p className="flex items-center gap-2">
              <LockIcon className="h-3.5 w-3.5 shrink-0" />
              {t('common.noAccount')}
            </p>
            <ReadAloudButton />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line/80 bg-maroon-light shadow-lift sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              src="/images/hero-family.jpg"
              alt="A family walking together in a Ugandan neighbourhood"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-[64%_38%]"
            />
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-maroon-dark shadow-sm backdrop-blur">
              <CheckCircleIcon className="h-3.5 w-3.5 text-success" />
              {t('home.badge')}
            </span>
          </div>

          <div className="mt-4 rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5 lg:absolute lg:-bottom-8 lg:-left-6 lg:right-10 lg:mt-0 lg:shadow-lift">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-maroon">
                  {t('home.card.eyebrow')}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-ink">
                  {t('home.card.title')}
                </p>
              </div>
              <Link
                href={`${ROUTES.plans}/nile-jua-starter`}
                className="inline-flex shrink-0 items-center gap-1 rounded-lg px-1 py-1 text-xs font-medium text-maroon hover:text-maroon-dark"
              >
                {t('home.card.link')}
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            <ul className="mt-3 space-y-2.5">
              <li className="flex gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
                  <CheckCircleIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-success">
                    {t('status.covered')}
                  </p>
                  <p className="text-xs leading-relaxed text-muted">
                    {t('home.card.covered')}
                  </p>
                </div>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-danger-soft text-danger">
                  <XCircleIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-danger">
                    {t('status.notCovered')}
                  </p>
                  <p className="text-xs leading-relaxed text-muted">
                    {t('home.card.notCovered')}
                  </p>
                </div>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warning-soft text-warning">
                  <AlertTriangleIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-warning">
                    {t('status.checkFirst')}
                  </p>
                  <p className="text-xs leading-relaxed text-muted">
                    {t('home.card.checkFirst')}
                  </p>
                </div>
              </li>
            </ul>

            <p className="mt-3 border-t border-line pt-2.5 text-[11px] leading-relaxed text-muted">
              {t('home.card.note')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
