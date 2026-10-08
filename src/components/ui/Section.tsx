import type { ReactNode } from 'react'
import { cn } from '../../lib/utils.ts'
import { Reveal } from './Reveal.tsx'

type SectionProps = {
  id: string
  title: string
  eyebrow?: string
  intro?: ReactNode
  children: ReactNode
  band?: boolean
}

export function Section({ id, title, eyebrow, intro, children, band = false }: SectionProps) {
  const headingId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      tabIndex={-1}
      className={cn('scroll-mt-24 py-16 md:py-24', band && 'section-band')}
    >
      <div className="container-page">
        <Reveal>
          <div className="mb-10 max-w-[70ch]">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 id={headingId} className="text-3xl font-semibold text-text md:text-4xl">
              {title}
            </h2>
            {intro ? <div className="mt-4 text-muted">{intro}</div> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
