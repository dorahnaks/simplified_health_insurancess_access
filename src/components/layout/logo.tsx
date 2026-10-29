import Link from 'next/link'
import { APP_NAME, ROUTES } from '@/constants'
import { cn } from '@/lib/utils'

interface LogoProps {
  compact?: boolean
  variant?: 'default' | 'inverse'
  className?: string
}

export function Logo({
  compact = false,
  variant = 'default',
  className,
}: LogoProps) {
  const inverse = variant === 'inverse'

  return (
    <Link
      href={ROUTES.home}
      aria-label={`${APP_NAME} — home`}
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        inverse
          ? 'focus-visible:ring-white focus-visible:ring-offset-maroon-dark'
          : 'focus-visible:ring-maroon',
        className,
      )}
    >
      <span
        className={cn(
          'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm transition-colors',
          inverse
            ? 'bg-white text-maroon group-hover:bg-maroon-light'
            : 'bg-maroon text-white group-hover:bg-maroon-dark',
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            d="M12 2.6 19.5 5.4v5.9c0 4.8-3.2 8.1-7.5 9.4-4.3-1.3-7.5-4.6-7.5-9.4V5.4L12 2.6Z"
            fill="currentColor"
            opacity="0.18"
          />
          <path
            d="M12 2.6 19.5 5.4v5.9c0 4.8-3.2 8.1-7.5 9.4-4.3-1.3-7.5-4.6-7.5-9.4V5.4L12 2.6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M12 8v6M9 11h6"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col justify-center leading-tight">
        <span
          className={cn(
            'text-[17px] font-semibold tracking-tight',
            inverse ? 'text-white' : 'text-maroon-dark',
          )}
        >
          HealthCover{' '}
          <span className={inverse ? 'font-normal text-white/80' : 'font-normal text-ink'}>
            Uganda
          </span>
        </span>
        {!compact && (
          <span
            className={cn(
              'mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em]',
              inverse ? 'text-white/60' : 'text-muted',
            )}
          >
            Health insurance, made simple
          </span>
        )}
      </span>
    </Link>
  )
}
