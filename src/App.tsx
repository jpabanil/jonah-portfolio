import { About } from './components/About.tsx'
import { Contact } from './components/Contact.tsx'
import { Experience } from './components/Experience.tsx'
import { Footer } from './components/Footer.tsx'
import { Hero } from './components/Hero.tsx'
import { Navbar } from './components/Navbar.tsx'
import { Projects } from './components/Projects.tsx'
import { Skills } from './components/Skills.tsx'
import { portfolio } from './data/portfolio.ts'
import { isHttpUrl, isTodo } from './lib/utils.ts'

function personJsonLd(): string {
  const sameAs = [portfolio.linkedin, portfolio.github].filter(isHttpUrl)
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolio.name,
    jobTitle: portfolio.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cagayan de Oro',
      addressCountry: 'PH',
    },
    sameAs,
  }
  if (!isTodo(portfolio.email)) data.email = portfolio.email
  return JSON.stringify(data)
}

export default function App() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd() }} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
