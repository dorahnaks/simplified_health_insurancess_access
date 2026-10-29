import type { Metadata } from 'next'
import Link from 'next/link'
import { APP_NAME, ROUTES } from '@/constants'
import { Container } from '@/components/layout/container'
import { PageHeader } from '@/components/layout/page-header'
import { statusItems } from '@/components/insurance/status-explainer'
import { StatusPill } from '@/components/insurance/status-pill'
import { ArrowRightIcon, AlertTriangleIcon } from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'Information disclaimer',
  description:
    'What the HealthCover Uganda prototype does and does not claim about plans, cover and enrolment.',
}

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        eyebrowKey="page.disclaimer.eyebrow"
        title="Information disclaimer"
        titleKey="page.disclaimer.title"
        description="This site helps you understand cover. It does not sell insurance, issue policies or decide eligibility."
        descriptionKey="page.disclaimer.description"
      />

      <Container size="narrow" className="py-12 sm:py-16">
        <div className="flex items-start gap-3 rounded-2xl border border-warning/25 bg-warning-soft p-4 sm:p-5">
          <AlertTriangleIcon className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
          <p className="text-sm leading-relaxed text-ink">
            <strong className="font-semibold">Demonstration data.</strong> Every
            plan, premium and contact detail in this prototype is fictional and
            labelled as demonstration data. Nothing here is a real insurance
            offer.
          </p>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted sm:text-base">
          <section>
            <h2 className="text-lg font-semibold tracking-tight text-ink">
              Information and referral only
            </h2>
            <p className="mt-2">
              {APP_NAME} is an informational prototype for the UIA Career Expo
              2026. It is not an insurer, broker, agent or authorised
              intermediary. It does not issue policies, collect premiums,
              guarantee eligibility, complete enrolments or provide claims
              support.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-tight text-ink">
              Confirm everything with the insurer
            </h2>
            <p className="mt-2">
              Product summaries can be incomplete, out of date or simplified.
              Premiums, benefits, limits, waiting periods, exclusions and
              eligibility conditions must be confirmed directly with the insurer
              or an authorised intermediary before you pay for cover. The terms
              of any policy are set by the insurer’s official policy documents,
              not by this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-tight text-ink">
              Missing information is not an exclusion
            </h2>
            <p className="mt-2">
              Where information is unavailable, we label it as unclear and ask
              you to check with the insurer. A blank or missing benefit field
              never means that a benefit is excluded, and it never means that a
              benefit is included.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {statusItems.map((item) => (
                <li
                  key={item.status}
                  className="rounded-xl border border-line bg-surface p-3"
                >
                  <StatusPill status={item.status} />
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-tight text-ink">
              Not medical or financial advice
            </h2>
            <p className="mt-2">
              Nothing on this website is personalised medical, financial, legal
              or insurance advice. It does not assess whether a plan is suitable
              for your health needs. Speak to a qualified professional and the
              insurer for advice about your circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-tight text-ink">
              No partnership implied
            </h2>
            <p className="mt-2">
              The insurer names used in the demonstration catalogue are
              fictional. No partnership, endorsement, regulatory approval or
              affiliation with any real insurer or the Uganda Insurers
              Association is claimed or implied.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-surface p-5">
          <h2 className="text-sm font-semibold text-ink">Last reviewed</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            October 2026. This page describes the prototype as built and is not a
            legal certification.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={ROUTES.privacy}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:text-maroon-dark"
          >
            Read the privacy notice
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
          <Link
            href={ROUTES.home}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-maroon sm:ml-auto"
          >
            Back to home
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </>
  )
}
