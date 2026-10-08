import { Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio.ts'
import { isHttpUrl } from '../lib/utils.ts'
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from './Icons.tsx'
import { TodoChip } from './ui/Tag.tsx'

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      <li>
        <a className="icon-button" href={`mailto:${portfolio.email}`} aria-label={`Email ${portfolio.email}`}>
          <Mail className="size-5" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a
          className="icon-button"
          href={portfolio.whatsapp}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </li>
      <li>
        <a
          className="icon-button"
          href={portfolio.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        {isHttpUrl(portfolio.github) ? (
          <a
            className="icon-button"
            href={portfolio.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2">
            <span className="icon-button" aria-hidden="true">
              <GithubIcon />
            </span>
            <TodoChip>GitHub TODO</TodoChip>
          </span>
        )}
      </li>
    </ul>
  )
}
