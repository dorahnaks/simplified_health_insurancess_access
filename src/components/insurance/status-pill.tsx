'use client'

import {
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoIcon,
  XCircleIcon,
} from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'
import type { TranslationKey } from '@/i18n/dictionaries'
import { cn } from '@/lib/utils'

export type Status = 'covered' | 'excluded' | 'check-first' | 'info'

const statusStyles: Record<Status, string> = {
  covered: 'border-success/20 bg-success-soft text-success',
  excluded: 'border-danger/20 bg-danger-soft text-danger',
  'check-first': 'border-warning/25 bg-warning-soft text-warning',
  info: 'border-line bg-surface text-muted',
}

const statusLabelKeys: Record<Status, TranslationKey> = {
  covered: 'status.covered',
  excluded: 'status.notCovered',
  'check-first': 'status.checkFirst',
  info: 'status.info',
}

const statusIcons = {
  covered: CheckCircleIcon,
  excluded: XCircleIcon,
  'check-first': AlertTriangleIcon,
  info: InfoIcon,
}

interface StatusPillProps {
  status: Status
  label?: string
  className?: string
}

export function StatusPill({ status, label, className }: StatusPillProps) {
  const { t } = useI18n()
  const Icon = statusIcons[status]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold',
        statusStyles[status],
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" />
      {label ?? t(statusLabelKeys[status])}
    </span>
  )
}

export function ComparisonLegend({ className }: { className?: string }) {
  const { t } = useI18n()

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted',
        className,
      )}
    >
      <span className="font-medium text-ink">{t('status.legend')}</span>
      <StatusPill status="covered" />
      <StatusPill status="excluded" label={t('status.explicitExcluded')} />
      <StatusPill status="check-first" label={t('status.unavailable')} />
      <span className="inline-flex items-center gap-1.5">
        <InfoIcon className="h-3.5 w-3.5" />
        {t('status.missingNote')}
      </span>
    </div>
  )
}
