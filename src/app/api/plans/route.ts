import { plans } from '@/data/plans'
import {
  DEMO_LABEL,
  filterPlans,
  parsePlanFilters,
} from '@/lib/insurance'

export async function GET(request: Request) {
  const filters = parsePlanFilters(new URL(request.url).searchParams)
  const results = filterPlans(plans, filters)

  return Response.json({
    demonstration: true,
    label: DEMO_LABEL,
    count: results.length,
    filters,
    plans: results,
  })
}
