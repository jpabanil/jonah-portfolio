import { ArrowUp } from 'lucide-react'
import { portfolio } from '../data/portfolio.ts'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts'
import { SocialLinks } from './SocialLinks.tsx'

const currentYear = new Date().getFullYear()

export function Footer() {
  const reduced = usePrefersReducedMotion()
  const year = currentYear

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <footer className="border-t border-border py-8">
      <div className="container-page flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <p className="text-sm text-muted">
          © {year} {portfolio.name} · Built with React
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <SocialLinks />
          <button type="button" onClick={scrollToTop} className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-muted hover:text-text">
            <ArrowUp className="size-4" aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
