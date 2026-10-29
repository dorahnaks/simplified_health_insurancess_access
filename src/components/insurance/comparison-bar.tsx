'use client'

import Link from 'next/link'
import { ScaleIcon, XIcon } from '@/components/ui/icons'
import { buttonStyles } from '@/components/ui/button'
import { useComparison } from '@/hooks/use-comparison'
import { ROUTES } from '@/constants'

export function ComparisonBar() {
  const { count, limit, clear } = useComparison()

  if (count === 0) return null

  return (
    <div className="no-print sticky bottom-4 z-30 mt-8 px-1">
      <div className="flex flex-col items-start gap-3 rounded-2xl bg-maroon-dark px-4 py-3.5 text-white shadow-lift sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
            <ScaleIcon className="h-4 w-4" />
          </span>
          <p className="text-sm" aria-live="polite">
            <strong className="font-semibold">{count}</strong> of {limit} plans
            selected
          </p>
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <button
            type="button"
            onClick={clear}
            className={buttonStyles({
              variant: 'ghost',
              size: 'sm',
              className: 'flex-1 text-white hover:bg-white/10 sm:flex-none',
            })}
          >
            <XIcon className="h-4 w-4" />
            Clear
          </button>
          <Link
            href={ROUTES.compare}
            className={buttonStyles({
              variant: 'outline',
              size: 'sm',
              className:
                'flex-1 border-white/25 bg-white text-maroon-dark hover:border-white hover:text-maroon-dark sm:flex-none',
            })}
          >
            Compare plans
          </Link>
        </div>
      </div>
    </div>
  )
}
