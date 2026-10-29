import type { Metadata } from 'next'
import Link from 'next/link'
import { APP_NAME, ROUTES } from '@/constants'
import { Container } from '@/components/layout/container'
import { PageHeader } from '@/components/layout/page-header'
import { ArrowRightIcon, LockIcon } from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'Privacy notice',
  description:
    'How the HealthCover Uganda prototype handles browsing, comparison selections and feedback.',
}

const sections = [
  {
    title: 'Browse without an account',
    body: 'You can explore plans, search, filter and compare without creating an account. The prototype does not ask for your name, national identification number, phone number or payment details to browse.',
  },
  {
    title: 'No medical information',
    body: 'We do not ask for diagnoses, medical history, prescriptions or claims information. The Smart Plan Finder only asks non-medical questions about who needs cover and which benefits matter.',
  },
  {
    title: 'What is stored in your browser',
    body: 'Your comparison selection and enrolment checklist are saved in your browser’s local storage so they survive a page refresh. This information stays on your device, is not sent to a server and can be cleared at any time using the reset controls or your browser settings.',
  },
  {
    title: 'Feedback form',
    body: 'The contact form runs entirely in your browser. There is no backend service connected to this prototype, so messages are not transmitted, stored or reviewed. The form tells you this after you submit it.',
  },
  {
    title: 'Cookies and tracking',
    body: 'This prototype does not set advertising cookies and does not include third-party analytics or tracking scripts.',
  },
  {
    title: 'Links to insurer websites',
    body: 'Plan and insurer pages may link to external websites. Those websites have their own privacy policies, and we are not responsible for how they handle your information.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        eyebrowKey="page.privacy.eyebrow"
        title="Privacy notice"
        titleKey="page.privacy.title"
        description="What this prototype does — and does not do — with your information."
        descriptionKey="page.privacy.description"
      />

      <Container size="narrow" className="py-12 sm:py-16">
        <div className="flex items-start gap-3 rounded-2xl border border-maroon/15 bg-maroon-light/60 p-4 sm:p-5">
          <LockIcon className="mt-0.5 h-5 w-5 shrink-0 text-maroon" />
          <p className="text-sm leading-relaxed text-ink">
            <strong className="font-semibold">In short:</strong> browse freely,
            share nothing sensitive, and expect any selections to remain on your
            own device.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold tracking-tight text-ink">
                <span className="mr-2 text-sm font-semibold text-maroon">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-surface p-5">
          <h2 className="text-sm font-semibold text-ink">
            About this notice
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {APP_NAME} is a prototype built for the UIA Career Expo 2026. This
            notice describes how the prototype behaves; it is not a legal
            certification and should not be read as one. Last reviewed October
            2026.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={ROUTES.disclaimer}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-maroon hover:text-maroon-dark"
          >
            Read the information disclaimer
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
