import type { Metadata } from 'next'
import { getFeaturedPlans } from '@/lib/insurance'
import { HomeContent } from '@/components/home/home-content'

export const metadata: Metadata = {
  title: 'Health insurance, made simple',
  description:
    'Explore health insurance plans in Uganda, understand what is covered and compare plans with confidence.',
}

export default function HomePage() {
  return <HomeContent featuredPlans={getFeaturedPlans()} />
}
