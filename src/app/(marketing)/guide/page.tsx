import type { Metadata } from 'next'
import { PAGE_IMAGES } from '@/constants/images'
import { PageHeader } from '@/components/layout/page-header'
import { GuideExperience } from '@/components/insurance/guide-experience'

export const metadata: Metadata = {
  title: 'Insurance guide',
  description:
    'Plain-English explanations of premiums, benefit limits, exclusions, waiting periods, dependants and other health insurance terms, with examples.',
}

export default function GuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Insurance guide"
        eyebrowKey="page.guide.eyebrow"
        title="Understand the words first"
        titleKey="page.guide.title"
        description="Health insurance has its own words. Learn them here, with simple examples."
        descriptionKey="page.guide.description"
        image={{ ...PAGE_IMAGES.guide, badge: 'Plain English' }}
      />
      <GuideExperience />
    </>
  )
}
