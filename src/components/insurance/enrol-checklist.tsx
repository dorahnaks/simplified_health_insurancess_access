'use client'

import { useLocalStorage } from '@/hooks/use-local-storage'
import { Button } from '@/components/ui/button'
import { CheckIcon, RefreshIcon } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

const CHECKLIST_ITEMS = [
  'I know who needs cover: myself, my family or another person.',
  'I have shortlisted at least two plans to compare.',
  'I have read the benefit limits and the period each limit applies to.',
  'I have read the exclusions and waiting periods.',
  'I have checked the eligibility conditions and network hospitals.',
  'I have the required documents ready.',
  'I have confirmed the premium amount and payment frequency.',
  'I have confirmed the insurer’s official payment channel.',
  'I know which unclear details I need to ask the insurer about.',
  'I will read the policy document before paying anything.',
]

type ChecklistState = Record<number, boolean>

const STORAGE_KEY = 'healthcover:enrol-checklist:v1'

export function EnrolChecklist() {
  const [checked, setChecked] = useLocalStorage<ChecklistState>(
    STORAGE_KEY,
    {},
  )

  const completed = CHECKLIST_ITEMS.filter((_, index) => checked[index]).length
  const percent = Math.round((completed / CHECKLIST_ITEMS.length) * 100)

  const toggle = (index: number) => {
    setChecked((previous) => ({
      ...previous,
      [index]: !previous[index],
    }))
  }

  return (
    <section
      aria-labelledby="checklist-heading"
      className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2
            id="checklist-heading"
            className="text-lg font-semibold tracking-tight text-ink"
          >
            Your preparation checklist
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            Saved in this browser only. No account or personal details needed.
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-maroon-light px-2.5 py-1 text-xs font-semibold text-maroon">
          {completed}/{CHECKLIST_ITEMS.length}
        </span>
      </div>

      <div className="mt-4">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={CHECKLIST_ITEMS.length}
          aria-valuenow={completed}
          aria-label="Preparation checklist progress"
          className="h-2 w-full overflow-hidden rounded-full bg-surface ring-1 ring-line"
        >
          <div
            className="h-full rounded-full bg-maroon transition-[width] duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="mt-1.5 text-xs text-muted">
          {completed === CHECKLIST_ITEMS.length
            ? 'All preparation items checked. Contact the insurer to confirm the official process.'
            : `${percent}% prepared`}
        </p>
      </div>

      <ul className="mt-4 space-y-2">
        {CHECKLIST_ITEMS.map((item, index) => (
          <li key={item}>
            <label
              className={cn(
                'flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm leading-relaxed transition-colors',
                checked[index]
                  ? 'border-maroon/20 bg-maroon-light/50 text-ink'
                  : 'border-transparent text-muted hover:bg-surface',
              )}
            >
              <input
                type="checkbox"
                checked={Boolean(checked[index])}
                onChange={() => toggle(index)}
                className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-line accent-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
              />
              <span className={cn(checked[index] && 'text-ink')}>{item}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
        <p className="flex items-center gap-1.5 text-xs text-muted">
          <CheckIcon className="h-3.5 w-3.5 text-success" />
          Nothing is sent anywhere.
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setChecked({})}
          disabled={completed === 0}
        >
          <RefreshIcon className="h-4 w-4" />
          Reset
        </Button>
      </div>
    </section>
  )
}
