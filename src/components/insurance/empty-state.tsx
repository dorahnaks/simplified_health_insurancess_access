import Image from 'next/image'
import type { ContentImage } from '@/constants/images'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description: string
  image?: ContentImage
  children?: React.ReactNode
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  image,
  children,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-2xl border border-dashed border-line bg-surface px-6 py-14 text-center',
        className,
      )}
    >
      {image && (
        <div className="relative mb-5 w-full max-w-md overflow-hidden rounded-2xl border border-white/70 shadow-card">
          <div className="relative aspect-[16/9]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 28rem, 100vw"
              style={{ objectPosition: image.position }}
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-maroon-dark/45 to-transparent"
            />
          </div>
        </div>
      )}
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-maroon shadow-sm">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
        {description}
      </p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  )
}
