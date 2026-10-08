import { ChevronDown, Download } from 'lucide-react'
import { portfolio } from '../data/portfolio.ts'
import { SocialLinks } from './SocialLinks.tsx'
import { Button } from './ui/Button.tsx'
import { Reveal } from './ui/Reveal.tsx'

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" tabIndex={-1} className="relative -mt-16 flex min-h-svh flex-col overflow-hidden pt-16">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

      <div className="container-page relative z-10 flex flex-1 flex-col justify-center py-12">
        <Reveal immediate>
          <p className="status-pill">
            <span className="pulse-dot" aria-hidden="true" />
            {portfolio.status}
          </p>
          <h1
            id="home-title"
            className="gradient-text mt-6 max-w-5xl text-[clamp(2.5rem,6vw,4.5rem)] font-bold"
          >
            {portfolio.name}
          </h1>
          <p className="mt-4 max-w-[40rem] text-xl font-medium text-text md:text-2xl">{portfolio.role}</p>
          <p className="mt-4 max-w-[70ch] text-muted">{portfolio.tagline}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projects" className="w-full sm:w-auto">
              View my work
            </Button>
            <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
              Contact me
            </Button>
            <Button href={portfolio.resumeUrl} variant="ghost" download="resume.pdf" className="w-full sm:w-auto">
              <Download className="size-4" aria-hidden="true" />
              Download resume
            </Button>
          </div>

          <div className="mt-6">
            <SocialLinks />
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {portfolio.stats.map((stat) => (
              <div key={stat.label} className="stat flex flex-col-reverse gap-1">
                <dt className="text-sm leading-snug text-muted">{stat.label}</dt>
                <dd className="font-display text-lg font-semibold leading-tight text-text md:text-xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <a href="#about" className="scroll-cue relative z-10 mx-auto mb-6 inline-flex p-2 text-muted" aria-label="Scroll to about">
        <ChevronDown className="size-6" aria-hidden="true" />
      </a>
    </section>
  )
}
