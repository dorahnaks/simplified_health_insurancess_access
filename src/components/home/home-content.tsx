'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Plan } from '@/types/insurance'
import { ROUTES } from '@/constants'
import { CATEGORY_IMAGES, PAGE_IMAGES } from '@/constants/images'
import { faqs } from '@/data/glossary'
import { Container } from '@/components/layout/container'
import { SectionHeading } from '@/components/layout/page-header'
import { HomeHero } from '@/components/insurance/home-hero'
import { PlanCard } from '@/components/insurance/plan-card'
import { DemoDataBanner } from '@/components/insurance/demo-banner'
import { StatusPill } from '@/components/insurance/status-pill'
import { statusItems } from '@/components/insurance/status-explainer'
import { buttonStyles } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { useI18n } from '@/i18n/provider'
import type { TranslationKey } from '@/i18n/dictionaries'
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClipboardListIcon,
  CompassIcon,
  ScaleIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
  UserIcon,
  WalletIcon,
} from '@/components/ui/icons'

const categories: {
  key: TranslationKey
  descKey: TranslationKey
  href: string
  imageKey: keyof typeof CATEGORY_IMAGES
  icon: typeof UserIcon
}[] = [
  {
    key: 'home.category.individual',
    descKey: 'home.category.individualDesc',
    href: `${ROUTES.plans}?category=individual`,
    imageKey: 'individual',
    icon: UserIcon,
  },
  {
    key: 'home.category.family',
    descKey: 'home.category.familyDesc',
    href: `${ROUTES.plans}?category=family`,
    imageKey: 'family',
    icon: UsersIcon,
  },
  {
    key: 'home.category.self',
    descKey: 'home.category.selfDesc',
    href: `${ROUTES.plans}?category=self-employed`,
    imageKey: 'self-employed',
    icon: BriefcaseIcon,
  },
]

const steps: {
  step: string
  key: TranslationKey
  descKey: TranslationKey
  linkKey: TranslationKey
  href: string
  icon: typeof CompassIcon
}[] = [
  {
    step: '01',
    key: 'home.step.explore',
    descKey: 'home.step.exploreDesc',
    linkKey: 'home.step.exploreLink',
    href: ROUTES.plans,
    icon: CompassIcon,
  },
  {
    step: '02',
    key: 'home.step.compare',
    descKey: 'home.step.compareDesc',
    linkKey: 'home.step.compareLink',
    href: ROUTES.compare,
    icon: ScaleIcon,
  },
  {
    step: '03',
    key: 'home.step.enrol',
    descKey: 'home.step.enrolDesc',
    linkKey: 'home.step.enrolLink',
    href: ROUTES.enrol,
    icon: ClipboardListIcon,
  },
]

const benefits: {
  key: TranslationKey
  descKey: TranslationKey
  icon: typeof SearchIcon
}[] = [
  {
    key: 'home.why.plain.title',
    descKey: 'home.why.plain.desc',
    icon: SearchIcon,
  },
  {
    key: 'home.why.exclusions.title',
    descKey: 'home.why.exclusions.desc',
    icon: ShieldCheckIcon,
  },
  {
    key: 'home.why.contacts.title',
    descKey: 'home.why.contacts.desc',
    icon: WalletIcon,
  },
]

export function HomeContent({ featuredPlans }: { featuredPlans: Plan[] }) {
  const { t } = useI18n()
  const homeFaqs = faqs.slice(0, 4)

  return (
    <>
      <HomeHero />

      <section className="border-b border-line bg-white">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            eyebrow={t('home.categories.eyebrow')}
            title={t('home.categories.title')}
            description={t('home.categories.description')}
          />
          <Reveal className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const Icon = category.icon
                const image = CATEGORY_IMAGES[category.imageKey]
                return (
                  <Link
                    key={category.key}
                    href={category.href}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-lift"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                        style={{ objectPosition: image.position }}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-maroon-light text-maroon">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h3 className="text-base font-semibold text-ink">
                          {t(category.key)}
                        </h3>
                      </div>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                        {t(category.descKey)}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-maroon">
                        {t('common.browsePlans')}
                        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line bg-surface">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            eyebrow={t('home.how.eyebrow')}
            title={t('home.how.title')}
            description={t('home.how.description')}
          />
          <Reveal className="mt-8">
            <ol className="grid gap-5 md:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <li
                    key={step.step}
                    className="group relative flex flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition-[border-color,box-shadow] duration-200 hover:border-maroon/25 hover:shadow-lift"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-maroon text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-3xl font-semibold tracking-tight text-line"
                      >
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">
                      {t(step.key)}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                      {t(step.descKey)}
                    </p>
                    <Link
                      href={step.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-maroon hover:text-maroon-dark"
                    >
                      {t(step.linkKey)}
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                )
              })}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            eyebrow={t('home.featured.eyebrow')}
            title={t('home.featured.title')}
            description={t('home.featured.description')}
            action={
              <Link
                href={ROUTES.plans}
                className={buttonStyles({ variant: 'outline' })}
              >
                {t('common.viewAllPlans')}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            }
          />
          <DemoDataBanner className="mt-6" />
          <Reveal className="mt-6">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuredPlans.map((plan, index) => (
                <PlanCard key={plan.id} plan={plan} index={index} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-line bg-surface">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-maroon">
                {t('home.why.eyebrow')}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {t('home.why.title')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {t('home.why.description')}
              </p>
              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon
                  return (
                    <li key={benefit.key} className="flex gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-maroon ring-1 ring-line">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-ink">
                          {t(benefit.key)}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {t(benefit.descKey)}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
              <div className="relative aspect-[16/9]">
                <Image
                  src={PAGE_IMAGES.guide.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  style={{ objectPosition: PAGE_IMAGES.guide.position }}
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-maroon-light text-maroon">
                    <SparklesIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-maroon">
                      {t('home.finder.eyebrow')}
                    </p>
                    <h3 className="text-lg font-semibold tracking-tight text-ink">
                      {t('home.finder.title')}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {t('home.finder.description')}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {(
                    [
                      'home.finder.noMedical',
                      'home.finder.noId',
                      'home.finder.noSuitability',
                    ] as const
                  ).map((key) => (
                    <li key={key} className="flex items-start gap-2">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${ROUTES.plans}#plan-finder`}
                  className={buttonStyles({ className: 'mt-5 w-full sm:w-auto' })}
                >
                  {t('home.finder.cta')}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-white">
        <Container className="py-14 sm:py-16">
          <SectionHeading
            eyebrow={t('home.status.eyebrow')}
            title={t('home.status.title')}
            description={t('home.status.description')}
          />
          <Reveal className="mt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {statusItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-line bg-surface p-5"
                >
                  <StatusPill status={item.status} />
                  <h3 className="mt-3 text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow={t('home.faq.eyebrow')}
              title={t('home.faq.title')}
              description={t('home.faq.description')}
              action={
                <Link
                  href={ROUTES.guide}
                  className={buttonStyles({ variant: 'outline' })}
                >
                  {t('common.openGuide')}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              }
            />
            <div className="space-y-3">
              {homeFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-line bg-white p-4 shadow-card sm:p-5"
                >
                  <summary className="flex list-none items-center justify-between gap-4 text-sm font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2">
                    {faq.question}
                    <ChevronDownIcon className="h-4 w-4 shrink-0 text-maroon transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="py-14 sm:py-16">
          <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-lift lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center bg-maroon-dark p-7 text-white sm:p-10 lg:p-12">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t('home.cta.title')}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                {t('home.cta.description')}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                {(
                  [
                    'home.cta.noAccount',
                    'home.cta.fourPlans',
                    'home.cta.direct',
                  ] as const
                ).map((key) => (
                  <li key={key} className="flex items-center gap-2">
                    <CheckCircleIcon className="h-4 w-4 shrink-0 text-white/70" />
                    {t(key)}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href={ROUTES.plans}
                  className={buttonStyles({
                    variant: 'inverse',
                    size: 'lg',
                    className: 'w-full sm:w-auto',
                  })}
                >
                  {t('common.explorePlans')}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link
                  href={ROUTES.enrol}
                  className={buttonStyles({
                    variant: 'on-dark',
                    size: 'lg',
                    className: 'w-full sm:w-auto',
                  })}
                >
                  {t('common.prepareToEnrol')}
                </Link>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-full">
              <Image
                src="/images/community-market.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="object-cover object-[62%_40%]"
              />
            </div>
          </div>
          <p className="mt-3 text-[11px] text-muted">
            {t('common.imageCaption')}
          </p>
        </Container>
      </section>
    </>
  )
}
