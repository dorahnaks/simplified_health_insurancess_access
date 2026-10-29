'use client'

import Link from 'next/link'
import type { ComparisonValue, Plan } from '@/types/insurance'
import { getPlanById } from '@/data/plans'
import {
  buildComparisonRows,
  formatPremium,
  getInsurerForPlan,
} from '@/lib/insurance'
import { useComparison } from '@/hooks/use-comparison'
import { Container } from '@/components/layout/container'
import { DemoDataBanner } from '@/components/insurance/demo-banner'
import { EmptyState } from '@/components/insurance/empty-state'
import { PAGE_IMAGES } from '@/constants/images'
import { ComparisonLegend } from '@/components/insurance/status-pill'
import { CompareToggle } from '@/components/insurance/compare-toggle'
import { buttonStyles } from '@/components/ui/button'
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  InfoIcon,
  PrinterIcon,
  ScaleIcon,
  XCircleIcon,
  XIcon,
} from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { ROUTES } from '@/constants'

const cellStyles = {
  covered: 'text-ink',
  excluded: 'text-ink',
  'check-first': 'text-ink',
  info: 'text-ink',
}

function CellContent({ value }: { value: ComparisonValue }) {
  const Icon =
    value.kind === 'covered'
      ? CheckCircleIcon
      : value.kind === 'excluded'
        ? XCircleIcon
        : value.kind === 'check-first'
          ? AlertTriangleIcon
          : InfoIcon

  const iconColor =
    value.kind === 'covered'
      ? 'text-success'
      : value.kind === 'excluded'
        ? 'text-danger'
        : value.kind === 'check-first'
          ? 'text-warning'
          : 'text-muted'

  return (
    <div className="flex gap-2">
      <Icon className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', iconColor)} />
      <ul className="space-y-1">
        {value.lines.map((line) => (
          <li
            key={line}
            className={cn('break-words text-xs leading-relaxed', cellStyles[value.kind])}
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SelectedPlanChips({
  selectedPlans,
  onRemove,
}: {
  selectedPlans: Plan[]
  onRemove: (id: string) => void
}) {
  if (selectedPlans.length === 0) return null
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Selected plans">
      {selectedPlans.map((plan) => (
        <li key={plan.id}>
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-white py-1 pl-3 pr-1 text-xs shadow-sm">
            <span className="truncate">
              <span className="font-semibold text-ink">{plan.name}</span>
              <span className="text-muted">
                {' '}
                · {getInsurerForPlan(plan).name}
              </span>
            </span>
            <button
              type="button"
              onClick={() => onRemove(plan.id)}
              aria-label={`Remove ${plan.name} from comparison`}
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-maroon-light hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
            >
              <XIcon className="h-3.5 w-3.5" />
            </button>
          </span>
        </li>
      ))}
    </ul>
  )
}

function QuickAdd({ selectedIds }: { selectedIds: string[] }) {
  const suggestions = ['nile-jua-starter', 'rift-boda-shield', 'equator-family-health']
    .filter((id) => !selectedIds.includes(id))
    .map((id) => getPlanById(id))
    .filter((plan): plan is Plan => Boolean(plan))
    .slice(0, 3)

  if (suggestions.length === 0) return null

  return (
    <div className="mt-6 rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
      <p className="text-sm font-semibold text-ink">Quick add demonstration plans</p>
      <ul className="mt-3 divide-y divide-line">
        {suggestions.map((plan) => (
          <li
            key={plan.id}
            className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-medium text-ink">
                {plan.name}
                <span className="font-normal text-muted">
                  {' '}
                  · {getInsurerForPlan(plan).name}
                </span>
              </p>
              <p className="mt-0.5 text-xs text-muted">
                {plan.premium
                  ? formatPremium(plan.premium)
                  : 'Premium not provided'}
              </p>
            </div>
            <CompareToggle planId={plan.id} size="sm" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CompareExperience() {
  const { ids, remove, clear, limit } = useComparison()
  const selectedPlans = ids
    .map((id) => getPlanById(id))
    .filter((plan): plan is Plan => Boolean(plan))

  if (selectedPlans.length === 0) {
    return (
      <Container className="py-8 sm:py-10">
        <DemoDataBanner />
        <EmptyState
          className="mt-6"
          image={PAGE_IMAGES.compare}
          icon={<ScaleIcon className="h-5 w-5" />}
          title="No plans selected yet"
          description="Choose two to four plans from the catalogue to see them side by side."
        >
          <Link href={ROUTES.plans} className={buttonStyles({ size: 'md' })}>
            Browse plans
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </EmptyState>
        <QuickAdd selectedIds={ids} />
      </Container>
    )
  }

  if (selectedPlans.length === 1) {
    return (
      <Container className="py-8 sm:py-10">
        <DemoDataBanner />
        <div className="mt-6 rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-ink">
                {selectedPlans.length} of {limit} plans selected
              </p>
              <p className="mt-0.5 text-xs text-muted">
                Add one more plan to start the side-by-side comparison.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={clear}
                className={buttonStyles({ variant: 'ghost', size: 'sm' })}
              >
                Clear
              </button>
              <Link
                href={ROUTES.plans}
                className={buttonStyles({ size: 'sm' })}
              >
                Add more plans
              </Link>
            </div>
          </div>
          <div className="mt-3">
            <SelectedPlanChips selectedPlans={selectedPlans} onRemove={remove} />
          </div>
        </div>
        <EmptyState
          className="mt-6"
          icon={<ScaleIcon className="h-5 w-5" />}
          title="One more plan to go"
          description="Comparison works best with at least two plans. Add another below or return to the catalogue to filter by customer type and benefits."
        >
          <Link href={ROUTES.plans} className={buttonStyles({ size: 'md' })}>
            Browse plans
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </EmptyState>
        <QuickAdd selectedIds={ids} />
      </Container>
    )
  }

  const rows = buildComparisonRows(selectedPlans)
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Container className="py-8 sm:py-10">
      <div className="no-print">
        <DemoDataBanner />
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">
              {selectedPlans.length} of {limit} plans selected
            </p>
            <p className="mt-0.5 text-xs text-muted">
              Rows marked <span className="font-semibold text-maroon">Differs</span>{' '}
              contain different information. Different does not mean better.
            </p>
          </div>
          <div className="no-print flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={clear}
              className={buttonStyles({ variant: 'ghost', size: 'sm' })}
            >
              Clear all
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className={buttonStyles({ variant: 'outline', size: 'sm' })}
            >
              <PrinterIcon className="h-4 w-4" />
              Print comparison
            </button>
            <Link
              href={ROUTES.plans}
              className={buttonStyles({ size: 'sm' })}
            >
              Add more plans
            </Link>
          </div>
        </div>
        <SelectedPlanChips selectedPlans={selectedPlans} onRemove={remove} />
      </div>

      <div className="mt-4 hidden rounded-xl border border-line bg-surface px-4 py-3 print:block">
        <p className="text-xs text-muted">
          Comparison printed {today} · HealthCover Uganda · Demonstration data —
          not a real insurance offer.
        </p>
      </div>

      <div className="mt-4 rounded-2xl border border-line bg-surface px-4 py-3">
        <ComparisonLegend />
      </div>

      <div className="mt-5 hidden lg:block">
        <div className="compare-scroll overflow-x-auto rounded-2xl border border-line bg-white shadow-card">
          <table className="compare-table w-full min-w-[820px] border-collapse text-left">
            <caption className="sr-only">
              Side-by-side comparison of {selectedPlans.length} health insurance
              plans. Rows marked Differs contain different information.
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 top-0 z-20 w-44 border-b border-r border-line bg-surface px-4 py-4 text-xs font-semibold uppercase tracking-wide text-muted"
                >
                  Field
                </th>
                {selectedPlans.map((plan) => (
                  <th
                    key={plan.id}
                    scope="col"
                    className="min-w-[210px] border-b border-line bg-white px-4 py-4 align-top"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-maroon">
                      {getInsurerForPlan(plan).name}
                    </p>
                    <Link
                      href={`${ROUTES.plans}/${plan.id}`}
                      className="mt-1 block text-sm font-semibold text-ink hover:text-maroon hover:underline underline-offset-2"
                    >
                      {plan.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => remove(plan.id)}
                      className="no-print mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-muted hover:text-danger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                    >
                      <XIcon className="h-3 w-3" />
                      Remove
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.label}
                  className={cn(
                    'border-b border-line last:border-b-0',
                    row.differs && 'bg-maroon-light/15',
                  )}
                >
                  <th
                    scope="row"
                    className={cn(
                      'sticky left-0 z-10 border-r border-line bg-white px-4 py-3.5 align-top text-xs font-semibold text-ink',
                      row.differs && 'bg-[#fbf5f7]',
                    )}
                  >
                    <span className="flex flex-col gap-1">
                      {row.label}
                      {row.differs && (
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-maroon">
                          Differs
                        </span>
                      )}
                      {row.hint && (
                        <span className="text-[10px] font-normal leading-relaxed text-muted">
                          {row.hint}
                        </span>
                      )}
                    </span>
                  </th>
                  {selectedPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className="border-l border-line/70 px-4 py-3.5 align-top"
                    >
                      <CellContent value={row.values[plan.id]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-5 space-y-4 lg:hidden">
        {selectedPlans.map((plan) => (
          <article
            key={plan.id}
            className="rounded-2xl border border-line bg-white p-4 shadow-card"
          >
            <header className="flex items-start justify-between gap-3 border-b border-line pb-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-maroon">
                  {getInsurerForPlan(plan).name}
                </p>
                <Link
                  href={`${ROUTES.plans}/${plan.id}`}
                  className="mt-0.5 block text-base font-semibold text-ink hover:text-maroon"
                >
                  {plan.name}
                </Link>
              </div>
              <button
                type="button"
                onClick={() => remove(plan.id)}
                aria-label={`Remove ${plan.name} from comparison`}
                className="no-print inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line text-muted hover:border-danger/30 hover:text-danger"
              >
                <XIcon className="h-4 w-4" />
              </button>
            </header>
            <dl className="mt-1 divide-y divide-line">
              {rows.map((row) => (
                <div key={row.label} className="py-3">
                  <dt className="flex flex-wrap items-center justify-between gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted">
                    {row.label}
                    {row.differs && (
                      <span className="rounded-full bg-maroon-light px-2 py-0.5 text-[10px] font-semibold text-maroon">
                        Differs
                      </span>
                    )}
                  </dt>
                  <dd className="mt-1.5">
                    <CellContent value={row.values[plan.id]} />
                  </dd>
                </div>
              ))}
            </dl>
            <div className="no-print mt-3 flex gap-2 border-t border-line pt-3">
              <Link
                href={`${ROUTES.plans}/${plan.id}`}
                className={buttonStyles({
                  variant: 'outline',
                  size: 'sm',
                  className: 'flex-1',
                })}
              >
                View plan
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-line bg-surface px-4 py-3 text-xs leading-relaxed text-muted">
        <p>
          This comparison uses only the information available in the
          demonstration dataset. “Information unavailable” means the data was
          not supplied — it is not proof that a benefit is excluded. Confirm all
          details with the insurer before enrolling.
        </p>
      </div>

      <div className="no-print mt-6 flex flex-wrap gap-2">
        <Link href={ROUTES.plans} className={buttonStyles({ variant: 'outline' })}>
          Return to the catalogue
        </Link>
        <Link href={ROUTES.enrol} className={buttonStyles({ variant: 'ghost' })}>
          Prepare to enrol
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </Container>
  )
}
