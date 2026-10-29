import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ROUTES } from '@/constants'
import { PAGE_IMAGES } from '@/constants/images'
import { PageHeader } from '@/components/layout/page-header'
import { Container } from '@/components/layout/container'
import { Reveal } from '@/components/ui/reveal'
import { buttonStyles } from '@/components/ui/button'
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ClipboardListIcon,
  CompassIcon,
  FileTextIcon,
  InfoIcon,
  ScaleIcon,
  ShieldCheckIcon,
  XCircleIcon,
} from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'About the platform',
  description:
    'Why HealthCover Uganda exists, how it helps people understand health insurance, and why product information must be verified before enrolling.',
}

const capabilities = [
  {
    title: 'Explore',
    description: 'Browse plans by insurer, need and benefits.',
    href: ROUTES.plans,
    icon: CompassIcon,
  },
  {
    title: 'Compare',
    description: 'See up to four plans side by side.',
    href: ROUTES.compare,
    icon: ScaleIcon,
  },
  {
    title: 'Understand',
    description: 'Plain-language definitions, limits and exclusions.',
    href: ROUTES.guide,
    icon: BookOpenIcon,
  },
  {
    title: 'Prepare',
    description: 'A checklist to use before you contact an insurer.',
    href: ROUTES.enrol,
    icon: ClipboardListIcon,
  },
]

const verificationSteps = [
  'Check the source label and last-verified date on each record.',
  'Treat missing information as something to confirm — not as proof of cover or exclusion.',
  'Confirm identity, benefits and payment details with the insurer before sharing documents or paying.',
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        eyebrowKey="page.about.eyebrow"
        title="Health insurance made easier to understand"
        titleKey="page.about.title"
        description="A prototype for the UIA Career Expo 2026. We help you understand health insurance — we do not sell it."
        descriptionKey="page.about.description"
        image={{ ...PAGE_IMAGES.about, badge: 'Prototype' }}
      />

      <Container size="narrow" className="py-10 sm:py-12">
        <section aria-labelledby="purpose-heading">
          <h2
            id="purpose-heading"
            className="text-2xl font-semibold tracking-tight text-ink"
          >
            Why this platform exists
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Insurance details are often spread across brochures, agent
              conversations and long policy documents. It can be hard to tell
              what is covered, what is excluded and what still needs checking.
            </p>
            <p>
              This prototype puts the basics in one place. The aim is to help
              you ask better questions — not to replace the insurer’s own
              disclosures.
            </p>
          </div>

          <Reveal className="mt-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {[PAGE_IMAGES.guide, PAGE_IMAGES.enrol].map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 40vw, 92vw"
                    style={{ objectPosition: image.position }}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="capabilities-heading" className="mt-10">
          <h2
            id="capabilities-heading"
            className="text-2xl font-semibold tracking-tight text-ink"
          >
            What you can do here
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon
              return (
                <Link
                  key={capability.title}
                  href={capability.href}
                  className="group rounded-2xl border border-line bg-white p-5 shadow-card transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-maroon/30 hover:shadow-lift"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-maroon-light text-maroon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-ink group-hover:text-maroon">
                    {capability.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {capability.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        <section aria-labelledby="verify-heading" className="mt-10">
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <h2
              id="verify-heading"
              className="flex items-center gap-2 text-xl font-semibold tracking-tight text-ink"
            >
              <FileTextIcon className="h-5 w-5 text-maroon" />
              How to verify product information
            </h2>
            <ol className="mt-4 space-y-3">
              {verificationSteps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-maroon ring-1 ring-line">
                    {index + 1}
                  </span>
                  <span className="text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="scope-heading" className="mt-10">
          <h2
            id="scope-heading"
            className="text-2xl font-semibold tracking-tight text-ink"
          >
            What we do — and do not do
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-success/20 bg-success-soft p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-success">
                <CheckCircleIcon className="h-4 w-4" />
                We do
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
                <li>Explain insurance terms.</li>
                <li>Show gaps and demo labels.</li>
                <li>Compare plans like-for-like.</li>
                <li>Point to official insurer contacts.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-danger/20 bg-danger-soft p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-danger">
                <XCircleIcon className="h-4 w-4" />
                We do not
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
                <li>Sell or issue policies.</li>
                <li>Guarantee eligibility.</li>
                <li>Complete enrolments or take payments.</li>
                <li>Give personal medical, legal or financial advice.</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="origin-heading" className="mt-10">
          <h2
            id="origin-heading"
            className="text-2xl font-semibold tracking-tight text-ink"
          >
            About the prototype
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Built for the Uganda Insurers Association Career Expo 2026. The
            insurers, plans, premiums and contacts are fictional demonstration
            data. No partnership, endorsement or regulatory approval is claimed.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href={ROUTES.disclaimer} className={buttonStyles({ size: 'sm' })}>
              <ShieldCheckIcon className="h-4 w-4" />
              Read the disclaimer
            </Link>
            <Link
              href={ROUTES.contact}
              className={buttonStyles({ variant: 'outline', size: 'sm' })}
            >
              Contact and feedback
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted">
            <InfoIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-maroon" />
            This page describes a prototype. It is not a regulatory filing or a
            statement of legal compliance.
          </p>
        </section>
      </Container>
    </>
  )
}
