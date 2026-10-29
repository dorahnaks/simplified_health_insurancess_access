import type { Metadata } from 'next'
import { PAGE_IMAGES } from '@/constants/images'
import { PageHeader } from '@/components/layout/page-header'
import { InsurerDirectory } from '@/components/insurance/insurer-directory'

export const metadata: Metadata = {
  title: 'Insurers and contacts',
  description:
    'Browse demonstration health insurers, their plans and official contact routes. Verify all insurer details independently before enrolling.',
}

export default function InsurersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insurer directory"
        eyebrowKey="page.insurers.eyebrow"
        title="Insurers and contacts"
        titleKey="page.insurers.title"
        description="Find the insurer behind each plan and the contact route we have."
        descriptionKey="page.insurers.description"
        image={{ ...PAGE_IMAGES.insurers, badge: '3 demo insurers' }}
      />
      <InsurerDirectory />
    </>
  )
}
