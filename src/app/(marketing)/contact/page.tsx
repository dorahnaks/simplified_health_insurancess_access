import type { Metadata } from 'next'
import Link from 'next/link'
import { ROUTES } from '@/constants'
import { PAGE_IMAGES } from '@/constants/images'
import { PageHeader } from '@/components/layout/page-header'
import { Container } from '@/components/layout/container'
import { ContactForm } from '@/components/insurance/contact-form'
import { buttonStyles } from '@/components/ui/button'
import {
  ArrowRightIcon,
  BuildingIcon,
  InfoIcon,
  LockIcon,
  ShieldIcon,
} from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'Contact and feedback',
  description:
    'Send feedback about the HealthCover Uganda prototype. The form validates locally and does not transmit messages because no backend exists.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        eyebrowKey="page.contact.eyebrow"
        title="Questions or feedback?"
        titleKey="page.contact.title"
        description="This prototype has no phone line or inbox. For plan questions, contact the insurer directly."
        descriptionKey="page.contact.description"
        image={{ ...PAGE_IMAGES.contact, badge: 'Feedback' }}
      />

      <Container className="py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <ContactForm />

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <BuildingIcon className="h-4 w-4 text-maroon" />
                Asking about a plan?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Plan availability, eligibility, premiums and claims must be
                confirmed with the insurer. Use the official contact route shown
                for each insurer.
              </p>
              <Link
                href={ROUTES.insurers}
                className={buttonStyles({
                  variant: 'outline',
                  size: 'sm',
                  className: 'mt-4 w-full',
                })}
              >
                Open insurer directory
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-5 text-sm leading-relaxed text-muted">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <InfoIcon className="h-4 w-4 text-maroon" />
                Platform contact details
              </h2>
              <p className="mt-2">
                No verified platform telephone number or email address is
                available for this prototype, so none is displayed. Provider
                contact details require verification before publication.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 text-sm leading-relaxed text-muted shadow-card">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <LockIcon className="h-4 w-4 text-maroon" />
                Keep it safe
              </h2>
              <ul className="mt-2 space-y-2">
                <li>
                  Do not send medical histories, diagnoses, ID numbers or
                  payment details through the feedback form.
                </li>
                <li>
                  Never send money to an agent without confirming the insurer’s
                  official payment channel.
                </li>
                <li>
                  Read the{' '}
                  <Link
                    href={ROUTES.privacy}
                    className="font-medium text-maroon underline underline-offset-2"
                  >
                    privacy notice
                  </Link>{' '}
                  to see what this prototype stores.
                </li>
              </ul>
            </div>

            <p className="flex items-start gap-2 px-1 text-xs leading-relaxed text-muted">
              <ShieldIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-maroon" />
              HealthCover Uganda provides information and referrals. It does not
              issue policies or decide eligibility.
            </p>
          </aside>
        </div>
      </Container>
    </>
  )
}
