import { cn } from '@/lib/utils'

type Variant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'inverse'
  | 'on-dark'
type Size = 'sm' | 'md' | 'lg' | 'icon'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-maroon text-white shadow-sm hover:bg-maroon-dark hover:shadow-md active:bg-maroon-dark',
  secondary:
    'bg-maroon-light text-maroon-dark hover:bg-[#efd9e2] hover:shadow-sm active:bg-[#e8cfd9]',
  outline:
    'border border-line bg-white text-ink hover:border-maroon/35 hover:text-maroon hover:shadow-sm',
  ghost: 'bg-transparent text-maroon hover:bg-maroon-light',
  destructive: 'bg-danger text-white hover:bg-[#8f1921] hover:shadow-md',
  inverse:
    'bg-white text-maroon-dark shadow-sm hover:bg-maroon-light hover:shadow-md active:bg-maroon-light',
  'on-dark':
    'border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white/10 hover:text-white',
}

const sizeStyles: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm rounded-lg gap-1.5',
  md: 'h-11 px-5 text-sm rounded-xl gap-2',
  lg: 'h-12 px-6 text-base rounded-xl gap-2',
  icon: 'h-10 w-10 rounded-xl',
}

interface StyleOptions {
  variant?: Variant
  size?: Size
  className?: string
}

export function buttonStyles({
  variant = 'primary',
  size = 'md',
  className,
}: StyleOptions = {}): string {
  return cn(
    'inline-flex select-none items-center justify-center font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0',
    variantStyles[variant],
    sizeStyles[size],
    className,
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  isLoading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}
