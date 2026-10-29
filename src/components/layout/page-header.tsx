'use client'

import Image from 'next/image'
import type { ContentImage } from '@/constants/images'
import { Container } from '@/components/layout/container'
import { ReadAloudButton } from '@/components/a11y/read-aloud'
import { Reveal } from '@/components/ui/reveal'
import { GlobeIcon } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'
import type { TranslationKey } from '@/i18n/dictionaries'
import { cn } from '@/lib/utils'

interface PageHeaderImage extends ContentImage {
  badge?: string
  caption?: string
}

interface PageHeaderProps {
  eyebrow?: string
  eyebrowKey?: TranslationKey
  title: string
  titleKey?: TranslationKey
  description?: React.ReactNode
  descriptionKey?: TranslationKey
  children?: React.ReactNode
  image?: PageHeaderImage
  className?: string
}

export function PageHeader({
  eyebrow,
  eyebrowKey,
  title,
  titleKey,
  description,
  descriptionKey,
  children,
  image,
  className,
}: PageHeaderProps) {
  const { t, lang } = useI18n()
  const eyebrowText = eyebrowKey ? t(eyebrowKey) : eyebrow
  const titleText = titleKey ? t(titleKey) : title
  const descriptionText = descriptionKey ? t(descriptionKey) : description

  return (
    <div
      className={cn(
        'relative isolate overflow-hidden border-b border-line bg-cream',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full bg-maroon-light/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-dots pointer-events-none absolute inset-0 opacity-30"
      />

      <Container className="relative py-10 sm:py-14 lg:py-16">
        <div
          className={cn(
            'grid items-center gap-8',
            image && 'lg:grid-cols-[1.05fr_0.95fr] lg:gap-12',
          )}
        >
          <div>
            {eyebrowText && (
              <p className="animate-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-maroon">
                {eyebrowText}
              </p>
            )}
            <h1 className="animate-fade-up max-w-2xl text-3xl font-semibold leading-[1.08] tracking-tight text-ink text-balance sm:text-4xl [animation-delay:60ms] lg:text-5xl">
              {titleText}
            </h1>
            {descriptionText && (
              <p className="animate-fade-up mt-4 max-w-xl text-base leading-relaxed text-muted [animation-delay:120ms]">
                {descriptionText}
              </p>
            )}
            {children && (
              <div className="animate-fade-up mt-6 [animation-delay:180ms]">
                {children}
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <ReadAloudButton />
              {lang !== 'en' && (
                <p className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/80 px-3 py-1.5 text-[11px] leading-relaxed text-muted">
                  <GlobeIcon className="h-3.5 w-3.5 shrink-0 text-maroon" />
                  {t('common.languageNotice')}
                </p>
              )}
            </div>
          </div>

          {image && (
            <Reveal delay={120} className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 h-20 w-20 rounded-3xl border border-maroon/10 bg-white/70"
              />
              <div className="group relative overflow-hidden rounded-3xl border border-line bg-white shadow-lift">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    style={{ objectPosition: image.position }}
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  />
                  {image.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-maroon-dark shadow-sm backdrop-blur">
                      {image.badge}
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-2 text-[11px] text-muted">
                {image.caption ?? t('common.imageCaption')}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </div>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between',
        className,
      )}
    >
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-maroon">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-semibold tracking-tight text-ink text-balance sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
