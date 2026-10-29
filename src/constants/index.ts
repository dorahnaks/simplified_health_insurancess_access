// ─── App ─────────────────────────────────────────────────────────────────────

export const APP_NAME = 'HealthCover Uganda'
export const APP_SHORT_NAME = 'HealthCover'
export const APP_DESCRIPTION =
  'Explore health insurance plans in Uganda, understand what is covered and compare plans with confidence.'

// ─── Routes ──────────────────────────────────────────────────────────────────

export const ROUTES = {
  home: '/',
  plans: '/plans',
  compare: '/compare',
  guide: '/guide',
  enrol: '/enrol',
  insurers: '/insurers',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  disclaimer: '/disclaimer',
} as const

export const NAV_ITEMS = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Explore Plans', href: ROUTES.plans },
  { label: 'Compare Plans', href: ROUTES.compare },
  { label: 'Insurance Guide', href: ROUTES.guide },
  { label: 'How to Enrol', href: ROUTES.enrol },
  { label: 'Insurers', href: ROUTES.insurers },
  { label: 'Contact', href: ROUTES.contact },
] as const

// ─── Pagination ───────────────────────────────────────────────────────────────

export const DEFAULT_PAGE_SIZE = 20
export const MAX_PAGE_SIZE = 100
