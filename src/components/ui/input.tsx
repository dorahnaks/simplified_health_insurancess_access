import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  showOptional?: boolean
}

export function Input({
  label,
  error,
  hint,
  showOptional = false,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? props.name

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-ink">
          {label}
          {props.required ? (
            <span className="ml-1 text-maroon" aria-hidden="true">
              *
            </span>
          ) : showOptional ? (
            <span className="ml-1.5 text-xs font-normal text-muted">
              (optional)
            </span>
          ) : null}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'h-11 w-full rounded-xl border bg-white px-3.5 text-sm text-ink shadow-sm',
          'placeholder:text-muted/70',
          'focus:outline-none focus:ring-2 focus:ring-maroon/25',
          error
            ? 'border-danger focus:border-danger focus:ring-danger/20'
            : 'border-line focus:border-maroon/50',
          'disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-70',
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
        }
        {...props}
      />
      {hint && !error && (
        <p id={`${inputId}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
  showOptional?: boolean
}

export function Textarea({
  label,
  error,
  hint,
  showOptional = false,
  className,
  id,
  ...props
}: TextareaProps) {
  const fieldId = id ?? props.name

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={fieldId} className="text-sm font-medium text-ink">
          {label}
          {props.required ? (
            <span className="ml-1 text-maroon" aria-hidden="true">
              *
            </span>
          ) : showOptional ? (
            <span className="ml-1.5 text-xs font-normal text-muted">
              (optional)
            </span>
          ) : null}
        </label>
      )}
      <textarea
        id={fieldId}
        className={cn(
          'min-h-32 w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-ink shadow-sm',
          'placeholder:text-muted/70',
          'focus:outline-none focus:ring-2 focus:ring-maroon/25',
          error
            ? 'border-danger focus:border-danger focus:ring-danger/20'
            : 'border-line focus:border-maroon/50',
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined
        }
        {...props}
      />
      {hint && !error && (
        <p id={`${fieldId}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${fieldId}-error`} role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  hint?: string
  error?: string
}

export function Select({
  label,
  hint,
  error,
  className,
  id,
  children,
  ...props
}: SelectProps) {
  const fieldId = id ?? props.name

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={fieldId} className="text-sm font-medium text-ink">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={fieldId}
          className={cn(
            'h-11 w-full appearance-none rounded-xl border border-line bg-white px-3.5 pr-10 text-sm text-ink shadow-sm',
            'focus:border-maroon/50 focus:outline-none focus:ring-2 focus:ring-maroon/25',
            error && 'border-danger',
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined
          }
          {...props}
        >
          {children}
        </select>
        <svg
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {hint && !error && (
        <p id={`${fieldId}-hint`} className="text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${fieldId}-error`} role="alert" className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
