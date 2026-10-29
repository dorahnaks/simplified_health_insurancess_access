import { insurers } from '@/data/insurers'
import { plans } from '@/data/plans'
import { DEMO_LABEL } from '@/lib/insurance'

export async function GET() {
  return Response.json({
    demonstration: true,
    label: DEMO_LABEL,
    count: insurers.length,
    insurers: insurers.map((insurer) => ({
      ...insurer,
      planIds: plans
        .filter((plan) => plan.insurerId === insurer.id)
        .map((plan) => plan.id),
    })),
  })
}
