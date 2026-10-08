import {
  CalendarClock,
  Droplets,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Languages,
  Layers,
  LockKeyhole,
  Radar,
  ScanFace,
  Shield,
  ShoppingBag,
  Smartphone,
  Stethoscope,
  Terminal,
  Workflow,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { portfolio, type Project, type ProjectCategory } from '../data/portfolio.ts'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts'
import { cn, isTodo, mediaSrc } from '../lib/utils.ts'
import { Button } from './ui/Button.tsx'
import { Reveal } from './ui/Reveal.tsx'
import { Section } from './ui/Section.tsx'
import { Tag, TodoText } from './ui/Tag.tsx'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'automation', label: 'Automation' },
] as const

type FilterId = (typeof filters)[number]['id']

const previewCount = 6

const visuals: Record<string, { icon: typeof Layers; wash: string }> = {
  enrg: {
    icon: Layers,
    wash: 'radial-gradient(circle at 18% 20%, rgba(34,211,238,0.55), transparent 52%), linear-gradient(155deg, #101828, #1e1b4b)',
  },
  'enrg-ios': {
    icon: Smartphone,
    wash: 'radial-gradient(circle at 20% 18%, rgba(34,211,238,0.5), transparent 48%), linear-gradient(160deg, #0f172a, #164e63)',
  },
  'enrg-android': {
    icon: Smartphone,
    wash: 'radial-gradient(circle at 78% 22%, rgba(52,211,153,0.45), transparent 48%), linear-gradient(160deg, #052e16, #111827)',
  },
  nsmartrac: {
    icon: Radar,
    wash: 'radial-gradient(circle at 80% 16%, rgba(129,140,248,0.55), transparent 48%), linear-gradient(160deg, #121826, #0f2744)',
  },
  'nsmartrac-ios': {
    icon: Smartphone,
    wash: 'radial-gradient(circle at 24% 20%, rgba(129,140,248,0.5), transparent 48%), linear-gradient(160deg, #172554, #111827)',
  },
  'lead-gen': {
    icon: Workflow,
    wash: 'radial-gradient(circle at 30% 80%, rgba(52,211,153,0.4), transparent 50%), linear-gradient(160deg, #10221c, #172033)',
  },
  'facelock-authenticator': {
    icon: LockKeyhole,
    wash: 'radial-gradient(circle at 22% 18%, rgba(34,211,238,0.45), transparent 48%), linear-gradient(160deg, #111827, #1e1b4b)',
  },
  'facelock-authenticator-android': {
    icon: LockKeyhole,
    wash: 'radial-gradient(circle at 75% 20%, rgba(52,211,153,0.42), transparent 48%), linear-gradient(160deg, #052e16, #1e1b4b)',
  },
  'facelock-reader': {
    icon: ScanFace,
    wash: 'radial-gradient(circle at 78% 24%, rgba(129,140,248,0.5), transparent 46%), linear-gradient(160deg, #0f172a, #312e81)',
  },
  'facelock-reader-android': {
    icon: ScanFace,
    wash: 'radial-gradient(circle at 22% 78%, rgba(52,211,153,0.4), transparent 48%), linear-gradient(160deg, #042f2e, #312e81)',
  },
  web2application: {
    icon: ShoppingBag,
    wash: 'radial-gradient(circle at 78% 22%, rgba(129,140,248,0.45), transparent 46%), linear-gradient(160deg, #172033, #1c1917)',
  },
  configureterminal: {
    icon: Terminal,
    wash: 'radial-gradient(circle at 30% 80%, rgba(34,211,238,0.35), transparent 50%), linear-gradient(160deg, #0f172a, #134e4a)',
  },
  flexbooker: {
    icon: CalendarClock,
    wash: 'radial-gradient(circle at 70% 20%, rgba(251,191,36,0.4), transparent 48%), linear-gradient(160deg, #1c1917, #172554)',
  },
  dochq: {
    icon: HeartPulse,
    wash: 'radial-gradient(circle at 24% 24%, rgba(244,114,182,0.42), transparent 48%), linear-gradient(160deg, #1f1320, #132033)',
  },
  cazamio: {
    icon: Smartphone,
    wash: 'radial-gradient(circle at 80% 70%, rgba(129,140,248,0.45), transparent 48%), linear-gradient(160deg, #121826, #312e81)',
  },
  cleanwaterstore: {
    icon: Droplets,
    wash: 'radial-gradient(circle at 20% 80%, rgba(34,211,238,0.45), transparent 50%), linear-gradient(160deg, #082f49, #111827)',
  },
  buyisrael: {
    icon: Languages,
    wash: 'radial-gradient(circle at 75% 25%, rgba(129,140,248,0.45), transparent 46%), linear-gradient(160deg, #111827, #1e1b4b)',
  },
  benefact: {
    icon: Shield,
    wash: 'radial-gradient(circle at 22% 20%, rgba(52,211,153,0.4), transparent 48%), linear-gradient(160deg, #10221c, #111827)',
  },
  school: {
    icon: GraduationCap,
    wash: 'radial-gradient(circle at 70% 30%, rgba(251,191,36,0.4), transparent 46%), linear-gradient(160deg, #1c1917, #172554)',
  },
  clinic: {
    icon: Stethoscope,
    wash: 'radial-gradient(circle at 24% 24%, rgba(244,114,182,0.4), transparent 48%), linear-gradient(160deg, #1f1320, #132033)',
  },
}

function ProjectMedia({ project }: { project: Project }) {
  const visual = visuals[project.id] ?? visuals.enrg
  const Icon = visual?.icon ?? Layers
  const src = mediaSrc(project.image)
  const [failed, setFailed] = useState(false)

  if (src && !failed && visual) {
    return (
      <div className="project-media">
        <img
          src={src}
          alt=""
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      </div>
    )
  }

  return (
    <div className="project-media transition duration-500 group-hover:scale-105" style={{ backgroundImage: visual?.wash }}>
      <Icon className="size-12 text-white" strokeWidth={1.5} aria-hidden="true" />
    </div>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<FilterId>('all')
  const [open, setOpen] = useState(false)
  const reduced = usePrefersReducedMotion()
  const matched = portfolio.projects.filter((project) =>
    filter === 'all' ? true : project.categories.includes(filter as ProjectCategory),
  )
  const collapsed = filter === 'all' && !open
  const visible = collapsed ? matched.slice(0, previewCount) : matched
  const canToggle = filter === 'all' && matched.length > previewCount

  return (
    <Section id="projects" eyebrow="Selected work" title="Projects" band>
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {filters.map((item) => {
          const count =
            item.id === 'all'
              ? portfolio.projects.length
              : portfolio.projects.filter((project) => project.categories.includes(item.id)).length
          const selected = filter === item.id
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                if (item.id !== filter) setOpen(false)
                setFilter(item.id)
              }}
              className={cn(
                'cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold',
                selected ? 'border-transparent bg-accent text-on-accent' : 'border-border text-muted hover:text-text',
              )}
            >
              {item.label}
              <span className={cn('ml-2 text-xs', selected ? 'opacity-80' : 'text-muted')}>{count}</span>
            </button>
          )
        })}
      </div>

      {visible.length === 0 ? (
        <p className="text-muted">No projects in this category yet.</p>
      ) : (
        <ul id="project-grid" className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <AnimatePresence initial={false}>
            {visible.map((project, index) => {
              const placeholder = isTodo(project.summary)
              const primary = project.links[0]
              const card = (
                <article
                  className="surface-card group relative h-full overflow-hidden"
                  data-interactive="true"
                  data-todo={placeholder ? 'true' : 'false'}
                >
                  {primary ? (
                    <a
                      href={primary.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title}, ${primary.label}`}
                      className="absolute inset-0 z-10 rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    />
                  ) : null}
                  <div className={project.featured ? 'md:grid md:grid-cols-2' : undefined}>
                    <ProjectMedia project={project} />
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {project.featured ? (
                          <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-on-accent">
                            Featured
                          </span>
                        ) : null}
                        {project.inProgress ? (
                          <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted">
                            In progress
                          </span>
                        ) : null}
                        {project.categoryNote ? <Tag>{project.categoryNote}</Tag> : null}
                      </div>
                      <h3 className="text-xl font-semibold text-text">{project.title}</h3>
                      <p className="mt-2 text-muted">
                        <TodoText value={project.summary} />
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li key={tag}>
                            <Tag>{tag}</Tag>
                          </li>
                        ))}
                      </ul>
                      {project.links.length > 0 ? (
                        <ul className="relative z-20 mt-5 flex flex-wrap gap-x-4 gap-y-2">
                          {project.links.map((link, linkIndex) => (
                            <li key={link.href}>
                              {linkIndex === 0 ? (
                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-text">
                                  {link.label}
                                  <ExternalLink className="size-3.5" aria-hidden="true" />
                                </span>
                              ) : (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent-text"
                                >
                                  {link.label}
                                  <ExternalLink className="size-3.5" aria-hidden="true" />
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </article>
              )
              return (
                <motion.li
                  key={project.id}
                  className={project.featured ? 'min-w-0 md:col-span-2' : 'min-w-0'}
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
                  {index < previewCount ? (
                    <Reveal delay={index * 0.06} className="h-full">
                      {card}
                    </Reveal>
                  ) : (
                    card
                  )}
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>
      )}
      {canToggle ? (
        <div className="mt-8">
          <Button
            variant="secondary"
            aria-expanded={open}
            aria-controls="project-grid"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Show fewer projects' : 'Show more projects'}
          </Button>
        </div>
      ) : null}
    </Section>
  )
}
