import { Check, Clock, Copy, LoaderCircle, Mail, MapPin } from 'lucide-react'
import { useEffect, useId, useState, type FormEvent } from 'react'
import { portfolio } from '../data/portfolio.ts'
import { isHttpUrl, isTodo, mailtoHref } from '../lib/utils.ts'
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons.tsx'
import { Button } from './ui/Button.tsx'
import { Card } from './ui/Card.tsx'
import { Section } from './ui/Section.tsx'
import { TodoChip } from './ui/Tag.tsx'

type Status = 'idle' | 'sending' | 'success' | 'error'

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
  company: string
}

type FormErrors = Partial<Record<'name' | 'email' | 'message', string>>

const emptyValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!emailPattern.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (values.message.trim().length < 20) errors.message = 'Message should be at least 20 characters.'
  return errors
}

function emailjsConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  if (!serviceId || !templateId || !publicKey) return null
  return { serviceId, templateId, publicKey }
}

async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    const area = document.createElement('textarea')
    area.value = value
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.top = '0'
    area.style.opacity = '0'
    area.style.pointerEvents = 'none'
    document.body.append(area)
    area.select()
    const copied = document.execCommand('copy')
    area.remove()
    return copied
  }
}

export function Contact() {
  const baseId = useId()
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [toast, setToast] = useState(false)

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(false), 2500)
    return () => window.clearTimeout(timer)
  }, [toast])

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (field === 'name' || field === 'email' || field === 'message') {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
    if (status === 'error') setStatus('idle')
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (values.company.trim()) {
      setStatus('success')
      return
    }

    const subject = values.subject.trim() || `Message from ${values.name.trim()}`
    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`
    const config = emailjsConfig()

    if (!config) {
      window.location.href = mailtoHref(portfolio.email, subject, body)
      return
    }

    setStatus('sending')
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          subject,
          message: values.message.trim(),
        },
        { publicKey: config.publicKey },
      )
      setValues(emptyValues)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  async function copyEmail() {
    const copied = await copyText(portfolio.email)
    if (copied) setToast(true)
  }

  const directMailto = mailtoHref(portfolio.email)

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={portfolio.contact.heading}
      intro={<p>{portfolio.contact.subtext}</p>}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-text">Reach me directly</h3>
          <ul className="mt-5 space-y-4">
            <li className="flex flex-wrap items-center gap-2">
              <Mail className="size-4 shrink-0 text-accent-text" aria-hidden="true" />
              <a href={directMailto} className="break-all font-medium text-text underline decoration-border underline-offset-4">
                {portfolio.email}
              </a>
              <button type="button" className="icon-button" onClick={() => void copyEmail()} aria-label="Copy email address">
                <Copy className="size-4" aria-hidden="true" />
              </button>
              {isTodo(portfolio.email) ? <TodoChip>TODO</TodoChip> : null}
            </li>
            <li>
              <a
                href={portfolio.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 font-medium text-text"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 font-medium text-text"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            </li>
            <li>
              {isHttpUrl(portfolio.github) ? (
                <a
                  href={portfolio.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 font-medium text-text"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              ) : (
                <span className="inline-flex flex-wrap items-center gap-2 text-text">
                  <GithubIcon className="size-4" />
                  <span>GitHub</span>
                  <TodoChip>{portfolio.github}</TodoChip>
                </span>
              )}
            </li>
            <li className="flex items-start gap-2 text-text">
              <MapPin className="mt-1 size-4 shrink-0 text-accent-text" aria-hidden="true" />
              <span>{portfolio.location}</span>
            </li>
            <li className="flex items-center gap-2 text-text">
              <Clock className="size-4 shrink-0 text-accent-text" aria-hidden="true" />
              <span>{portfolio.contact.timezone}</span>
            </li>
          </ul>
        </div>

        <Card className="p-5 sm:p-6">
          <h3 className="text-xl font-semibold text-text">Send a message</h3>
          {status === 'success' ? (
            <div role="status" className="mt-6 flex flex-col items-start gap-4">
              <span className="inline-grid size-11 place-items-center rounded-full bg-accent text-on-accent">
                <Check className="size-5" aria-hidden="true" />
              </span>
              <p className="text-text">Thanks, I'll get back to you soon.</p>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setValues(emptyValues)
                  setErrors({})
                  setStatus('idle')
                }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form className="relative mt-5 space-y-4" noValidate onSubmit={(event) => void onSubmit(event)} aria-busy={status === 'sending'}>
              <div className="honeypot" aria-hidden="true">
                <label htmlFor={`${baseId}-company`}>Company</label>
                <input
                  id={`${baseId}-company`}
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={(event) => update('company', event.target.value)}
                />
              </div>

              <div>
                <label htmlFor={`${baseId}-name`} className="mb-1.5 block text-sm font-medium text-text">
                  Name
                </label>
                <input
                  id={`${baseId}-name`}
                  name="name"
                  className="field"
                  autoComplete="name"
                  required
                  value={values.name}
                  disabled={status === 'sending'}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? `${baseId}-name-error` : undefined}
                  onChange={(event) => update('name', event.target.value)}
                />
                {errors.name ? (
                  <p id={`${baseId}-name-error`} className="mt-1.5 text-sm text-danger">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={`${baseId}-email`} className="mb-1.5 block text-sm font-medium text-text">
                  Email
                </label>
                <input
                  id={`${baseId}-email`}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  required
                  className="field"
                  value={values.email}
                  disabled={status === 'sending'}
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? `${baseId}-email-error` : undefined}
                  onChange={(event) => update('email', event.target.value)}
                />
                {errors.email ? (
                  <p id={`${baseId}-email-error`} className="mt-1.5 text-sm text-danger">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={`${baseId}-subject`} className="mb-1.5 block text-sm font-medium text-text">
                  Subject <span className="font-normal text-muted">(optional)</span>
                </label>
                <input
                  id={`${baseId}-subject`}
                  name="subject"
                  className="field"
                  value={values.subject}
                  disabled={status === 'sending'}
                  onChange={(event) => update('subject', event.target.value)}
                />
              </div>

              <div>
                <label htmlFor={`${baseId}-message`} className="mb-1.5 block text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id={`${baseId}-message`}
                  name="message"
                  className="field min-h-36 resize-y"
                  required
                  value={values.message}
                  disabled={status === 'sending'}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? `${baseId}-message-error` : `${baseId}-message-hint`}
                  onChange={(event) => update('message', event.target.value)}
                />
                {errors.message ? (
                  <p id={`${baseId}-message-error`} className="mt-1.5 text-sm text-danger">
                    {errors.message}
                  </p>
                ) : (
                  <p id={`${baseId}-message-hint`} className="mt-1.5 text-xs text-muted">
                    At least 20 characters.
                  </p>
                )}
              </div>

              {status === 'error' ? (
                <p role="alert" className="text-sm text-danger">
                  Something went wrong sending your message. You can{' '}
                  <a href={directMailto} className="font-semibold underline">
                    email me directly
                  </a>
                  .
                </p>
              ) : null}

              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  'Send message'
                )}
              </Button>
            </form>
          )}
        </Card>
      </div>

      {toast ? (
        <div className="toast" role="status">
          Email copied
        </div>
      ) : null}
    </Section>
  )
}
