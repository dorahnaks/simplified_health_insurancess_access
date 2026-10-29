export type CustomerCategory = 'individual' | 'family' | 'self-employed'

export type BenefitCategory =
  | 'hospitalisation'
  | 'outpatient'
  | 'maternity'
  | 'dental'
  | 'optical'
  | 'prescriptions'
  | 'emergency'
  | 'chronic-care'
  | 'mental-health'
  | 'laboratory'

export type LimitPeriod =
  | 'per-visit'
  | 'per-admission'
  | 'per-year'
  | 'per-policy-term'
  | 'lifetime'

export type PremiumFrequency = 'monthly' | 'quarterly' | 'annually'

export interface Premium {
  amount: number
  currency: 'UGX'
  frequency: PremiumFrequency
}

export interface Benefit {
  category: BenefitCategory
  summary: string
  limit: string | null
  limitPeriod: LimitPeriod | null
}

export interface WaitingPeriod {
  label: string
  duration: string
  note?: string
}

export interface Insurer {
  id: string
  name: string
  description: string
  website: string | null
  phone: string | null
  email: string | null
  intermediary: string | null
  lastVerified: string | null
  isDemonstration: boolean
}

export interface Plan {
  id: string
  insurerId: string
  name: string
  description: string
  intendedFor: CustomerCategory[]
  premium: Premium | null
  premiumNote: string | null
  benefits: Benefit[]
  exclusions: string[]
  checkFirst: string[]
  waitingPeriods: WaitingPeriod[] | null
  eligibility: string[] | null
  requiredDocuments: string[] | null
  enrolmentSteps: string[] | null
  contactUrl: string | null
  source: string
  lastVerified: string | null
  isDemonstration: boolean
}

export interface GlossaryEntry {
  id: string
  term: string
  aliases: string[]
  definition: string
  example: string | null
}

export interface FaqItem {
  question: string
  answer: string
}

export type ComparisonCellKind = 'covered' | 'excluded' | 'check-first' | 'info'

export interface ComparisonValue {
  lines: string[]
  kind: ComparisonCellKind
}

export interface ComparisonRow {
  label: string
  /** Values keyed by plan id. */
  values: Record<string, ComparisonValue>
  differs?: boolean
  hint?: string
}
