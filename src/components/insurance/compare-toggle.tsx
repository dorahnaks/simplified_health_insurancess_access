'use client'

import { useComparison } from '@/hooks/use-comparison'
import { ScaleIcon } from '@/components/ui/icons'
import { buttonStyles } from '@/components/ui/button'
import { useI18n } from '@/i18n/provider'

interface CompareToggleProps {
  planId: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CompareToggle({
  planId,
  size = 'sm',
  className,
}: CompareToggleProps) {
  const { has, toggle, isFull } = useComparison()
  const { t } = useI18n()
  const selected = has(planId)
  const disabled = isFull && !selected

  return (
    <button
      type="button"
      onClick={() => toggle(planId)}
      aria-pressed={selected}
      disabled={disabled}
      title={disabled ? t('common.compareFullHint') : undefined}
      className={buttonStyles({
        variant: selected ? 'secondary' : 'outline',
        size,
        className,
      })}
    >
      <ScaleIcon className="h-4 w-4" />
      {selected
        ? t('common.inComparison')
        : disabled
          ? t('common.comparisonFull')
          : t('common.compare')}
    </button>
  )
}
