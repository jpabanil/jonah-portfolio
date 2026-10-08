import { Cloud, Database, PanelsTopLeft, Server, Smartphone, Sparkles, Workflow, Wrench } from 'lucide-react'
import { portfolio } from '../data/portfolio.ts'
import { Card } from './ui/Card.tsx'
import { Reveal } from './ui/Reveal.tsx'
import { Section } from './ui/Section.tsx'
import { Tag } from './ui/Tag.tsx'

const icons = {
  backend: Server,
  frontend: PanelsTopLeft,
  mobile: Smartphone,
  data: Database,
  devops: Cloud,
  automation: Workflow,
  other: Sparkles,
  tools: Wrench,
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills" band>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {portfolio.skills.map((group, index) => {
          const Icon = icons[group.id as keyof typeof icons] ?? Sparkles
          return (
            <li key={group.id} className="min-w-0">
              <Reveal delay={index * 0.06} className="h-full">
                <Card interactive className="h-full p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-grid size-10 place-items-center rounded-xl bg-accent text-on-accent">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-text">{group.name}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Tag>{item}</Tag>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
