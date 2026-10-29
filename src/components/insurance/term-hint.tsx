import { getGlossaryEntry } from '@/data/glossary'
import { HelpCircleIcon } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

interface TermHintProps {
  termId: string
  className?: string
  prompt?: string
}

/**
 * Native <details> keeps the explanation keyboard-accessible and works on
 * mobile without JavaScript or hover.
 */
export function TermHint({
  termId,
  className,
  prompt = 'What does this mean?',
}: TermHintProps) {
  const entry = getGlossaryEntry(termId)
  if (!entry) return null

  return (
    <details className={cn('inline-block max-w-md', className)}>
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-maroon transition-colors hover:border-maroon/35 hover:bg-maroon-light/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
        <HelpCircleIcon className="h-3.5 w-3.5" />
        {prompt}
      </summary>
      <span className="mt-2 block rounded-xl border border-line bg-white p-3 text-xs leading-relaxed text-ink shadow-card">
        <strong className="font-semibold text-maroon-dark">{entry.term}.</strong>{' '}
        {entry.definition}
        {entry.example && (
          <span className="mt-1.5 block text-muted">
            <span className="font-medium text-ink">Example: </span>
            {entry.example}
          </span>
        )}
      </span>
    </details>
  )
}
