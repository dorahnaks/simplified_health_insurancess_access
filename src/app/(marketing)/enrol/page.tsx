import type { Metadata } from 'next'
import Link from 'next/link'
import { ROUTES } from '@/constants'
import { PAGE_IMAGES } from '@/constants/images'
import { PageHeader } from '@/components/layout/page-header'
import { Container } from '@/components/layout/container'
import { EnrolChecklist } from '@/components/insurance/enrol-checklist'
import { buttonStyles } from '@/components/ui/button'
import {
  ArrowRightIcon,
  BuildingIcon,
  ClipboardListIcon,
  CompassIcon,
  FileTextIcon,
  InfoIcon,
  PhoneIcon,
  ScaleIcon,
  SearchIcon,
  ShieldCheckIcon,
  WalletIcon,
} from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'How to enrol in health insurance',
  description:
    'A practical seven-step guide and preparation checklist for enrolling in health insurance through an insurer or authorised intermediary in Uganda.',
}

const steps = [
  {
    title: 'Identify your needs',
    description:
      'Decide who needs cover and which benefits matter most — hospital care, outpatient visits, maternity or dental care.',
    action: { label: 'Read the insurance guide', href: ROUTES.guide },
    icon: CompassIcon,
  },
  {
    title: 'Compare available plans',
    description:
      'Shortlist two or more plans. Compare premium, benefits, limits, exclusions and waiting periods.',
    action: { label: 'Compare plans', href: ROUTES.compare },
    icon: ScaleIcon,
  },
  {
    title: 'Read the benefits, exclusions and limits',
    description:
      'Check each limit and the period it applies to. Treat missing details as unconfirmed — not as cover.',
    action: { label: 'Browse plans', href: ROUTES.plans },
    icon: SearchIcon,
  },
  {
    title: 'Check eligibility and required documents',
    description:
      'Confirm age limits, dependant rules and the documents the insurer needs. Prepare copies first.',
    action: { label: 'See plan requirements', href: ROUTES.plans },
    icon: FileTextIcon,
  },
  {
    title: 'Contact the insurer or authorised intermediary',
    description:
      'Use the official number, email or website in the insurer directory. Verify any agent before sharing documents or money.',
    action: { label: 'Open insurer directory', href: ROUTES.insurers },
    icon: PhoneIcon,
  },
  {
    title: 'Confirm premiums, payment and unclear conditions',
    description:
      'Ask how and when to pay, what a receipt should look like, and how claims are submitted.',
    action: { label: 'Understand the terms', href: ROUTES.guide },
    icon: WalletIcon,
  },
  {
    title: 'Follow the insurer’s official application process',
    description:
      'Complete the insurer’s own form, submit your documents and keep copies. The insurer decides whether to issue a policy.',
    action: { label: 'Back to insurer contacts', href: ROUTES.insurers },
    icon: ShieldCheckIcon,
  },
]

export default function EnrolPage() {
  return (
    <>
      <PageHeader
        eyebrow="How to enrol"
        eyebrowKey="page.enrol.eyebrow"
        title="Prepare before you apply"
        titleKey="page.enrol.title"
        description="Gather the right documents and know what to ask. The insurer sets the final rules."
        descriptionKey="page.enrol.description"
        image={{ ...PAGE_IMAGES.enrol, badge: '10-point checklist' }}
      />

      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-2 rounded-2xl border border-maroon/15 bg-maroon-light/60 px-4 py-3 text-sm text-maroon-dark sm:flex-row sm:items-center">
          <InfoIcon className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="leading-relaxed">
            <strong className="font-semibold">
              HealthCover Uganda does not enrol you or issue a policy.
            </strong>{' '}
            Enrolment, payment and policy documents are handled by the insurer
            or an authorised intermediary.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
          <ol className="order-2 space-y-4 lg:order-1">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <li
                  key={step.title}
                  className="relative flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"
                >
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-maroon-light text-maroon">
                      <Icon className="h-5 w-5" />
                    </span>
                    {index < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-2 w-px flex-1 bg-line"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Step {index + 1}
                    </p>
                    <h2 className="mt-1 text-base font-semibold text-ink sm:text-lg">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                    <Link
                      href={step.action.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-maroon hover:text-maroon-dark"
                    >
                      {step.action.label}
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </li>
              )
            })}
          </ol>

          <aside className="order-1 space-y-4 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <EnrolChecklist />

            <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <ClipboardListIcon className="h-4 w-4 text-maroon" />
                Useful next steps
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href={ROUTES.plans}
                    className="inline-flex items-center gap-1.5 text-maroon hover:underline underline-offset-2"
                  >
                    Find a plan to compare
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.insurers}
                    className="inline-flex items-center gap-1.5 text-maroon hover:underline underline-offset-2"
                  >
                    <BuildingIcon className="h-3.5 w-3.5" />
                    Insurer contact routes
                  </Link>
                </li>
                <li>
                  <Link
                    href={ROUTES.guide}
                    className="inline-flex items-center gap-1.5 text-maroon hover:underline underline-offset-2"
                  >
                    Check unfamiliar insurance terms
                  </Link>
                </li>
              </ul>
            </div>

            <p className="px-1 text-xs leading-relaxed text-muted">
              This checklist is a preparation aid, not an application. Insurers
              may ask for different documents or medical checks.
            </p>
          </aside>
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-muted">
            Ready to look at the options? Start with the demonstration catalogue
            or compare plans you have already selected.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              href={ROUTES.plans}
              className={buttonStyles({ size: 'sm' })}
            >
              Explore plans
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={ROUTES.compare}
              className={buttonStyles({ variant: 'outline', size: 'sm' })}
            >
              Compare plans
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}
