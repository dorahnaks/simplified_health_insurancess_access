import type { Status } from '@/components/insurance/status-pill'

interface StatusItem {
  status: Status
  title: string
  description: string
}

export const statusItems: StatusItem[] = [
  {
    status: 'covered',
    title: 'Covered',
    description: 'Benefits the available information explicitly lists.',
  },
  {
    status: 'excluded',
    title: 'Not covered',
    description: 'Exclusions the available information explicitly states.',
  },
  {
    status: 'check-first',
    title: 'Check first',
    description:
      'Unclear, conditional or missing details to confirm with the insurer.',
  },
]
