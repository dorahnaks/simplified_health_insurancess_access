'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { CustomerCategory } from '@/types/insurance'
import type { FinderAnswers, FinderResult, PlanFilters } from '@/lib/insurance'
import {
  BENEFIT_CATEGORIES,
  BENEFIT_LABELS,
  CATEGORY_LABELS,
  DEFAULT_FILTERS,
  DEMO_LABEL,
  filterPlans,
  parsePlanFilters,
} from '@/lib/insurance'
import { plans } from '@/data/plans'
import { insurers } from '@/data/insurers'
import { Container } from '@/components/layout/container'
import { PlanCard } from '@/components/insurance/plan-card'
import { SmartPlanFinder } from '@/components/insurance/plan-finder'
import { ComparisonBar } from '@/components/insurance/comparison-bar'
import { EmptyState } from '@/components/insurance/empty-state'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/input'
import {
  FilterIcon,
  RefreshIcon,
  SearchIcon,
  SparklesIcon,
  XIcon,
} from '@/components/ui/icons'

const CATEGORIES = Object.keys(CATEGORY_LABELS) as CustomerCategory[]

export function CatalogueSkeleton() {
  return (
    <Container className="py-10">
      <div
        role="status"
        className="rounded-2xl border border-line bg-surface p-6"
      >
        <span className="sr-only">Loading plans…</span>
        <div className="h-4 w-40 rounded bg-line/60" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="h-11 rounded-xl bg-line/50" />
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="h-80 rounded-2xl border border-line bg-surface"
          />
        ))}
      </div>
    </Container>
  )
}

export function Catalogue({ paramsKey }: { paramsKey: string }) {
  const [filters, setFilters] = useState<PlanFilters>(() =>
    parsePlanFilters(new URLSearchParams(paramsKey)),
  )
  const [finderOpen, setFinderOpen] = useState(false)
  const [finderResult, setFinderResult] = useState<{
    result: FinderResult
    answers: FinderAnswers
  } | null>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.location.hash === '#plan-finder') {
      queueMicrotask(() => setFinderOpen(true))
      window.requestAnimationFrame(() => {
        document
          .getElementById('plan-finder')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [])

  const filteredPlans = useMemo(() => filterPlans(plans, filters), [filters])

  const visiblePlans = useMemo(() => {
    if (!finderResult) return filteredPlans
    const order = new Map(
      finderResult.result.ids.map((id, index) => [id, index]),
    )
    return filteredPlans
      .filter((plan) => order.has(plan.id))
      .sort(
        (a, b) =>
          (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0),
      )
  }, [filteredPlans, finderResult])

  const filtersActive =
    filters.query !== '' ||
    filters.insurerId !== '' ||
    filters.category !== '' ||
    filters.benefit !== '' ||
    filters.sort !== 'recommended'

  const resetAll = () => {
    setFilters(DEFAULT_FILTERS)
    setFinderResult(null)
  }

  const applyFinder = (result: FinderResult, answers: FinderAnswers) => {
    setFinderResult({ result, answers })
    window.requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <>
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-3 rounded-2xl border border-warning/25 bg-warning-soft px-4 py-3 text-sm text-warning sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">{DEMO_LABEL}</p>
          <p className="text-xs leading-relaxed">
            All plans below are fictional examples. Confirm details with a real
            insurer.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-line bg-white p-4 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-maroon-light text-maroon">
              <SparklesIcon className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-sm font-semibold text-ink">
                Not sure where to start?
              </h2>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">
                Use the Smart Plan Finder to filter by non-medical preferences.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setFinderOpen((open) => !open)}
            aria-expanded={finderOpen}
            aria-controls="plan-finder"
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-maroon/25 bg-white px-4 text-sm font-medium text-maroon transition-colors hover:bg-maroon-light/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
          >
            {finderOpen ? (
              <>
                <XIcon className="h-4 w-4" />
                Close finder
              </>
            ) : (
              <>
                <SparklesIcon className="h-4 w-4" />
                Find my plan
              </>
            )}
          </button>
        </div>

        {finderOpen && (
          <div className="mt-4">
            <SmartPlanFinder
              onApply={applyFinder}
              onClear={() => setFinderResult(null)}
              active={Boolean(finderResult)}
            />
          </div>
        )}

        <section
          aria-labelledby="filters-heading"
          className="mt-6 rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5"
        >
          <div className="flex items-center justify-between gap-3">
            <h2
              id="filters-heading"
              className="flex items-center gap-2 text-sm font-semibold text-ink"
            >
              <FilterIcon className="h-4 w-4 text-maroon" />
              Search and filter
            </h2>
            <button
              type="button"
              onClick={resetAll}
              disabled={!filtersActive && !finderResult}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-maroon transition-colors hover:bg-maroon-light/60 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
            >
              <RefreshIcon className="h-4 w-4" />
              Reset filters
            </button>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
            <div className="sm:col-span-2 lg:col-span-4">
              <label
                htmlFor="catalogue-search"
                className="text-sm font-medium text-ink"
              >
                Search
              </label>
              <div className="relative mt-1.5">
                <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  id="catalogue-search"
                  type="search"
                  value={filters.query}
                  onChange={(event) =>
                    setFilters((previous) => ({
                      ...previous,
                      query: event.target.value,
                    }))
                  }
                  placeholder="Plan name, insurer or description"
                  className="h-11 w-full rounded-xl border border-line bg-white pl-10 pr-3.5 text-sm text-ink shadow-sm placeholder:text-muted/70 focus:border-maroon/50 focus:outline-none focus:ring-2 focus:ring-maroon/25"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <Select
                label="Insurer"
                value={filters.insurerId}
                onChange={(event) =>
                  setFilters((previous) => ({
                    ...previous,
                    insurerId: event.target.value,
                  }))
                }
              >
                <option value="">All insurers</option>
                {insurers.map((insurer) => (
                  <option key={insurer.id} value={insurer.id}>
                    {insurer.name}
                  </option>
                ))}
              </Select>
            </div>

            <div className="lg:col-span-2">
              <Select
                label="Customer type"
                value={filters.category}
                onChange={(event) =>
                  setFilters((previous) => ({
                    ...previous,
                    category: event.target.value as PlanFilters['category'],
                  }))
                }
              >
                <option value="">Any type</option>
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {CATEGORY_LABELS[category]}
                  </option>
                ))}
              </Select>
            </div>

            <div className="lg:col-span-2">
              <Select
                label="Benefit"
                value={filters.benefit}
                onChange={(event) =>
                  setFilters((previous) => ({
                    ...previous,
                    benefit: event.target.value as PlanFilters['benefit'],
                  }))
                }
              >
                <option value="">Any benefit</option>
                {BENEFIT_CATEGORIES.map((benefit) => (
                  <option key={benefit} value={benefit}>
                    {BENEFIT_LABELS[benefit]}
                  </option>
                ))}
              </Select>
            </div>

            <div className="lg:col-span-2">
              <Select
                label="Sort by"
                value={filters.sort}
                onChange={(event) =>
                  setFilters((previous) => ({
                    ...previous,
                    sort: event.target.value as PlanFilters['sort'],
                  }))
                }
              >
                <option value="recommended">Recommended</option>
                <option value="premium-asc">Price: low to high</option>
                <option value="premium-desc">Price: high to low</option>
                <option value="name">Plan name</option>
              </Select>
            </div>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-muted">
            Price sorting only arranges plans that list a premium; plans without
            one stay at the end. Listed premiums are demonstration data and are
            not verified quotes.
          </p>
        </section>

        <div ref={resultsRef} className="scroll-mt-28 pt-8">
          <div className="flex flex-col gap-2 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                {finderResult
                  ? 'Plans matched to your preferences'
                  : 'Available plans'}
              </h2>
              <p
                className="mt-1 text-sm text-muted"
                aria-live="polite"
                role="status"
              >
                Showing {visiblePlans.length} of {plans.length} demonstration
                plans
              </p>
            </div>
            {finderResult && (
              <button
                type="button"
                onClick={() => setFinderResult(null)}
                className="inline-flex items-center gap-1.5 self-start rounded-lg px-2 py-1.5 text-sm font-medium text-maroon hover:bg-maroon-light/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 sm:self-auto"
              >
                <XIcon className="h-4 w-4" />
                Clear finder results
              </button>
            )}
          </div>

          {finderResult?.result.note && (
            <p className="mt-4 rounded-xl border border-warning/25 bg-warning-soft px-4 py-3 text-sm leading-relaxed text-warning">
              {finderResult.result.note}
            </p>
          )}

          {visiblePlans.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visiblePlans.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  reasons={finderResult?.result.reasons[plan.id]}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              className="mt-6"
              icon={<SearchIcon className="h-5 w-5" />}
              title="No plans match your filters"
              description={
                finderResult
                  ? 'No plans match those preferences within the current filters. Remove a benefit, widen the customer type or reset the finder to see more.'
                  : 'Try a different insurer or benefit, clear the search box, or reset the filters to see every demonstration plan.'
              }
            >
              <Button onClick={resetAll} variant="secondary">
                <RefreshIcon className="h-4 w-4" />
                Reset filters
              </Button>
            </EmptyState>
          )}

          <ComparisonBar />
        </div>
      </Container>
    </>
  )
}
