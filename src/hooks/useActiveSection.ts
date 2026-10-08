import { useEffect, useState } from 'react'

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof sections)[number]['id']

const sectionIds = sections.map((section) => section.id)

function isSectionId(value: string): value is SectionId {
  return sectionIds.some((id) => id === value)
}

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    const visible = new Map<string, IntersectionObserverEntry>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry)
        }

        const current = [...visible.values()]
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (current && isSectionId(current.target.id)) {
          setActive(current.target.id)
        }
      },
      {
        rootMargin: '-12% 0px -55% 0px',
        threshold: [0, 0.15, 0.4, 0.7],
      },
    )

    for (const element of elements) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return active
}
