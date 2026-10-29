import type { CustomerCategory, Plan } from '@/types/insurance'

export const IMAGE_CAPTION =
  'Illustrative image — not a real clinic, insurer or person.'

export interface ContentImage {
  src: string
  alt: string
  position?: string
}

export const CATEGORY_IMAGES: Record<CustomerCategory, ContentImage> = {
  individual: {
    src: '/images/individual-cover.jpg',
    alt: 'A woman standing outdoors in a green neighbourhood',
    position: '50% 35%',
  },
  family: {
    src: '/images/hero-family.jpg',
    alt: 'Parents walking with their child in the evening light',
    position: '62% 42%',
  },
  'self-employed': {
    src: '/images/community-market.jpg',
    alt: 'A market vendor checking her phone at her stall',
    position: '55% 35%',
  },
}

export function getPlanImage(
  plan: Pick<Plan, 'intendedFor'>,
): ContentImage {
  return CATEGORY_IMAGES[plan.intendedFor[0] ?? 'individual']
}

export const PAGE_IMAGES = {
  plans: {
    src: '/images/individual-cover.jpg',
    alt: 'A woman smiling in a quiet residential street',
    position: '50% 30%',
  },
  compare: {
    src: '/images/plan-review.jpg',
    alt: 'A couple reading through plan documents together',
    position: '50% 40%',
  },
  guide: {
    src: '/images/clinic-consultation.jpg',
    alt: 'A nurse explaining something to a patient in a clinic',
    position: '50% 40%',
  },
  enrol: {
    src: '/images/enrolment-documents.jpg',
    alt: 'Hands holding a phone above application papers and a pen',
    position: '50% 45%',
  },
  insurers: {
    src: '/images/community-market.jpg',
    alt: 'A market vendor in Kikuubo market',
    position: '55% 30%',
  },
  about: {
    src: '/images/community-market.jpg',
    alt: 'A market vendor smiling while checking her phone',
    position: '55% 30%',
  },
  contact: {
    src: '/images/plan-review.jpg',
    alt: 'Two people reviewing paperwork at a table',
    position: '50% 35%',
  },
} satisfies Record<string, ContentImage>
