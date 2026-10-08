import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { portfolio } from '../data/portfolio.ts'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts'
import { isTodo } from '../lib/utils.ts'
import { Button } from './ui/Button.tsx'
import { Reveal } from './ui/Reveal.tsx'
import { Section } from './ui/Section.tsx'
import { TodoChip, TodoText } from './ui/Tag.tsx'

const previewCount = 5

export function Experience() {
  const [open, setOpen] = useState(false)
  const reduced = usePrefersReducedMotion()
  const jobs = portfolio.experience
  const visible = open ? jobs : jobs.slice(0, previewCount)
  const canToggle = jobs.length > previewCount

  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <ol id="experience-list" className="relative space-y-10">
        <span className="timeline-line" aria-hidden="true" />
        <AnimatePresence initial={false}>
          {visible.map((job, index) => {
            const body = (
              <>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold text-text">{job.company}</h3>
                  {isTodo(job.dates) ? <TodoChip>{job.dates}</TodoChip> : <p className="text-sm text-muted">{job.dates}</p>}
                </div>
                <p className="mt-1 text-text">{isTodo(job.role) ? <TodoChip>{job.role}</TodoChip> : job.role}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted marker:text-accent">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>
                      <TodoText value={bullet} />
                    </li>
                  ))}
                </ul>
              </>
            )
            return (
              <motion.li
                key={job.company}
                className="relative pl-10"
                initial={reduced ? false : 'hidden'}
                animate="shown"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: 12, transition: { duration: reduced ? 0 : 0.18 } },
                  shown: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: reduced ? 0 : 0.32,
                      delay: !reduced && index >= previewCount ? (index - previewCount) * 0.04 : 0,
                    },
                  },
                }}
              >
                <span className="timeline-dot" aria-hidden="true" />
                {index < previewCount ? <Reveal delay={index * 0.06}>{body}</Reveal> : body}
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ol>
      {canToggle ? (
        <div className="mt-8">
          <Button
            variant="secondary"
            aria-expanded={open}
            aria-controls="experience-list"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Show less experience' : 'Show all experience'}
          </Button>
        </div>
      ) : null}
    </Section>
  )
}
