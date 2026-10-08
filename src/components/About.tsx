import { Download, MapPin } from 'lucide-react'
import { useState } from 'react'
import { portfolio } from '../data/portfolio.ts'
import { mediaSrc } from '../lib/utils.ts'
import { Button } from './ui/Button.tsx'
import { Card } from './ui/Card.tsx'
import { Reveal } from './ui/Reveal.tsx'
import { Section } from './ui/Section.tsx'
import { TodoChip } from './ui/Tag.tsx'

export function About() {
  const photo = mediaSrc(portfolio.photo)
  const [photoFailed, setPhotoFailed] = useState(false)
  const showPhoto = Boolean(photo) && !photoFailed

  return (
    <Section id="about" eyebrow="Profile" title="About me">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.75fr)]">
        <Reveal>
          <div className="max-w-[70ch] space-y-5 text-muted">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <Card className="p-6">
            <div className="avatar-frame">
              {showPhoto ? (
                <img
                  src={photo}
                  alt={portfolio.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-[1.55rem] object-cover object-[center_22%]"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="avatar-fallback" aria-hidden="true">
                  JP
                </div>
              )}
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-text">{portfolio.name}</h3>
            <p className="mt-1 text-sm text-muted">{portfolio.title}</p>

            <p className="status-pill mt-4">
              <span className="pulse-dot" aria-hidden="true" />
              {portfolio.openToWork}
            </p>
            <p className="mt-3 text-sm text-muted">{portfolio.availability}</p>

            <p className="mt-4 flex items-start gap-2 text-sm text-text">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent-text" aria-hidden="true" />
              <span>{portfolio.location}</span>
            </p>

            <p className="mt-4 flex items-center justify-between gap-3 text-sm">
              <span className="text-muted">WhatsApp</span>
              <a
                href={portfolio.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-text underline decoration-border underline-offset-4"
              >
                wa.link/v02ui1
              </a>
            </p>

            {!showPhoto ? (
              <p className="mt-3 break-words text-xs leading-relaxed text-muted">
                Photo <TodoChip>{portfolio.photo}</TodoChip>
              </p>
            ) : null}

            <Button href={portfolio.resumeUrl} download="resume.pdf" className="mt-5 w-full">
              <Download className="size-4" aria-hidden="true" />
              Download resume
            </Button>
            {portfolio.resumeNote ? <p className="mt-3 text-xs text-muted">{portfolio.resumeNote}</p> : null}
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
