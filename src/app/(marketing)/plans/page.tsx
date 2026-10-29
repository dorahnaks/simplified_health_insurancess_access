import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { ROUTES } from '@/constants'
import { PAGE_IMAGES } from '@/constants/images'
import { PageHeader } from '@/components/layout/page-header'
import {
  Catalogue,
  CatalogueSkeleton,
} from '@/components/insurance/catalogue'
import { buttonStyles } from '@/components/ui/button'
import { SparklesIcon } from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'Explore health insurance plans',
  description:
    'Search and filter demonstration health insurance plans by insurer, customer type and benefits. Compare cover, exclusions and limits.',
}

export default function PlansPage(props: PageProps<'/plans'>) {
  return (
    <>
      <PageHeader
        eyebrow="Plan catalogue"
        eyebrowKey="page.plans.eyebrow"
        title="Explore plans"
        titleKey="page.plans.title"
        description="Search, filter and open any plan. See cover, limits and exclusions."
        descriptionKey="page.plans.description"
        image={{ ...PAGE_IMAGES.plans, badge: '6 demo plans' }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`${ROUTES.plans}#plan-finder`}
            className={buttonStyles({ variant: 'secondary', size: 'sm' })}
          >
            <SparklesIcon className="h-4 w-4" />
            Open Smart Plan Finder
          </Link>
          <p className="text-xs text-muted">
            Plans are demonstration data — not real offers.
          </p>
        </div>
      </PageHeader>

      <Suspense fallback={<CatalogueSkeleton />}>
        <CatalogueSection searchParams={props.searchParams} />
      </Suspense>
    </>
  )
}

async function CatalogueSection({
  searchParams,
}: Pick<PageProps<'/plans'>, 'searchParams'>) {
  const resolved = await searchParams
  const params = new URLSearchParams()

  for (const [key, value] of Object.entries(resolved)) {
    if (typeof value === 'string') params.set(key, value)
  }

  return <Catalogue paramsKey={params.toString()} />
}
