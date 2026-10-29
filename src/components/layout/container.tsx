import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'wide' | 'narrow'
}

const sizes = {
  default: 'max-w-7xl',
  wide: 'max-w-[88rem]',
  narrow: 'max-w-3xl',
}

export function Container({
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
