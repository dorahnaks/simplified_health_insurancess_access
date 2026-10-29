import type { Metadata } from 'next'
import { PAGE_IMAGES } from '@/constants/images'
import { PageHeader } from '@/components/layout/page-header'
import { CompareExperience } from '@/components/insurance/compare-experience'

export const metadata: Metadata = {
  title: 'Compare health insurance plans',
  description:
    'Compare up to four demonstration health insurance plans side by side, using the same fields for premiums, benefits, limits, exclusions and eligibility.',
}

export default function ComparePage() {
  return (
    <>
      <PageHeader
        eyebrow="Comparison"
        eyebrowKey="page.compare.eyebrow"
        title="Compare plans side by side"
        titleKey="page.compare.title"
        description="Pick up to four plans. We use the same fields for each and highlight the differences."
        descriptionKey="page.compare.description"
        image={{ ...PAGE_IMAGES.compare, badge: 'Up to 4 plans' }}
      />
      <CompareExperience />
    </>
  )
}
