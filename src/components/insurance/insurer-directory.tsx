'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { CustomerCategory, Insurer } from '@/types/insurance'
import { insurers } from '@/data/insurers'
import { plans } from '@/data/plans'
import {
  CATEGORY_LABELS,
  DEMO_LABEL,
  formatPremium,
} from '@/lib/insurance'
import { formatDate } from '@/lib/utils'
import { Container } from '@/components/layout/container'
import { DemoTag } from '@/components/insurance/demo-banner'
import { EmptyState } from '@/components/insurance/empty-state'
import { Select } from '@/components/ui/input'
import { Button, buttonStyles } from '@/components/ui/button'
import {
  ArrowRightIcon,
  BuildingIcon,
  ExternalLinkIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  RefreshIcon,
  SearchIcon,
} from '@/components/ui/icons'
import { ROUTES } from '@/constants'

const CATEGORIES = Object.keys(CATEGORY_LABELS) as CustomerCategory[]

function plansForInsurer(insurerId: string) {
  return plans.filter((plan) => plan.insurerId === insurerId)
}

export function InsurerDirectory() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<CustomerCategory | ''>('')

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()
    return insurers.filter((insurer) => {
      const insurerPlans = plansForInsurer(insurer.id)
      const matchesQuery =
        !search ||
        insurer.name.toLowerCase().includes(search) ||
        insurer.description.toLowerCase().includes(search) ||
        insurerPlans.some((plan) => plan.name.toLowerCase().includes(search))
      const matchesCategory =
        !category ||
        insurerPlans.some((plan) => plan.intendedFor.includes(category))
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  const reset = () => {
    setQuery('')
    setCategory('')
  }

  return (
    <Container className="py-8 sm:py-10">
      <div className="flex flex-col gap-3 rounded-2xl border border-warning/25 bg-warning-soft px-4 py-3 text-sm text-warning sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold">{DEMO_LABEL}</p>
        <p className="text-xs leading-relaxed">
          These are fictional insurers created for the prototype. No partnership
          or regulatory approval is implied.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
        <div className="grid gap-3 sm:grid-cols-[1fr_220px_auto] sm:items-end">
          <div>
            <label
              htmlFor="insurer-search"
              className="text-sm font-medium text-ink"
            >
              Search insurers or plans
            </label>
            <div className="relative mt-1.5">
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                id="insurer-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Insurer name, plan name or description"
                className="h-11 w-full rounded-xl border border-line bg-white pl-10 pr-3.5 text-sm text-ink shadow-sm placeholder:text-muted/70 focus:border-maroon/50 focus:outline-none focus:ring-2 focus:ring-maroon/25"
              />
            </div>
          </div>
          <Select
            label="Plans for"
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as CustomerCategory | '')
            }
          >
            <option value="">Any customer type</option>
            {CATEGORIES.map((entry) => (
              <option key={entry} value={entry}>
                {CATEGORY_LABELS[entry]}
              </option>
            ))}
          </Select>
          <Button
            variant="outline"
            onClick={reset}
            disabled={!query && !category}
            className="sm:mb-0"
          >
            <RefreshIcon className="h-4 w-4" />
            Reset
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted" role="status" aria-live="polite">
          Showing {filtered.length} of {insurers.length} demonstration insurers.
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 space-y-5">
          {filtered.map((insurer) => (
            <InsurerCard key={insurer.id} insurer={insurer} />
          ))}
        </div>
      ) : (
        <EmptyState
          className="mt-6"
          icon={<BuildingIcon className="h-5 w-5" />}
          title="No insurers match your search"
          description="Try another plan or insurer name, choose a different customer type, or reset the filters."
        >
          <Button variant="secondary" onClick={reset}>
            <RefreshIcon className="h-4 w-4" />
            Reset filters
          </Button>
        </EmptyState>
      )}
    </Container>
  )
}

function InsurerCard({ insurer }: { insurer: Insurer }) {
  const insurerPlans = plansForInsurer(insurer.id)

  return (
    <article className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">
              {insurer.name}
            </h2>
            <DemoTag />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {insurer.description}
          </p>

          <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
            {insurer.website && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                  Website
                </dt>
                <dd className="mt-0.5">
                  <a
                    href={insurer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-maroon hover:underline underline-offset-2"
                  >
                    <GlobeIcon className="h-3.5 w-3.5" />
                    {insurer.website.replace(/^https?:\/\//, '')}
                    <ExternalLinkIcon className="h-3 w-3" />
                  </a>
                </dd>
              </div>
            )}
            {insurer.phone && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                  Telephone
                </dt>
                <dd className="mt-0.5">
                  <a
                    href={`tel:${insurer.phone.replace(/[^\d+]/g, '')}`}
                    className="inline-flex items-center gap-1.5 font-medium text-maroon hover:underline underline-offset-2"
                  >
                    <PhoneIcon className="h-3.5 w-3.5" />
                    {insurer.phone}
                  </a>
                </dd>
              </div>
            )}
            {insurer.email && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                  Email
                </dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${insurer.email}`}
                    className="inline-flex items-center gap-1.5 font-medium text-maroon hover:underline underline-offset-2"
                  >
                    <MailIcon className="h-3.5 w-3.5" />
                    {insurer.email}
                  </a>
                </dd>
              </div>
            )}
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                Last verified
              </dt>
              <dd className="mt-0.5 text-ink">
                {insurer.lastVerified
                  ? formatDate(insurer.lastVerified)
                  : 'Not verified — demonstration data'}
              </dd>
            </div>
          </dl>

          <div className="mt-4 rounded-xl border border-line bg-surface p-3 text-xs leading-relaxed text-muted">
            <p className="font-semibold text-ink">Authorised intermediary</p>
            <p className="mt-0.5">
              {insurer.intermediary ??
                'None listed in this demonstration record. Verify any intermediary directly with the insurer.'}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Available demonstration plans
            </p>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {insurerPlans.map((plan) => (
                <li key={plan.id}>
                  <Link
                    href={`${ROUTES.plans}/${plan.id}`}
                    className="flex items-center justify-between gap-2 rounded-xl border border-line bg-white px-3 py-2.5 text-sm transition-colors hover:border-maroon/30 hover:bg-maroon-light/30"
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-ink">
                        {plan.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">
                        {plan.premium
                          ? formatPremium(plan.premium)
                          : 'Premium not provided'}
                      </span>
                    </span>
                    <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-maroon" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 lg:w-52">
          <Link
            href={`${ROUTES.plans}?insurer=${insurer.id}`}
            className={buttonStyles({ variant: 'outline', size: 'sm' })}
          >
            <MapPinIcon className="h-3.5 w-3.5" />
            View in catalogue
          </Link>
          <p className="text-[11px] leading-relaxed text-muted">
            Contact details are demonstration data. Confirm the insurer’s
            identity and official channels independently.
          </p>
        </div>
      </div>
    </article>
  )
}
