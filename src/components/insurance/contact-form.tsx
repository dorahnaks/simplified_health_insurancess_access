'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'
import {
  CheckCircleIcon,
  InfoIcon,
  MailIcon,
  ShieldCheckIcon,
} from '@/components/ui/icons'

interface FormState {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const successRef = useRef<HTMLHeadingElement>(null)

  const update = (field: keyof FormState, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }))
    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: undefined }))
    }
  }

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (form.email.trim() && !EMAIL_PATTERN.test(form.email.trim())) {
      next.email = 'Enter a valid email address, or leave this blank.'
    }
    if (form.name.trim().length > 80) {
      next.name = 'Please keep your name under 80 characters.'
    }
    if (form.message.trim().length < 10) {
      next.message = 'Please enter a message of at least 10 characters.'
    }
    if (form.message.trim().length > 1500) {
      next.message = 'Please keep your message under 1,500 characters.'
    }
    return next
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // No backend exists in this prototype. Nothing is transmitted or stored.
    setSubmitted(true)
    window.requestAnimationFrame(() => successRef.current?.focus())
  }

  const resetForm = () => {
    setForm({ name: '', email: '', message: '' })
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-success/25 bg-success-soft p-6 text-center sm:p-8"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-success shadow-sm">
          <CheckCircleIcon className="h-6 w-6" />
        </span>
        <h2
          ref={successRef}
          tabIndex={-1}
          className="mt-4 text-lg font-semibold text-ink focus:outline-none"
        >
          Feedback checked — nothing was sent
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
          This prototype has no backend, so your message was validated on this
          device and then discarded. It was not transmitted to anyone or stored.
        </p>
        <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-muted">
          For questions about a specific plan, use the official contact route in
          the insurer directory. For a real message to the platform team, use
          the contact channel provided by the UIA Career Expo organisers.
        </p>
        <Button variant="outline" size="sm" onClick={resetForm} className="mt-5">
          Write another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight text-ink">
        Send feedback about this prototype
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        Tell us what was clear, what was confusing, or what information is
        missing. Do not include medical details or identification numbers.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Input
          label="Your name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={(event) => update('name', event.target.value)}
          error={errors.name}
          showOptional
          maxLength={80}
          placeholder="Optional"
        />
        <Input
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => update('email', event.target.value)}
          error={errors.email}
          showOptional
          placeholder="Optional — only if you want a reply"
          hint="No message is actually sent by this prototype."
        />
      </div>

      <div className="mt-4">
        <Textarea
          label="Message"
          name="message"
          required
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          error={errors.message}
          maxLength={1500}
          placeholder="What should the platform explain more clearly?"
          hint={`${form.message.length}/1500 characters`}
        />
      </div>

      <div className="mt-5 rounded-xl border border-line bg-surface p-3 text-xs leading-relaxed text-muted">
        <p className="flex items-start gap-2">
          <InfoIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-maroon" />
          <span>
            Submitting validates the form locally. The prototype has no backend,
            so no message is sent or saved. Do not include sensitive personal or
            medical information.
          </span>
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-1.5 text-xs text-muted">
          <ShieldCheckIcon className="h-3.5 w-3.5 text-success" />
          No account, tracking or medical details required.
        </p>
        <Button type="submit">
          <MailIcon className="h-4 w-4" />
          Validate message
        </Button>
      </div>
    </form>
  )
}
