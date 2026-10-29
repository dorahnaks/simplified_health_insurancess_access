import type { Insurer } from '@/types/insurance'

/**
 * Fictional insurers created for the UIA Career Expo 2026 prototype.
 * All names, contacts and domains are demonstration data. Do not present
 * them as real companies or partnerships.
 */
export const insurers: Insurer[] = [
  {
    id: 'nilecare',
    name: 'NileCare Insurance',
    description:
      'Demonstration insurer offering entry-level individual cover and a family plan. Fictional company used to show how plan information could be presented.',
    website: 'https://nilecare.example',
    phone: '+256 800 000 101',
    email: 'hello@nilecare.example',
    intermediary:
      'Demonstration broker desk: Lakeside Benefits (fictional). Confirm any real intermediary with the insurer.',
    lastVerified: null,
    isDemonstration: true,
  },
  {
    id: 'rift-valley',
    name: 'Rift Valley Health Assurance',
    description:
      'Demonstration insurer focused on informal-sector workers, including a plan for motorcycle riders. Fictional company used for this prototype.',
    website: 'https://riftvalley.example',
    phone: '+256 800 000 202',
    email: 'care@riftvalley.example',
    intermediary: null,
    lastVerified: null,
    isDemonstration: true,
  },
  {
    id: 'equator-shield',
    name: 'Equator Shield Insurance',
    description:
      'Demonstration insurer with individual and family products that include dental, optical and mental-health benefits. Fictional company used for this prototype.',
    website: 'https://equatorshield.example',
    phone: '+256 800 000 303',
    email: 'support@equatorshield.example',
    intermediary:
      'Demonstration agent network: Equator Community Agents (fictional). Confirm any real intermediary with the insurer.',
    lastVerified: null,
    isDemonstration: true,
  },
]
