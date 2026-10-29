'use client'

import { useState } from 'react'
import type { BenefitCategory } from '@/types/insurance'
import type { FinderAnswers, FinderResult } from '@/lib/insurance'
import {
  BENEFIT_LABELS,
  PLAN_FINDER_BENEFITS,
  runPlanFinder,
} from '@/lib/insurance'
import { plans } from '@/data/plans'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/input'
import { CheckCircleIcon, SparklesIcon, XIcon } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

interface SmartPlanFinderProps {
  onApply: (result: FinderResult, answers: FinderAnswers) => void
  onClear: () => void
  active: boolean
}

const categoryOptions = [
  { value: 'any', label: 'Anyone' },
  { value: 'individual', label: 'An individual' },
  { value: 'family', label: 'A family' },
  { value: 'self-employed', label: 'Self-employed' },
] as const

export function SmartPlanFinder({
  onApply,
  onClear,
  active,
}: SmartPlanFinderProps) {
  const [answers, setAnswers] = useState<FinderAnswers>({
    category: 'any',
    benefits: [],
    listedPremiumOnly: false,
    priority: 'balanced',
  })

  const toggleBenefit = (benefit: BenefitCategory) => {
    setAnswers((previous) => ({
      ...previous,
      benefits: previous.benefits.includes(benefit)
        ? previous.benefits.filter((entry) => entry !== benefit)
        : [...previous.benefits, benefit],
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onApply(runPlanFinder(plans, answers), answers)
  }

  const reset = () => {
    setAnswers({
      category: 'any',
      benefits: [],
      listedPremiumOnly: false,
      priority: 'balanced',
    })
    onClear()
  }

  return (
    <section
      id="plan-finder"
      aria-labelledby="plan-finder-heading"
      className="scroll-mt-28 rounded-2xl border border-maroon/15 bg-white p-5 shadow-card sm:p-6"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-maroon-light text-maroon">
          <SparklesIcon className="h-5 w-5" />
        </span>
        <div>
          <h2
            id="plan-finder-heading"
            className="text-lg font-semibold tracking-tight text-ink"
          >
            Smart Plan Finder
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Four quick preferences. No medical questions, diagnoses, ID numbers
            or payment details.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-5">
        <fieldset>
          <legend className="text-sm font-medium text-ink">
            Who is looking for cover?
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {categoryOptions.map((option) => (
              <label
                key={option.value}
                className={cn(
                  'cursor-pointer rounded-full border px-3.5 py-2 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-maroon focus-within:ring-offset-2',
                  answers.category === option.value
                    ? 'border-maroon bg-maroon text-white'
                    : 'border-line bg-white text-ink hover:border-maroon/35',
                )}
              >
                <input
                  type="radio"
                  name="finder-category"
                  value={option.value}
                  checked={answers.category === option.value}
                  onChange={() =>
                    setAnswers((previous) => ({
                      ...previous,
                      category: option.value,
                    }))
                  }
                  className="sr-only"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-ink">
            Which benefits matter to you?
          </legend>
          <p className="mt-0.5 text-xs text-muted">
            Optional. Select any that are important; plans are ranked by how
            many they list.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {PLAN_FINDER_BENEFITS.map((benefit) => {
              const checked = answers.benefits.includes(benefit)
              return (
                <label
                  key={benefit}
                  className={cn(
                    'cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-colors focus-within:ring-2 focus-within:ring-maroon focus-within:ring-offset-2',
                    checked
                      ? 'border-maroon bg-maroon-light text-maroon-dark'
                      : 'border-line bg-white text-muted hover:border-maroon/35 hover:text-ink',
                  )}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleBenefit(benefit)}
                    className="sr-only"
                  />
                  <span className="inline-flex items-center gap-1.5">
                    {checked && <CheckCircleIcon className="h-3.5 w-3.5" />}
                    {BENEFIT_LABELS[benefit]}
                  </span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <span className="text-sm font-medium text-ink">Premium</span>
            <label className="mt-2 flex cursor-pointer items-start gap-2.5 rounded-xl border border-line bg-surface p-3 text-sm">
              <input
                type="checkbox"
                checked={answers.listedPremiumOnly}
                onChange={(event) =>
                  setAnswers((previous) => ({
                    ...previous,
                    listedPremiumOnly: event.target.checked,
                  }))
                }
                className="mt-0.5 h-4 w-4 rounded border-line text-maroon accent-maroon focus:ring-maroon"
              />
              <span className="leading-snug text-ink">
                Only show plans with a listed premium
                <span className="mt-0.5 block text-xs text-muted">
                  Plans without a premium will be hidden.
                </span>
              </span>
            </label>
          </div>

          <Select
            label="What matters most?"
            value={answers.priority}
            onChange={(event) =>
              setAnswers((previous) => ({
                ...previous,
                priority: event.target.value as FinderAnswers['priority'],
              }))
            }
          >
            <option value="balanced">A balanced starting point</option>
            <option value="lowest-premium">Lowest listed premium</option>
            <option value="broadest-cover">Broadest list of benefits</option>
            <option value="family-focus">Family cover first</option>
          </Select>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
          <Button type="submit">
            <SparklesIcon className="h-4 w-4" />
            Show matching plans
          </Button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-muted transition-colors hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
          >
            <XIcon className="h-4 w-4" />
            {active ? 'Clear finder results' : 'Reset answers'}
          </button>
        </div>

        <p className="text-xs leading-relaxed text-muted">
          The finder only filters the catalogue. It does not confirm that a plan
          is medically suitable, available or that you qualify. Premiums shown
          here are demonstration data.
        </p>
      </form>
    </section>
  )
}
