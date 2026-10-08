# plan.md — Jonah Pacas-Abanil Portfolio (One-Page React Site)

## 0. Instructions for the AI coding agent

Build a **single-page, modern, aesthetic, user-friendly portfolio website** for a senior full-stack developer using **React**. Follow this plan step by step. Do not add a backend. Keep everything in one page with smooth-scroll navigation between sections. Use the content in Section 4 exactly as the starting copy (the owner will edit it later). Wherever a value is marked `TODO`, leave a clearly visible placeholder and list it in the final summary.

When finished:
1. Run `npm run build` and fix all errors/warnings.
2. Run `npm run lint` and fix issues.
3. Confirm the site works at 360px, 768px, 1280px and 1920px widths.
4. Print a short summary: what was built, how to run it, and the list of `TODO` placeholders.

---

## 1. Tech stack

| Concern | Choice |
|---|---|
| Build tool | **Vite** (React + TypeScript template) |
| UI | **React 18+** with function components and hooks |
| Styling | **Tailwind CSS v4** (via `@tailwindcss/vite` plugin) |
| Animation | **Framer Motion** (`motion` package) — subtle only |
| Icons | **lucide-react** (+ simple inline SVGs for GitHub/LinkedIn if lucide lacks them) |
| Contact form | **EmailJS** (`@emailjs/browser`) with keys in `.env`; fallback to `mailto:` if keys are missing |
| Fonts | Google Fonts: **Inter** (body) + **Space Grotesk** (headings) |
| Deploy target | Static hosting (Vercel / Netlify / GitHub Pages) |

No router, no state library, no CMS. All content lives in one data file.

---

## 2. Project setup

```bash
npm create vite@latest jonah-portfolio -- --template react-ts
cd jonah-portfolio
npm install
npm install motion lucide-react @emailjs/browser
npm install -D tailwindcss @tailwindcss/vite
```

- Add `tailwindcss()` to `vite.config.ts` plugins.
- In `src/index.css`: `@import "tailwindcss";` plus the theme tokens in Section 5.
- Create `.env.example`:
  ```
  VITE_EMAILJS_SERVICE_ID=
  VITE_EMAILJS_TEMPLATE_ID=
  VITE_EMAILJS_PUBLIC_KEY=
  ```
- Add `.env` to `.gitignore`.

---

## 3. File structure

```
src/
  main.tsx
  App.tsx
  index.css
  data/
    portfolio.ts          # ALL site content (single source of truth)
  hooks/
    useActiveSection.ts   # IntersectionObserver → highlights current nav item
    useTheme.ts           # dark/light toggle, persisted in localStorage (wrapped in try/catch)
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Experience.tsx
    Projects.tsx
    Contact.tsx
    Footer.tsx
    ui/
      Section.tsx         # wrapper: id, title, eyebrow, fade-in on scroll
      Button.tsx
      Tag.tsx             # tech pill
      Card.tsx
public/
  favicon.svg             # "JP" monogram
  resume.pdf              # TODO: owner drops ATS-friendly resume here
  og-image.png            # TODO: 1200x630 social preview
  images/projects/        # TODO: project screenshots
```

---

## 4. Content (put all of this in `src/data/portfolio.ts`)

Type every block with TypeScript interfaces so the owner can edit safely.

### 4.1 Identity
```ts
name: "Jonah Pacas-Abanil"
title: "Engr. Jonah Pacas-Abanil, CpE"
role: "Senior Full-Stack Developer & Architect"
location: "Cagayan de Oro, Philippines · Open to remote, or relocation to Manila"
tagline: "I build web, mobile and backend systems end to end — from database to App Store."
yearsExperience: 16
email: "jonahpacas87@gmail.com"
phone: "TODO (optional)"
whatsapp: "https://wa.link/v02ui1"
linkedin: "https://linkedin.com/in/jonah87"
github: "https://github.com/jpabanil"
resumeUrl: "/resume.pdf"
availability: "Available for remote contracts and full-time roles"
```

### 4.2 Hero stats (small counters under the headline)
- `16+` Years experience
- `6` Years with one client (nSmarTrac)
- `iOS · Android · Web` Platforms shipped
- `US · UK · IL` Client regions

### 4.3 About me (2–3 short paragraphs)
> I'm a Computer Engineer and senior full-stack developer with more than 16 years of remote, client-facing work for companies in the US, UK and Israel. I run an independent consulting practice and work across the whole stack — Laravel/PHP backends, Vue and React frontends, native iOS (SwiftUI) and Android (Kotlin), Flutter and React Native, plus the AWS/Linux infrastructure underneath.
>
> I've rebuilt legacy platforms into modern apps, shipped enterprise CRM and field-service software with native mobile clients, and built e-commerce stores from scratch. I own projects end to end: architecture, build, CI/CD, store releases, and long-term maintenance.
>
> I'm currently leading a small backend team and building workflow automations that help businesses find and convert leads. I care about clean architecture, honest estimates, and software that's still easy to work on years later.

Side card in About: photo (`/images/jonah.jpeg`, fallback to "JP" monogram gradient avatar), location, "Open to work" badge, and a **Download Resume** button.

### 4.4 Skills (grouped chips)
- **Backend:** Laravel, PHP, Livewire, Java, Python, Node.js, REST APIs
- **Frontend:** React, Next.js, Vue.js, Inertia.js, Tailwind CSS, TypeScript
- **Mobile:** Flutter, Swift / SwiftUI (iOS), Kotlin (Android), React Native
- **Data:** MySQL, MongoDB
- **DevOps & Cloud:** AWS, Linux, CI/CD, Firebase App Distribution, App Store / Play Store releases
- **Automation:** n8n, Make.com, Zapier, Notion
- **Other:** Shopify plugin development, Google Maps SDK & real-time GPS tracking, Hebrew/RTL interfaces
- **Tools:** Git, GitHub, GitLab, Jira, Trello, Azure DevOps, Asana, Monday.com, ClickUp.com, Slack, MS Teams, VS Code, Cursor, Xcode, Android Studio, Claude Code, Grok Build

### 4.5 Experience (vertical timeline, newest first)
Dates and roles marked TODO must be filled in by the owner. Final order must be sorted by dates once the owner fills them in.

1. **ENRG Inc.** — Full-Stack & Mobile Developer (consulting) · `TODO dates – Present`
   - Migrated and modernized ENRG's systems: Laravel + Livewire web app, plus a Laravel + Next.js version.
   - Built and maintain the ENRG Flutter app; handle build automation and distribution (Firebase, Play Store, App Store).
   - Building campaign automations (n8n, Make.com, Notion) that find business leads, send outreach, and book calls, surfaced in the superadmin and licensee dashboards.
2. **Halloyi Automobile** — Backend Developer & Team Lead · `TODO dates – Present`
   - Voted team leader by a 3-person development team; owns backend development.
3. **Envoc** — Mobile Developer (consulting) · `TODO – Present (~8 months)`
   - Builds native iOS (SwiftUI) and Android (Kotlin) applications.
   - Built FaceLock Authenticator, an iOS app for liveness-based MFA on Microsoft Entra ID, and FaceLock Reader, an iOS app that checks a FaceLock QR credential and the person’s face. FaceLock is an Envoc project, not a separate employer.
4. **nSmarTrac LLC** — Full-Stack & Mobile Developer · `6 years, TODO dates`
   - Completed the nSmarTrac CRM, including its native mobile app; later converted the app to Flutter.
   - Real-time technician location tracking with GPS and Google Maps SDK.
5. **Cazamio** — `TODO role` · `TODO dates`
   - `TODO: 1–2 bullets on what Jonah built.` Jira-based workflow.
6. **DocHQ** — `TODO role` · `TODO dates`
   - `TODO: 1–2 bullets on what Jonah built.`
7. **FlexBooker** — `TODO role` · `TODO dates`
   - `TODO: 1–2 bullets on what Jonah built.`
8. **Web2Application** — Developer · `TODO dates`
   - Developed Shopify plugins; implemented maps/geolocation features; Hebrew/RTL development; handled Level 1–5 support escalations.
9. **ConfigureTerminal** — Developer · `TODO dates`
    - Handled Level 1–5 support escalations; Jira-based workflow.
10. **Clean Water Store** — Web Developer · `~2014 – ~2017`
    - Built cleanwaterstore.com from scratch; backend and frontend development for ~3 years.

### 4.6 Projects (card grid, 14 cards — renumber sequentially in the data file)
Each card: image (or gradient placeholder with icon), title, one-line problem/solution, tech tags, `category` (`web` | `mobile` | `automation`, can be an array), optional "Live" / "Case study" links. Featured projects get a larger card.

1. **ENRG Platform Modernization** *(featured)* — Membership site for the Executive Networking Referral Group: find a group, find a professional, or start a group. Rebuilt as a Laravel app with a Flutter companion and automated store releases. Tags: Laravel, Livewire, Next.js, Flutter, Firebase. Category: web, mobile. Live: `https://new-live.enrg.pro`.
2. **nSmarTrac CRM & Field App** *(featured)* — Field-service CRM for scheduling, estimates, invoices, payments, inventory, and eSign, with GPS tracking. Native iOS and Android apps were later moved to Flutter. Tags: Laravel, iOS, Android, Flutter, Google Maps SDK. Category: web, mobile. Live: `https://nsmartrac.com`.
3. **Lead-Gen Automation for ENRG** — Finds small-business leads by industry, sends outreach, and books calls, with a dashboard inside the admin panel. The public link is the ENRG membership site; this automation is not described on that page. Tags: n8n, Make.com, Notion. Category: automation.
4. **FaceLock Authenticator** — iOS app for liveness-based multi-factor authentication on Microsoft Entra ID. A 3D face scan and a push challenge confirm the person is present. Tags: iOS, FaceTec, Microsoft Entra ID. Category: mobile. App Store: `https://apps.apple.com/app/facelock-authenticator/id6771837274`.
5. **FaceLock Reader** — iOS app that scans a FaceLock QR code, on screen or printed, and checks that the credential is genuine and the face matches. Validation works offline. Tags: iOS, QR, Biometrics. Category: mobile. App Store: `https://apps.apple.com/app/facelock-reader/id6757082971`.
6. **Web2Application** — Turns a mobile-friendly website into Android and iOS apps with native shells, push notifications, and deep links. Work here included a Shopify plugin, maps, and Hebrew/RTL. Tags: Android, iOS, Shopify, Hebrew/RTL. Category: web. Live: `https://web2application.com/`.
7. **ConfigureTerminal** — On-demand IT training site for networking professionals, with self-paced Cisco, Linux, Python, and Ansible courses. Tags: IT Training, Cisco, Python. Category: web. Live: `https://www.configureterminal.com/`.
8. **FlexBooker** — Online appointment scheduling. Customers book on the web or phone, get reminders, pay online, and sync with Google, Microsoft, or Apple calendars. Tags: Scheduling, Payments, Calendar. Category: web. Live: `https://flexbooker.com/`.
9. **DocHQ** — Digital physiotherapy platform for muscle and joint care, with remote chartered physios, motion tracking, prevention, and fitness programs. Tags: Health, Physiotherapy, Motion tracking. Category: web. Live: `https://dochq.co.uk/`.
10. **Cazamio** — Rental platform for brokerages and property managers: buildings, listings, applications, leases, screening, and e-sign. Tags: Real Estate, Leases, CRM. Category: web. Live: `https://www.cazamio.com/`.
11. **cleanwaterstore.com** — Store for whole-home water treatment: well and city filters, softeners, test kits, and a treatment quiz. Built from scratch over about three years. Tags: PHP, MySQL, JavaScript. Category: web. Live: `https://cleanwaterstore.com`.
12. **buyinisrael.co.il** — Hebrew marketplace where shoppers buy from verified Israeli stores and get an extra discount at checkout. Built from scratch with a right-to-left interface. Live: `https://buyinisrael.co.il`. Tags: PHP, MySQL, JavaScript, Hebrew/RTL. Category: web.
13. **School Management System** *(in progress)* — Five role-based dashboards for schools, with a Flutter companion app. Tags: Laravel, Inertia, React, MongoDB, Flutter. Category: web, mobile.
14. **Clinic Patient Records App** *(in progress)* — Digital patient records for doctors and clinics. Tags: `TODO stack`. Category: `TODO`.

Do not invent metrics, client logos, or testimonials. Do not use other companies' logos or screenshots unless the owner supplies them. Leave a commented-out `testimonials` array in the data file for later.

### 4.7 Contact
- Heading: "Let's build something."
- Subtext: "Have a project, a role, or a system that needs fixing? Send a message — I usually reply within one business day." *(owner can edit)*
- Left column: email (click to copy + mailto), LinkedIn, GitHub, location, timezone "Asia/Manila (UTC+8)".
- Right column: contact form (see Section 6.7).

---

## 5. Design system

**Look:** clean, dark-first, tech-modern. Generous whitespace, soft gradients, glassy cards, one accent color. Must feel premium, not template-y.

### Colors (CSS variables on `:root`, overridden for light theme)
| Token | Dark (default) | Light |
|---|---|---|
| `--bg` | `#0B0F17` | `#F8FAFC` |
| `--surface` | `#121826` | `#FFFFFF` |
| `--border` | `rgba(255,255,255,0.08)` | `#E2E8F0` |
| `--text` | `#E6EAF2` | `#0F172A` |
| `--muted` | `#94A3B8` | `#475569` |
| `--accent` | `#22D3EE` (cyan) | `#0891B2` |
| `--accent-2` | `#818CF8` (indigo, for gradients) | `#6366F1` |

- Respect `prefers-color-scheme` on first load; toggle in navbar overrides it.
- Gradient text for the name in the hero (`accent → accent-2`).
- A faint radial glow + subtle dot/grid pattern behind the hero.

### Typography
- Headings: Space Grotesk, 600–700. Hero name: `clamp(2.5rem, 6vw, 4.5rem)`.
- Body: Inter, 16–18px, line-height 1.65, max line length ~70ch.

### Spacing & shape
- Section padding: `py-24` desktop, `py-16` mobile. Container `max-w-6xl`, side gutter 16px on mobile.
- Radius: 16px cards, full-round pills/buttons.
- Cards: `--surface` bg, 1px `--border`, hover → lift 4px + accent border glow.

### Motion (keep subtle)
- Sections fade/slide up 16px on first view (`whileInView`, `once: true`).
- Stagger children 60ms.
- Disable all animations when `prefers-reduced-motion: reduce`.

---

## 6. Section-by-section build

### 6.1 Navbar
- Sticky, translucent with `backdrop-blur`, border appears after scrolling 10px.
- Left: "JP" monogram logo → scrolls to top.
- Links: About · Skills · Experience · Projects · Contact. Active link highlighted via `useActiveSection`.
- Right: theme toggle + "Hire me" button (scrolls to Contact).
- Mobile: hamburger → full-width slide-down menu; closes on link click and on `Esc`.

### 6.2 Hero (`#home`, full viewport height)
- Small pill: green pulsing dot + "Available for work".
- Name (gradient), role, tagline.
- Buttons: **View my work** (→ Projects), **Contact me** (→ Contact), **Download resume** (ghost).
- Social icons row.
- Stats row (Section 4.2).
- Scroll-down chevron that bounces gently.

### 6.3 About (`#about`)
- Two columns on desktop (text left, profile card right); stacked on mobile.
- Text from 4.3. Profile card from 4.3 side-card spec.

### 6.4 Skills (`#skills`)
- Responsive grid of category cards (1 / 2 / 4 columns), each with an icon and chips.

### 6.5 Experience (`#experience`)
- Vertical timeline with a gradient line and dots. Each item: company, role, dates, bullets.
- On mobile, line sits on the left edge.
- With 11 entries, show the first 5 and a **Show all experience** button that expands the rest (animated, keyboard accessible, `aria-expanded`).

### 6.6 Projects (`#projects`)
- Filter tabs: All · Web · Mobile · Automation (derive from the `category` field per project; a project with multiple categories appears under each).
- Grid: featured cards span 2 columns on desktop.
- With 14 cards, show the first 6 under "All" and a **Show more projects** button that reveals the rest. Filtered tabs show all matching projects.
- Card hover: image zoom 1.05, show links.
- Missing image → gradient placeholder with a lucide icon (no broken images).
- Cards whose description is still `TODO` must render the placeholder visibly (styled, e.g. dashed border) so the owner spots them.

### 6.7 Contact (`#contact`)
- Form fields: Name (required), Email (required, validated), Subject (optional), Message (required, min 20 chars).
- Hidden honeypot field to block bots.
- Inline validation messages; disabled submit while sending.
- States: idle → sending (spinner) → success (check + "Thanks, I'll get back to you soon.") → error (with "email me directly" link).
- If EmailJS env vars are missing, submitting opens a prefilled `mailto:` instead.
- Email "copy" button shows a toast "Email copied".

### 6.8 Footer
- "© {current year} Jonah Pacas-Abanil · Built with React" + social icons + back-to-top button.

---

## 7. Accessibility & UX requirements
- Semantic landmarks: `header`, `nav`, `main`, `section` (with `aria-labelledby`), `footer`.
- "Skip to content" link as the first focusable element.
- Visible focus rings (accent color) on all interactive elements.
- Color contrast WCAG AA in both themes.
- All icons that act as buttons get `aria-label`; decorative icons `aria-hidden`.
- Form inputs have `<label>`s and `aria-invalid` / `aria-describedby` for errors.
- Smooth scroll via CSS `scroll-behavior: smooth` with `scroll-margin-top` on sections so the sticky navbar doesn't cover headings.
- No horizontal scroll at any width.

---

## 8. SEO & performance
- `index.html`: title "Jonah Pacas-Abanil — Senior Full-Stack Developer", meta description, Open Graph + Twitter tags (use `/og-image.png`), theme-color, favicon.
- JSON-LD `Person` schema (name, jobTitle, address locality, sameAs LinkedIn/GitHub).
- Images: `loading="lazy"`, explicit width/height, WebP where possible.
- Preconnect to Google Fonts; `font-display: swap`.
- Target Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO.

---

## 9. Build order (checklist)
- [x] 1. Scaffold Vite + React + TS, install deps, configure Tailwind.
- [x] 2. Theme tokens, fonts, base styles, `useTheme`.
- [x] 3. `portfolio.ts` data file with types and all content from Section 4.
- [x] 4. UI primitives: `Section`, `Button`, `Tag`, `Card`.
- [x] 5. Navbar + `useActiveSection` + mobile menu.
- [x] 6. Hero.
- [x] 7. About.
- [x] 8. Skills.
- [x] 9. Experience timeline.
- [x] 10. Projects grid + filters.
- [x] 11. Contact form + EmailJS + mailto fallback.
- [x] 12. Footer.
- [x] 13. Animations + reduced-motion handling.
- [x] 14. SEO tags, JSON-LD, favicon.
- [x] 15. Responsive pass (360 / 768 / 1280 / 1920).
- [x] 16. Accessibility pass (keyboard-only walkthrough).
- [x] 17. `npm run build` + `npm run lint` clean.
- [x] 18. Write `README.md`: how to run, edit content, set EmailJS keys, deploy to Vercel/Netlify.
- [x] 19. Update `portfolio.ts` with the new Experience entries (Cazamio, DocHQ, FlexBooker, FaceLock) and new Project cards (FaceLock Authenticator, FaceLock Reader, Web2Application App, ConfigureTerminal, FlexBooker, DocHQ, Cazamio, cleanwaterstore.com split from buyisrael.co.il).
- [x] 20. Add "Show all experience" and "Show more projects" expanders (6.5, 6.6) and the visible TODO card style.
- [x] 21. Re-run build, lint and responsive checks; list all new TODOs in the summary.

---

## 10. Definition of done
- One page, all sections reachable from the navbar, smooth scrolling works.
- About Me and Contact Me sections present and fully functional.
- Looks polished in both dark and light themes, on mobile and desktop.
- No console errors, no broken images, no layout shift on load.
- All content editable from `src/data/portfolio.ts` alone.
- Final summary lists every `TODO` placeholder the owner must fill in.