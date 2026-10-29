'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Plan } from '@/types/insurance'
import {
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
} from '@/components/ui/icons'
import { buttonStyles } from '@/components/ui/button'
import { CompareToggle } from '@/components/insurance/compare-toggle'
import { DemoTag } from '@/components/insurance/demo-banner'
import { useComparison } from '@/hooks/use-comparison'
import { useI18n } from '@/i18n/provider'
import type { TranslationKey } from '@/i18n/dictionaries'
import {
  formatPremium,
  getInsurerForPlan,
} from '@/lib/insurance'
import { getPlanImage } from '@/constants/images'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/constants'

const CATEGORY_KEYS: Record<string, TranslationKey> = {
  individual: 'category.individual',
  family: 'category.family',
  'self-employed': 'category.self',
}

interface PlanCardProps {
  plan: Plan
  reasons?: string[]
  className?: string
  index?: number
}

export function PlanCard({
  plan,
  reasons,
  className,
  index = 0,
}: PlanCardProps) {
  const insurer = getInsurerForPlan(plan)
  const image = getPlanImage(plan)
  const { has } = useComparison()
  const { t } = useI18n()
  const selected = has(plan.id)
  const categoryKey = CATEGORY_KEYS[plan.intendedFor[0] ?? 'individual']

  return (
    <article
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
      className={cn(
        'group animate-fade-up relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-card transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-maroon/30 hover:shadow-lift',
        selected && 'border-maroon/45 ring-1 ring-maroon/15',
        className,
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={image.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"
          style={{ objectPosition: image.position }}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-maroon-dark/60 via-maroon-dark/5 to-transparent"
        />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-maroon-dark backdrop-blur">
            {categoryKey ? t(categoryKey) : ''}
          </span>
          {plan.isDemonstration && <DemoTag />}
        </div>
        <p className="absolute bottom-3 left-4 right-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90">
          {insurer.name}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight text-ink">
          <Link
            href={`${ROUTES.plans}/${plan.id}`}
            className="rounded-sm transition-colors hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
          >
            {plan.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {plan.description}
        </p>

        <div className="mt-4 rounded-xl bg-surface px-3.5 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            {t('plan.premium')}
          </p>
          {plan.premium ? (
            <p className="mt-0.5 text-lg font-semibold tracking-tight text-ink">
              {formatPremium(plan.premium)}
            </p>
          ) : (
            <p className="mt-0.5 text-sm font-semibold text-warning">
              {t('plan.premiumMissing')}
            </p>
          )}
        </div>

        <div className="mt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            {t('plan.keyBenefits')}
          </p>
          <ul className="mt-2 space-y-1.5">
            {plan.benefits.slice(0, 3).map((benefit, benefitIndex) => (
              <li
                key={`${benefit.category}-${benefitIndex}`}
                className="flex gap-2 text-sm leading-snug text-ink"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span className="line-clamp-2">{benefit.summary}</span>
              </li>
            ))}
          </ul>
          {plan.benefits.length > 3 && (
            <p className="mt-2 pl-6 text-xs text-muted">
              +{plan.benefits.length - 3} {t('plan.moreBenefits')}
            </p>
          )}
        </div>

        {reasons && reasons.length > 0 && (
          <div className="mt-4 rounded-xl border border-maroon/15 bg-maroon-light/60 p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-maroon">
              <SparklesIcon className="h-3.5 w-3.5" />
              {t('plan.whyMatched')}
            </p>
            <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-ink">
              {reasons.slice(0, 4).map((reason) => (
                <li key={reason} className="flex gap-1.5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-maroon"
                  />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-line pt-4">
          <Link
            href={`${ROUTES.plans}/${plan.id}`}
            className={buttonStyles({
              variant: 'primary',
              size: 'sm',
              className: 'flex-1',
            })}
          >
            {t('common.viewDetails')}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <CompareToggle planId={plan.id} size="sm" />
        </div>
      </div>
    </article>
  )
}
