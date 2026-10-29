'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ROUTES } from '@/constants'
import { faqs, glossary } from '@/data/glossary'
import { Container } from '@/components/layout/container'
import { EmptyState } from '@/components/insurance/empty-state'
import { buttonStyles } from '@/components/ui/button'
import {
  ArrowRightIcon,
  BookOpenIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  InfoIcon,
  SearchIcon,
  XIcon,
} from '@/components/ui/icons'

export function GuideExperience() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()
    if (!search) return glossary
    return glossary.filter((entry) => {
      const haystack = [
        entry.term,
        ...entry.aliases,
        entry.definition,
        entry.example ?? '',
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(search)
    })
  }, [query])

  return (
    <Container className="py-8 sm:py-10">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <div className="rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
            <label
              htmlFor="glossary-search"
              className="text-sm font-medium text-ink"
            >
              Search insurance terms
            </label>
            <div className="relative mt-2">
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                id="glossary-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try “premium”, “exclusion” or “waiting period”"
                className="h-11 w-full rounded-xl border border-line bg-white pl-10 pr-10 text-sm text-ink shadow-sm placeholder:text-muted/70 focus:border-maroon/50 focus:outline-none focus:ring-2 focus:ring-maroon/25"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear glossary search"
                  className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted hover:bg-surface hover:text-maroon"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              )}
            </div>
            <p className="mt-2 text-xs text-muted" aria-live="polite" role="status">
              {filtered.length} of {glossary.length} terms shown
              {query ? ` for “${query.trim()}”` : ''}.
            </p>
          </div>

          <section aria-labelledby="glossary-heading" className="mt-8">
            <h2
              id="glossary-heading"
              className="text-xl font-semibold tracking-tight text-ink"
            >
              Glossary
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              Plain-English definitions with an example where it helps.
            </p>

            {filtered.length > 0 ? (
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {filtered.map((entry) => (
                  <div
                    key={entry.id}
                    id={entry.id}
                    className="scroll-mt-28 rounded-2xl border border-line bg-white p-5 shadow-card"
                  >
                    <dt className="flex items-start justify-between gap-2">
                      <span className="text-base font-semibold tracking-tight text-ink">
                        {entry.term}
                      </span>
                      <HelpCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted">
                      {entry.definition}
                      {entry.example && (
                        <span className="mt-3 block rounded-lg bg-surface px-3 py-2 text-xs leading-relaxed text-ink">
                          <span className="font-semibold">Example: </span>
                          {entry.example}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <EmptyState
                className="mt-5"
                icon={<SearchIcon className="h-5 w-5" />}
                title="No terms match that search"
                description="Try a shorter word, or browse the full glossary by clearing the search."
              >
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className={buttonStyles({ variant: 'secondary', size: 'sm' })}
                >
                  Clear search
                </button>
              </EmptyState>
            )}
          </section>

          <section aria-labelledby="guide-faq-heading" className="mt-12">
            <h2
              id="guide-faq-heading"
              className="text-xl font-semibold tracking-tight text-ink"
            >
              Frequently asked questions
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              About choosing cover, reading exclusions, checking limits and
              contacting insurers.
            </p>
            <div className="mt-5 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-line bg-white p-4 shadow-card sm:p-5"
                >
                  <summary className="flex list-none items-center justify-between gap-4 text-sm font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2">
                    {faq.question}
                    <ChevronDownIcon className="h-4 w-4 shrink-0 text-maroon transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-8 flex flex-col gap-3 rounded-xl border border-line bg-surface p-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 leading-relaxed">
              <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
              This guide is educational. It is not personalised financial or
              medical advice.
            </p>
            <Link
              href={ROUTES.enrol}
              className={buttonStyles({
                variant: 'outline',
                size: 'sm',
                className: 'shrink-0',
              })}
            >
              Prepare to enrol
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-maroon-light/60 p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-maroon">
              <BookOpenIcon className="h-5 w-5" />
            </span>
            <h2 className="mt-3 text-sm font-semibold text-ink">
              Keep these three apart
            </h2>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-ink">
              <li>
                <strong className="text-success">Covered</strong> — explicitly
                listed in the plan information.
              </li>
              <li>
                <strong className="text-danger">Not covered</strong> — explicitly
                excluded.
              </li>
              <li>
                <strong className="text-warning">Check first</strong> — unclear
                or not supplied. Ask the insurer.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white p-5 text-xs leading-relaxed text-muted shadow-card">
            <p className="font-semibold text-ink">Jump to a term</p>
            <ul className="mt-2 space-y-1.5">
              {['premium', 'benefit-limit', 'exclusion', 'waiting-period'].map(
                (id) => {
                  const entry = glossary.find((item) => item.id === id)
                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className="text-maroon underline-offset-2 hover:underline"
                      >
                        {entry?.term}
                      </a>
                    </li>
                  )
                },
              )}
            </ul>
          </div>
        </aside>
      </div>
    </Container>
  )
}
