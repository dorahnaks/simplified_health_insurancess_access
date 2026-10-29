'use client'

import Link from 'next/link'
import { AlertTriangleIcon } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'
import { ROUTES } from '@/constants'
import { cn } from '@/lib/utils'

export function DemoDataBanner({ className }: { className?: string }) {
  const { t } = useI18n()

  return (
    <div
      role="note"
      className={cn(
        'flex flex-col gap-2 rounded-xl border border-warning/25 bg-warning-soft px-4 py-3 text-sm text-warning sm:flex-row sm:items-start',
        className,
      )}
    >
      <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" />
      <p className="leading-relaxed">
        <strong className="font-semibold">{t('demoBanner.title')}.</strong>{' '}
        {t('demoBanner.text')}{' '}
        <Link
          href={ROUTES.disclaimer}
          className="font-semibold underline underline-offset-2 hover:text-ink"
        >
          {t('demoBanner.link')}
        </Link>
      </p>
    </div>
  )
}

export function DemoTag({ className }: { className?: string }) {
  const { t } = useI18n()

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-warning-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-warning',
        className,
      )}
    >
      {t('common.demoPlan')}
    </span>
  )
}
