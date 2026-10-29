import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ROUTES } from '@/constants'
import { getPlanById } from '@/data/plans'
import {
  BENEFIT_LABELS,
  CATEGORY_LABELS,
  formatLimit,
  formatPremium,
  getAllPlanIds,
  getInsurerForPlan,
} from '@/lib/insurance'
import { Container } from '@/components/layout/container'
import { DemoDataBanner, DemoTag } from '@/components/insurance/demo-banner'
import { TermHint } from '@/components/insurance/term-hint'
import { CompareToggle } from '@/components/insurance/compare-toggle'
import { buttonStyles } from '@/components/ui/button'
import {
  AlertTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BuildingIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronRightIcon,
  ClipboardListIcon,
  ClockIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GlobeIcon,
  InfoIcon,
  ListChecksIcon,
  MailIcon,
  PhoneIcon,
  ShieldCheckIcon,
  XCircleIcon,
} from '@/components/ui/icons'
import { cn, formatDate } from '@/lib/utils'

interface PlanPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return getAllPlanIds().map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: PlanPageProps): Promise<Metadata> {
  const { id } = await params
  const plan = getPlanById(id)
  if (!plan) return { title: 'Plan not found' }
  const insurer = getInsurerForPlan(plan)
  return {
    title: `${plan.name} — ${insurer.name}`,
    description: plan.description,
  }
}

type SectionTone = 'default' | 'covered' | 'excluded' | 'check-first' | 'info'

const sectionTones: Record<SectionTone, string> = {
  default: 'border-line bg-surface',
  covered: 'border-success/20 bg-success-soft',
  excluded: 'border-danger/20 bg-danger-soft',
  'check-first': 'border-warning/25 bg-warning-soft',
  info: 'border-maroon/15 bg-maroon-light',
}

const sectionTitleTones: Record<SectionTone, string> = {
  default: 'text-ink',
  covered: 'text-success',
  excluded: 'text-danger',
  'check-first': 'text-warning',
  info: 'text-maroon-dark',
}

function SectionCard({
  id,
  title,
  description,
  tone = 'default',
  icon,
  children,
}: {
  id: string
  title: string
  description?: React.ReactNode
  tone?: SectionTone
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-white shadow-card"
    >
      <div className={cn('border-b px-5 py-4 sm:px-6', sectionTones[tone])}>
        <h2
          id={`${id}-heading`}
          className={cn(
            'flex items-center gap-2.5 text-lg font-semibold tracking-tight',
            sectionTitleTones[tone],
          )}
        >
          <span className="shrink-0">{icon}</span>
          {title}
        </h2>
        {description && (
          <div className="mt-1.5 pl-[34px] text-sm leading-relaxed text-muted">
            {description}
          </div>
        )}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </section>
  )
}

function MissingNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex gap-2.5 rounded-xl border border-warning/25 bg-warning-soft px-4 py-3 text-sm leading-relaxed text-warning">
      <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0" />
      <span>{children}</span>
    </p>
  )
}

function BulletList({
  items,
  icon,
}: {
  items: string[]
  icon: React.ReactNode
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink">
          <span className="mt-0.5 shrink-0">{icon}</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default async function PlanDetailPage({ params }: PlanPageProps) {
  const { id } = await params
  const plan = getPlanById(id)

  if (!plan) notFound()

  const insurer = getInsurerForPlan(plan)
  const primaryContactHref =
    plan.contactUrl ??
    insurer.website ??
    (insurer.email ? `mailto:${insurer.email}` : null) ??
    (insurer.phone ? `tel:${insurer.phone.replace(/[^\d+]/g, '')}` : null)

  const confirmations = [
    ...plan.checkFirst,
    'Read the full policy document and benefit schedule before paying anything.',
    'Confirm the official payment channel and insist on a receipt.',
    'Check that every dependant is named correctly on the policy.',
  ]

  const contactItems = [
    insurer.website && {
      label: 'Website',
      display: insurer.website.replace(/^https?:\/\//, ''),
      href: insurer.website,
      icon: GlobeIcon,
    },
    insurer.phone && {
      label: 'Telephone',
      display: insurer.phone,
      href: `tel:${insurer.phone.replace(/[^\d+]/g, '')}`,
      icon: PhoneIcon,
    },
    insurer.email && {
      label: 'Email',
      display: insurer.email,
      href: `mailto:${insurer.email}`,
      icon: MailIcon,
    },
  ].filter(
    (
      item,
    ): item is {
      label: string
      display: string
      href: string
      icon: typeof GlobeIcon
    } => Boolean(item),
  )

  return (
    <>
      <div className="border-b border-line bg-white">
        <Container className="py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
              <li>
                <Link
                  href={ROUTES.home}
                  className="hover:text-maroon hover:underline underline-offset-2"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link
                  href={ROUTES.plans}
                  className="hover:text-maroon hover:underline underline-offset-2"
                >
                  Explore plans
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-medium text-ink">
                {plan.name}
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      <section className="border-b border-line bg-surface">
        <Container className="py-9 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-maroon">
                  {insurer.name}
                </p>
                {plan.isDemonstration && <DemoTag />}
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {plan.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {plan.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {plan.intendedFor.map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted"
                  >
                    {CATEGORY_LABELS[category]}
                  </span>
                ))}
              </div>
              <p className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted">
                <InfoIcon className="h-3.5 w-3.5 text-maroon" />
                New to insurance terms?{' '}
                <Link
                  href={ROUTES.guide}
                  className="font-medium text-maroon underline underline-offset-2 hover:text-maroon-dark"
                >
                  Read the plain-language guide
                </Link>
              </p>
            </div>

            <aside
              aria-label="Plan summary"
              className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Premium
                </p>
                <TermHint termId="premium" prompt="Explain" />
              </div>
              {plan.premium ? (
                <>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                    {formatPremium(plan.premium)}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    Payment frequency:{' '}
                    <span className="font-medium text-ink">
                      {plan.premium.frequency}
                    </span>
                  </p>
                </>
              ) : (
                <div className="mt-2">
                  <p className="text-sm font-semibold text-warning">
                    Premium not provided
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {plan.premiumNote ??
                      'Contact the insurer for a current quote.'}
                  </p>
                </div>
              )}

              <dl className="mt-4 space-y-2 border-t border-line pt-4 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">Insurer</dt>
                  <dd className="text-right font-medium text-ink">
                    {insurer.name}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">Verification</dt>
                  <dd className="text-right font-medium text-warning">
                    Demonstration data
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-col gap-2">
                <CompareToggle planId={plan.id} size="md" className="w-full" />
                {primaryContactHref ? (
                  <a
                    href={primaryContactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({
                      variant: 'primary',
                      size: 'md',
                      className: 'w-full',
                    })}
                  >
                    Contact insurer
                    <ExternalLinkIcon className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="rounded-lg bg-surface px-3 py-2 text-center text-xs text-muted">
                    Contact details are not provided in this record.
                  </p>
                )}
                <p className="text-[11px] leading-relaxed text-muted">
                  Contact routes are demonstration data. Verify the insurer and
                  payment channel independently.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <Container className="py-8 sm:py-10">
        <DemoDataBanner />

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            {
              href: '#covered',
              label: 'Covered benefits',
              value: plan.benefits.length,
              tone: 'covered' as const,
              icon: CheckCircleIcon,
            },
            {
              href: '#exclusions',
              label: 'Explicit exclusions',
              value: plan.exclusions.length,
              tone: 'excluded' as const,
              icon: XCircleIcon,
            },
            {
              href: '#check-first',
              label: 'Things to check',
              value: plan.checkFirst.length,
              tone: 'check-first' as const,
              icon: AlertTriangleIcon,
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3.5 shadow-card transition-colors hover:border-maroon/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-full',
                      sectionTones[item.tone],
                      sectionTitleTones[item.tone],
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold leading-none text-ink">
                      {item.value}
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {item.label}
                    </span>
                  </span>
                </span>
                <ArrowRightIcon className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-maroon" />
              </a>
            )
          })}
        </div>

        <div className="mt-8 max-w-4xl space-y-6">
          <SectionCard
            id="covered"
            title="Covered benefits"
            tone="covered"
            icon={<CheckCircleIcon className="h-5 w-5" />}
            description="Benefits explicitly listed in the available plan information. Limits still apply."
          >
            <ul className="divide-y divide-line">
              {plan.benefits.map((benefit, index) => {
                const limit = formatLimit(benefit)
                return (
                  <li
                    key={`${benefit.category}-${index}`}
                    className="py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex gap-3">
                      <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <div>
                        <p className="text-sm font-semibold text-ink">
                          {BENEFIT_LABELS[benefit.category]}
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted">
                          {benefit.summary}
                        </p>
                        <p className="mt-1.5 text-xs font-medium text-ink">
                          {limit ? (
                            <>Limit: {limit}</>
                          ) : (
                            <span className="text-warning">
                              No limit stated — check with the insurer
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </SectionCard>

          <SectionCard
            id="limits"
            title="Benefit limits"
            icon={<ShieldCheckIcon className="h-5 w-5" />}
            description={
              <>
                The maximum the insurer says it will pay, and the period it
                applies to.{' '}
                <TermHint termId="benefit-limit" prompt="What is a benefit limit?" />
              </>
            }
          >
            <div className="overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="bg-surface text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Benefit
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Limit
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Applies to
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {plan.benefits.map((benefit, index) => (
                    <tr key={`${benefit.category}-${index}`}>
                      <td className="px-4 py-3 font-medium text-ink">
                        {BENEFIT_LABELS[benefit.category]}
                      </td>
                      <td className="px-4 py-3 text-ink">
                        {benefit.limit ?? (
                          <span className="text-warning">Not stated</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-muted">
                        {benefit.limitPeriod ? (
                          benefit.limitPeriod.replace(/-/g, ' ')
                        ) : (
                          <span className="text-warning">Not stated</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Limits may be shared between family members or applied per person.
              Confirm how the limit is counted before you rely on it.
            </p>
          </SectionCard>

          <SectionCard
            id="exclusions"
            title="Not covered (exclusions)"
            tone="excluded"
            icon={<XCircleIcon className="h-5 w-5" />}
            description={
              <>
                Treatments the plan information explicitly excludes. This is
                not a complete list of every possible exclusion.{' '}
                <TermHint termId="exclusion" prompt="What is an exclusion?" />
              </>
            }
          >
            <BulletList
              items={plan.exclusions}
              icon={<XCircleIcon className="h-4 w-4 text-danger" />}
            />
          </SectionCard>

          <SectionCard
            id="check-first"
            title="Check first"
            tone="check-first"
            icon={<AlertTriangleIcon className="h-5 w-5" />}
            description="These details are unclear, conditional or not included in the available information. Confirm them with the insurer."
          >
            <BulletList
              items={plan.checkFirst}
              icon={<AlertTriangleIcon className="h-4 w-4 text-warning" />}
            />
          </SectionCard>

          <SectionCard
            id="waiting"
            title="Waiting periods"
            icon={<ClockIcon className="h-5 w-5" />}
            description={
              <>
                The time before certain benefits become available.{' '}
                <TermHint termId="waiting-period" prompt="What is a waiting period?" />
              </>
            }
          >
            {plan.waitingPeriods ? (
              <ul className="space-y-3">
                {plan.waitingPeriods.map((waiting) => (
                  <li
                    key={waiting.label}
                    className="rounded-xl border border-line bg-surface px-4 py-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium text-ink">
                        {waiting.label}
                      </p>
                      <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-maroon ring-1 ring-line">
                        {waiting.duration}
                      </span>
                    </div>
                    {waiting.note && (
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">
                        {waiting.note}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <MissingNotice>
                Waiting periods are not provided in this record. Ask the insurer
                before relying on any benefit.
              </MissingNotice>
            )}
          </SectionCard>

          <div className="grid gap-6 sm:grid-cols-2">
            <SectionCard
              id="eligibility"
              title="Eligibility"
              icon={<ClipboardListIcon className="h-5 w-5" />}
            >
              {plan.eligibility ? (
                <BulletList
                  items={plan.eligibility}
                  icon={<CheckIcon className="h-4 w-4 text-success" />}
                />
              ) : (
                <MissingNotice>
                  Eligibility conditions are not provided in this record. Ask
                  the insurer whether you qualify.
                </MissingNotice>
              )}
            </SectionCard>

            <SectionCard
              id="documents"
              title="Documents to prepare"
              icon={<FileTextIcon className="h-5 w-5" />}
            >
              {plan.requiredDocuments ? (
                <BulletList
                  items={plan.requiredDocuments}
                  icon={<CheckIcon className="h-4 w-4 text-success" />}
                />
              ) : (
                <MissingNotice>
                  Required documents are not provided in this record. Confirm
                  the list with the insurer.
                </MissingNotice>
              )}
            </SectionCard>
          </div>

          <SectionCard
            id="enrolment"
            title="How to enrol"
            icon={<ListChecksIcon className="h-5 w-5" />}
          >
            {plan.enrolmentSteps ? (
              <ol className="space-y-3">
                {plan.enrolmentSteps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon-light text-xs font-semibold text-maroon">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-sm leading-relaxed text-ink">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            ) : (
              <MissingNotice>
                Enrolment instructions are not provided in this record. Contact
                the insurer directly for the official process.
              </MissingNotice>
            )}
          </SectionCard>

          <SectionCard
            id="confirm"
            title="What to confirm before enrolling"
            tone="info"
            icon={<AlertTriangleIcon className="h-5 w-5" />}
            description="A practical checklist before you share documents or pay a premium."
          >
            <BulletList
              items={confirmations}
              icon={<ArrowRightIcon className="h-4 w-4 text-maroon" />}
            />
          </SectionCard>

          <SectionCard
            id="contact"
            title="Insurer and contact route"
            icon={<BuildingIcon className="h-5 w-5" />}
            description="Use the insurer’s official channels. Verify any intermediary independently."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-ink">
                  {insurer.name}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {insurer.description}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {contactItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith('mailto:') ||
                            item.href.startsWith('tel:')
                              ? undefined
                              : '_blank'
                          }
                          rel="noopener noreferrer"
                          className="inline-flex items-start gap-2 text-sm text-ink hover:text-maroon hover:underline underline-offset-2"
                        >
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-maroon" />
                          <span>
                            <span className="block text-xs text-muted">
                              {item.label}
                            </span>
                            {item.display}
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="rounded-xl border border-line bg-surface p-4 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Intermediary
                </p>
                <p className="mt-1 leading-relaxed text-ink">
                  {insurer.intermediary ??
                    'No authorised intermediary is listed in this record.'}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                  Last verified
                </p>
                <p className="mt-1 text-ink">
                  {insurer.lastVerified
                    ? formatDate(insurer.lastVerified)
                    : 'Not verified — demonstration data'}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                  Source
                </p>
                <p className="mt-1 text-xs leading-relaxed text-ink">
                  {plan.source}
                </p>
              </div>
            </div>
          </SectionCard>

          <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={ROUTES.plans}
              className={buttonStyles({ variant: 'ghost', size: 'sm' })}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to all plans
            </Link>
            <div className="flex flex-col gap-2 sm:flex-row">
              <CompareToggle planId={plan.id} size="sm" />
              {primaryContactHref && (
                <a
                  href={primaryContactHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({ size: 'sm' })}
                >
                  Contact insurer
                  <ExternalLinkIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
