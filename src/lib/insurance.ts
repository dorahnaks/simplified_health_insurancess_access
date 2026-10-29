import type {
  Benefit,
  BenefitCategory,
  ComparisonCellKind,
  ComparisonRow,
  ComparisonValue,
  CustomerCategory,
  Insurer,
  LimitPeriod,
  Plan,
  Premium,
  PremiumFrequency,
} from '@/types/insurance'
import { insurers } from '@/data/insurers'
import { plans } from '@/data/plans'

export const DEMO_LABEL =
  'DEMONSTRATION DATA — NOT A REAL INSURANCE OFFER'

export const CATEGORY_LABELS: Record<CustomerCategory, string> = {
  individual: 'Individual',
  family: 'Family',
  'self-employed': 'Self-employed',
}

export const CATEGORY_DESCRIPTIONS: Record<CustomerCategory, string> = {
  individual: 'Cover for one adult.',
  family: 'Cover for a principal member and dependants.',
  'self-employed': 'Cover for informal-sector and independent workers.',
}

export const BENEFIT_LABELS: Record<BenefitCategory, string> = {
  hospitalisation: 'Hospitalisation',
  outpatient: 'Outpatient care',
  maternity: 'Maternity',
  dental: 'Dental care',
  optical: 'Optical care',
  prescriptions: 'Prescriptions',
  emergency: 'Emergency care',
  'chronic-care': 'Chronic care',
  'mental-health': 'Mental health',
  laboratory: 'Laboratory tests',
}

export const BENEFIT_CATEGORIES = Object.keys(
  BENEFIT_LABELS,
) as BenefitCategory[]

export const LIMIT_PERIOD_LABELS: Record<LimitPeriod, string> = {
  'per-visit': 'per visit',
  'per-admission': 'per admission',
  'per-year': 'per year',
  'per-policy-term': 'per policy term',
  lifetime: 'for life',
}

export const FREQUENCY_LABELS: Record<PremiumFrequency, string> = {
  monthly: 'per month',
  quarterly: 'per quarter',
  annually: 'per year',
}

export const FREQUENCY_OPTIONS: { value: PremiumFrequency; label: string }[] = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'annually', label: 'Annually' },
]

export function getInsurer(insurerId: string): Insurer | undefined {
  return insurers.find((insurer) => insurer.id === insurerId)
}

export function getInsurerForPlan(plan: Plan): Insurer {
  return (
    getInsurer(plan.insurerId) ?? {
      id: 'unknown',
      name: 'Insurer details unavailable',
      description: '',
      website: null,
      phone: null,
      email: null,
      intermediary: null,
      lastVerified: null,
      isDemonstration: true,
    }
  )
}

export function formatAmount(amount: number): string {
  return `UGX ${amount.toLocaleString('en-UG')}`
}

export function formatPremium(premium: Premium | null): string {
  if (!premium) return 'Contact insurer for details'
  return `${formatAmount(premium.amount)} ${FREQUENCY_LABELS[premium.frequency]}`
}

export function formatLimit(benefit: Benefit): string | null {
  if (!benefit.limit && !benefit.limitPeriod) return null
  const period = benefit.limitPeriod
    ? LIMIT_PERIOD_LABELS[benefit.limitPeriod]
    : null
  if (benefit.limit && period) return `${benefit.limit} ${period}`
  return benefit.limit ?? period
}

export function benefitsFor(
  plan: Plan,
  category: BenefitCategory,
): Benefit[] {
  return plan.benefits.filter((benefit) => benefit.category === category)
}

export function hasBenefit(plan: Plan, category: BenefitCategory): boolean {
  return plan.benefits.some((benefit) => benefit.category === category)
}

export interface PlanFilters {
  query: string
  insurerId: string
  category: CustomerCategory | ''
  benefit: BenefitCategory | ''
  sort: 'recommended' | 'premium-asc' | 'premium-desc' | 'name'
}

export const DEFAULT_FILTERS: PlanFilters = {
  query: '',
  insurerId: '',
  category: '',
  benefit: '',
  sort: 'recommended',
}

export const PLAN_SORTS: PlanFilters['sort'][] = [
  'recommended',
  'premium-asc',
  'premium-desc',
  'name',
]

export function parsePlanFilters(params: URLSearchParams): PlanFilters {
  const category = params.get('category')
  const benefit = params.get('benefit')
  const sort = params.get('sort')
  return {
    query: params.get('q') ?? '',
    insurerId: params.get('insurer') ?? '',
    category: CATEGORY_LABELS[category as CustomerCategory]
      ? (category as CustomerCategory)
      : '',
    benefit: BENEFIT_LABELS[benefit as BenefitCategory]
      ? (benefit as BenefitCategory)
      : '',
    sort: PLAN_SORTS.includes(sort as PlanFilters['sort'])
      ? (sort as PlanFilters['sort'])
      : 'recommended',
  }
}

export function filterPlans(
  source: Plan[],
  filters: PlanFilters,
): Plan[] {
  const query = filters.query.trim().toLowerCase()

  const result = source.filter((plan) => {
    const insurer = getInsurerForPlan(plan)
    const matchesQuery =
      !query ||
      plan.name.toLowerCase().includes(query) ||
      insurer.name.toLowerCase().includes(query) ||
      plan.description.toLowerCase().includes(query)

    const matchesInsurer =
      !filters.insurerId || plan.insurerId === filters.insurerId
    const matchesCategory =
      !filters.category || plan.intendedFor.includes(filters.category)
    const matchesBenefit =
      !filters.benefit || hasBenefit(plan, filters.benefit)

    return (
      matchesQuery && matchesInsurer && matchesCategory && matchesBenefit
    )
  })

  if (filters.sort === 'name') {
    return [...result].sort((a, b) => a.name.localeCompare(b.name))
  }

  if (filters.sort === 'premium-asc' || filters.sort === 'premium-desc') {
    const direction = filters.sort === 'premium-asc' ? 1 : -1
    return [...result].sort((a, b) => {
      const aPremium = a.premium?.amount ?? Number.POSITIVE_INFINITY
      const bPremium = b.premium?.amount ?? Number.POSITIVE_INFINITY
      if (aPremium === bPremium) return a.name.localeCompare(b.name)
      return (aPremium - bPremium) * direction
    })
  }

  return result
}

export const PLAN_FINDER_BENEFITS: BenefitCategory[] = [
  'hospitalisation',
  'outpatient',
  'maternity',
  'dental',
  'optical',
  'mental-health',
  'emergency',
]

export type FinderCategory = CustomerCategory | 'any'
export type FinderPriority =
  | 'balanced'
  | 'lowest-premium'
  | 'broadest-cover'
  | 'family-focus'

export interface FinderAnswers {
  category: FinderCategory
  benefits: BenefitCategory[]
  listedPremiumOnly: boolean
  priority: FinderPriority
}

export interface FinderResult {
  ids: string[]
  reasons: Record<string, string[]>
  note: string | null
}

export function runPlanFinder(
  source: Plan[],
  answers: FinderAnswers,
): FinderResult {
  const candidates = source.filter((plan) => {
    if (
      answers.category !== 'any' &&
      !plan.intendedFor.includes(answers.category)
    ) {
      return false
    }
    if (answers.listedPremiumOnly && !plan.premium) return false
    if (answers.benefits.length === 0) return true
    return answers.benefits.some((benefit) => hasBenefit(plan, benefit))
  })

  const scored = candidates.map((plan) => {
    const matched = answers.benefits.filter((benefit) =>
      hasBenefit(plan, benefit),
    )
    const missing = answers.benefits.filter(
      (benefit) => !hasBenefit(plan, benefit),
    )
    const reasons: string[] = []

    if (answers.category !== 'any') {
      reasons.push(`Listed for ${CATEGORY_LABELS[answers.category].toLowerCase()} cover`)
    }
    if (matched.length > 0) {
      reasons.push(
        `Includes ${matched
          .map((benefit) => BENEFIT_LABELS[benefit].toLowerCase())
          .join(', ')}`,
      )
    }
    if (plan.premium) {
      reasons.push(`Premium listed: ${formatPremium(plan.premium)}`)
    } else {
      reasons.push('Premium not provided — confirm with the insurer')
    }
    if (missing.length > 0) {
      reasons.push(
        `Does not list ${missing
          .map((benefit) => BENEFIT_LABELS[benefit].toLowerCase())
          .join(', ')} — check with the insurer`,
      )
    }

    return { plan, reasons, matchedCount: matched.length }
  })

  const sorted = [...scored].sort((a, b) => {
    if (answers.priority === 'lowest-premium') {
      const aPremium = a.plan.premium?.amount ?? Number.POSITIVE_INFINITY
      const bPremium = b.plan.premium?.amount ?? Number.POSITIVE_INFINITY
      if (aPremium !== bPremium) return aPremium - bPremium
    }
    if (answers.priority === 'broadest-cover') {
      if (a.plan.benefits.length !== b.plan.benefits.length) {
        return b.plan.benefits.length - a.plan.benefits.length
      }
    }
    if (answers.priority === 'family-focus') {
      const aFamily = a.plan.intendedFor.includes('family') ? 1 : 0
      const bFamily = b.plan.intendedFor.includes('family') ? 1 : 0
      if (aFamily !== bFamily) return bFamily - aFamily
    }
    if (a.matchedCount !== b.matchedCount) {
      return b.matchedCount - a.matchedCount
    }
    return a.plan.name.localeCompare(b.plan.name)
  })

  const enoughForEveryBenefit =
    answers.benefits.length === 0 ||
    sorted.some((entry) => entry.matchedCount === answers.benefits.length)

  const note = enoughForEveryBenefit
    ? null
    : 'No plan in the catalogue lists every benefit you chose. These plans list at least one of them — check the gaps with the insurer.'

  return {
    ids: sorted.map((entry) => entry.plan.id),
    reasons: Object.fromEntries(
      sorted.map((entry) => [entry.plan.id, entry.reasons]),
    ),
    note,
  }
}

function benefitLines(plan: Plan, categories: BenefitCategory[]): ComparisonValue {
  const lines = plan.benefits
    .filter((benefit) => categories.includes(benefit.category))
    .map((benefit) => {
      const limit = formatLimit(benefit)
      return limit
        ? `${BENEFIT_LABELS[benefit.category]}: ${benefit.summary} (${limit})`
        : `${BENEFIT_LABELS[benefit.category]}: ${benefit.summary}`
    })

  if (lines.length === 0) {
    return {
      lines: ['Not listed in the available information — check with the insurer'],
      kind: 'check-first',
    }
  }

  return { lines, kind: 'covered' }
}

function listOrMissing(
  values: string[] | null,
  missingText: string,
  kind: ComparisonCellKind = 'info',
): ComparisonValue {
  if (!values || values.length === 0) {
    return { lines: [missingText], kind: 'check-first' }
  }
  return { lines: values, kind }
}

function contactValue(plan: Plan): ComparisonValue {
  const insurer = getInsurerForPlan(plan)
  const lines = [
    insurer.website ? `Website: ${insurer.website}` : null,
    insurer.phone ? `Phone: ${insurer.phone}` : null,
    insurer.email ? `Email: ${insurer.email}` : null,
  ].filter((line): line is string => Boolean(line))

  if (lines.length === 0) {
    return {
      lines: ['Contact details not provided — verify with the insurer'],
      kind: 'check-first',
    }
  }
  return { lines, kind: 'info' }
}

export function buildComparisonRows(
  selectedPlans: Plan[],
): ComparisonRow[] {
  const valueMap = (
    build: (plan: Plan) => ComparisonValue,
  ): Record<string, ComparisonValue> =>
    Object.fromEntries(selectedPlans.map((plan) => [plan.id, build(plan)]))

  const rows: ComparisonRow[] = [
    {
      label: 'Insurer',
      values: valueMap((plan) => ({
        lines: [getInsurerForPlan(plan).name],
        kind: 'info',
      })),
    },
    {
      label: 'Premium',
      hint: 'The amount paid to keep the policy active, as listed in the available information.',
      values: valueMap((plan) =>
        plan.premium
          ? { lines: [formatPremium(plan.premium)], kind: 'info' }
          : {
              lines: [plan.premiumNote ?? 'Not provided — check with the insurer'],
              kind: 'check-first',
            },
      ),
    },
    {
      label: 'Payment frequency',
      values: valueMap((plan) =>
        plan.premium
          ? {
              lines: [
                plan.premium.frequency.charAt(0).toUpperCase() +
                  plan.premium.frequency.slice(1),
              ],
              kind: 'info',
            }
          : { lines: ['Not provided'], kind: 'check-first' },
      ),
    },
    {
      label: 'Intended customer',
      values: valueMap((plan) => ({
        lines: plan.intendedFor.map((category) => CATEGORY_LABELS[category]),
        kind: 'info',
      })),
    },
    {
      label: 'Hospitalisation benefits',
      values: valueMap((plan) => benefitLines(plan, ['hospitalisation'])),
    },
    {
      label: 'Outpatient benefits',
      values: valueMap((plan) => benefitLines(plan, ['outpatient'])),
    },
  ]

  const hasMaternity = selectedPlans.some(
    (plan) =>
      hasBenefit(plan, 'maternity') ||
      plan.exclusions.some((exclusion) =>
        exclusion.toLowerCase().includes('maternity'),
      ),
  )

  if (hasMaternity) {
    rows.push({
      label: 'Maternity benefits',
      values: valueMap((plan) => benefitLines(plan, ['maternity'])),
    })
  }

  rows.push(
    {
      label: 'Other supplied benefits',
      values: valueMap((plan) =>
        benefitLines(
          plan,
          BENEFIT_CATEGORIES.filter(
            (category) =>
              !['hospitalisation', 'outpatient', 'maternity'].includes(
                category,
              ),
          ),
        ),
      ),
    },
    {
      label: 'Benefit limits and periods',
      hint: 'Each limit applies only for the period stated. Limits may be shared across a family.',
      values: valueMap((plan) => {
        const lines = plan.benefits
          .map((benefit) => {
            const limit = formatLimit(benefit)
            return limit
              ? `${BENEFIT_LABELS[benefit.category]}: ${limit}`
              : null
          })
          .filter((line): line is string => Boolean(line))
        if (lines.length === 0) {
          return {
            lines: ['Limits are not stated in the available information'],
            kind: 'check-first',
          }
        }
        return { lines, kind: 'info' }
      }),
    },
    {
      label: 'Exclusions',
      hint: 'These are treatments explicitly excluded. Missing information is not an exclusion.',
      values: valueMap((plan) => listOrMissing(plan.exclusions, 'No exclusions listed', 'excluded')),
    },
    {
      label: 'Waiting periods',
      hint: 'Benefits that only become available after a period of time.',
      values: valueMap((plan) =>
        listOrMissing(
          plan.waitingPeriods?.map(
            (waiting) =>
              `${waiting.label}: ${waiting.duration}${waiting.note ? ` (${waiting.note})` : ''}`,
          ) ?? null,
          'Not provided — check with the insurer',
        ),
      ),
    },
    {
      label: 'Eligibility requirements',
      values: valueMap((plan) =>
        listOrMissing(
          plan.eligibility,
          'Not provided — check with the insurer',
        ),
      ),
    },
    {
      label: 'Required documents',
      values: valueMap((plan) =>
        listOrMissing(
          plan.requiredDocuments,
          'Not provided — check with the insurer',
        ),
      ),
    },
    {
      label: 'Enrolment instructions',
      values: valueMap((plan) =>
        listOrMissing(
          plan.enrolmentSteps,
          'Not provided — contact the insurer directly',
        ),
      ),
    },
    {
      label: 'Insurer contact route',
      values: valueMap((plan) => contactValue(plan)),
    },
  )

  return rows.map((row) => ({
    ...row,
    differs: rowsDiffer(row),
  }))
}

function rowsDiffer(row: ComparisonRow): boolean {
  const signatures = Object.values(row.values).map((value) =>
    value.lines.join('|').toLowerCase(),
  )
  return new Set(signatures).size > 1
}

export const COMPARISON_LIMIT = 4

export function getFeaturedPlans(): Plan[] {
  return plans.filter((plan) =>
    ['nile-jua-starter', 'rift-boda-shield', 'equator-family-health'].includes(
      plan.id,
    ),
  )
}

export function getAllPlanIds(): string[] {
  return plans.map((plan) => plan.id)
}
