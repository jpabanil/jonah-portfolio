import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { sections, useActiveSection } from '../hooks/useActiveSection.ts'
import { useTheme } from '../hooks/useTheme.ts'
import { cn } from '../lib/utils.ts'
import { Button } from './ui/Button.tsx'

const links = sections.filter((section) => section.id !== 'home')

export function Navbar() {
  const active = useActiveSection()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!open) return

    const first = menuRef.current?.querySelector<HTMLElement>('a')
    first?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onPointer = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return
      if (headerRef.current?.contains(event.target)) return
      setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div className="nav-bar" data-scrolled={scrolled ? 'true' : 'false'} data-open={open ? 'true' : 'false'}>
        <div className="container-page flex h-16 items-center justify-between gap-3">
          <a href="#home" className="monogram" aria-label="Jonah Pacas-Abanil, back to top">
            JP
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-medium',
                  active === link.id ? 'text-accent-text' : 'text-muted hover:text-text',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button type="button" className="icon-button" onClick={toggleTheme} aria-label={themeLabel}>
              {theme === 'dark' ? (
                <Sun className="size-5" aria-hidden="true" />
              ) : (
                <Moon className="size-5" aria-hidden="true" />
              )}
            </button>
            <Button href="#contact">Hire me</Button>
            <button
              ref={menuButtonRef}
              type="button"
              className="icon-button md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <nav id="mobile-nav" ref={menuRef} hidden={!open} aria-label="Mobile" className="md:hidden">
          <ul className="container-page flex flex-col gap-1 py-3 pb-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={cn(
                    'block rounded-xl px-3 py-3 text-base font-medium',
                    active === link.id ? 'bg-surface text-accent-text' : 'text-text',
                  )}
                  onClick={() => {
                    setOpen(false)
                    const target = document.getElementById(link.id)
                    window.setTimeout(() => target?.focus({ preventScroll: true }), 0)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
