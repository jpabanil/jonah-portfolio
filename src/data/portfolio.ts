export interface Stat {
  value: string
  label: string
}

export interface SkillGroup {
  id: string
  name: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  dates: string
  bullets: string[]
}

export type ProjectCategory = 'web' | 'mobile' | 'automation'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  summary: string
  tags: string[]
  /** Drives the Web / Mobile / Automation filters. A build can sit in more than one. Leave this empty while the category is still unknown. */
  categories: ProjectCategory[]
  /** Visible placeholder when `categories` is still undecided. */
  categoryNote?: string
  featured: boolean
  inProgress: boolean
  /** Set to a path such as /images/projects/enrg.webp. TODO values render the gradient placeholder. */
  image: string
  links: ProjectLink[]
}

export interface Portfolio {
  name: string
  title: string
  role: string
  location: string
  tagline: string
  yearsExperience: number
  email: string
  phone: string
  whatsapp: string
  linkedin: string
  github: string
  resumeUrl: string
  resumeNote: string
  photo: string
  availability: string
  status: string
  openToWork: string
  stats: Stat[]
  about: string[]
  skills: SkillGroup[]
  /** Newest first. Re-sort by real dates once the TODO dates are filled in. */
  experience: ExperienceItem[]
  projects: Project[]
  contact: {
    heading: string
    subtext: string
    timezone: string
  }
}

const yearsExperience = 16

export const portfolio: Portfolio = {
  name: 'Jonah Pacas-Abanil',
  title: 'Engr. Jonah Pacas-Abanil, CpE',
  role: 'Senior Full-Stack Developer & Architect',
  location: 'Cagayan de Oro, Philippines · Open to remote, or relocation to Manila',
  tagline: 'I build web, mobile and backend systems end to end — from database to App Store.',
  yearsExperience,
  email: 'jonahpacas87@gmail.com',
  phone: 'TODO (optional)',
  whatsapp: 'https://wa.link/v02ui1',
  linkedin: 'https://linkedin.com/in/jonah87',
  github: 'https://github.com/jpabanil',
  resumeUrl: '/resume.pdf',
  resumeNote: 'TODO: replace public/resume.pdf',
  photo: '/images/jonah.jpeg',
  availability: 'Available for remote contracts and full-time roles',
  status: 'Available for work',
  openToWork: 'Open to work',
  stats: [
    { value: `${yearsExperience}+`, label: 'Years experience' },
    { value: '6', label: 'Years with one client (nSmarTrac)' },
    { value: 'iOS · Android · Web', label: 'Platforms shipped' },
    { value: 'US · UK · IL', label: 'Client regions' },
  ],
  about: [
    "I'm a Computer Engineer and senior full-stack developer with more than 16 years of remote, client-facing work for companies in the US, UK and Israel. I run an independent consulting practice and work across the whole stack — Laravel/PHP backends, Vue and React frontends, native iOS (SwiftUI) and Android (Kotlin), Flutter and React Native, plus the AWS/Linux infrastructure underneath.",
    "I've rebuilt legacy platforms into modern apps, shipped enterprise CRM and field-service software with native mobile clients, and built e-commerce stores from scratch. I own projects end to end: architecture, build, CI/CD, store releases, and long-term maintenance.",
    "I'm currently leading a small backend team and building workflow automations that help businesses find and convert leads. I care about clean architecture, honest estimates, and software that's still easy to work on years later.",
  ],
  skills: [
    {
      id: 'backend',
      name: 'Backend',
      items: ['Laravel', 'PHP', 'Livewire', 'Java', 'Python', 'Node.js', 'REST APIs'],
    },
    {
      id: 'frontend',
      name: 'Frontend',
      items: ['React', 'Next.js', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'TypeScript'],
    },
    {
      id: 'mobile',
      name: 'Mobile',
      items: ['Flutter', 'Swift / SwiftUI (iOS)', 'Kotlin (Android)', 'React Native'],
    },
    {
      id: 'data',
      name: 'Data',
      items: ['MySQL', 'MongoDB'],
    },
    {
      id: 'devops',
      name: 'DevOps & Cloud',
      items: ['AWS', 'Linux', 'CI/CD', 'Firebase App Distribution', 'App Store / Play Store releases'],
    },
    {
      id: 'automation',
      name: 'Automation',
      items: ['n8n', 'Make.com', 'Zapier', 'Notion'],
    },
    {
      id: 'other',
      name: 'Other',
      items: ['Shopify plugin development', 'Google Maps SDK & real-time GPS tracking', 'Hebrew/RTL interfaces'],
    },
    {
      id: 'tools',
      name: 'Tools',
      items: [
        'Git',
        'GitHub',
        'GitLab',
        'Jira',
        'Trello',
        'Azure DevOps',
        'Asana',
        'Monday.com',
        'ClickUp.com',
        'Slack',
        'MS Teams',
        'VS Code',
        'Cursor',
        'Xcode',
        'Android Studio',
        'Claude Code',
        'Grok Build',
      ],
    },
  ],
  experience: [
    {
      company: 'Josh Bauer Team',
      role: 'Mobile/Web Developer',
      dates: 'Jan 2026 – Present',
      bullets: ['TODO: 1–2 bullets on what Jonah built.'],
    },
    {
      company: 'ENRG Inc.',
      role: 'Full-Stack & Mobile Developer (consulting)',
      dates: 'Jan 2026 – Present',
      bullets: [
        "Migrated and modernized ENRG's systems: Laravel + Livewire web app, plus a Laravel + Next.js version.",
        'Built and maintain the ENRG Flutter app; handle build automation and distribution (Firebase, Play Store, App Store).',
        'Building campaign automations (n8n, Make.com, Notion) that find business leads, send outreach, and book calls, surfaced in the superadmin and licensee dashboards.',
      ],
    },
    {
      company: 'Halloyi Automobile',
      role: 'Backend Developer & Team Lead',
      dates: 'TODO dates – Present',
      bullets: ['Voted team leader by a 3-person development team; owns backend development.'],
    },
    {
      company: 'Envoc',
      role: 'Mobile Developer (consulting)',
      dates: 'Jan 2026 – Present',
      bullets: [
        'Builds native iOS (SwiftUI) and Android (Kotlin) applications.',
        'Built FaceLock Authenticator, an iOS app for liveness-based MFA on Microsoft Entra ID, and FaceLock Reader, an iOS app that checks a FaceLock QR credential and the person’s face.',
      ],
    },
    {
      company: 'nSmarTrac LLC',
      role: 'Full-Stack & Mobile Developer',
      dates: 'May 2020 – Nov 2025',
      bullets: [
        'Completed the nSmarTrac CRM, including its native mobile app; later converted the app to Flutter.',
        'Real-time technician location tracking with GPS and Google Maps SDK.',
      ],
    },
    {
      company: 'HRPayPortal',
      role: 'Senior Mobile App Developer',
      dates: 'Jan 2024 – Nov 2024',
      bullets: ['Mobile development for the HIRS Platform.'],
    },
    {
      company: 'Cazamio',
      role: 'iOS App Developer',
      dates: 'Dec 2017 – Jun 2018',
      bullets: [
        'iOS development for Apply by Cazamio, a rental application app for New York City agents.',
        'Tenants apply, upload documents, and pay for a credit report. The agent downloads a landlord-ready package at no cost.',
      ],
    },
    {
      company: 'DocHQ',
      role: 'Mobile App Developer',
      dates: 'TODO dates',
      bullets: [
        'Mobile app development for DocHQ, a digital physiotherapy platform for muscle and joint care.',
        'Remote chartered physios, motion tracking, prevention plans, and fitness programs.',
      ],
    },
    {
      company: 'FlexBooker',
      role: 'TODO role',
      dates: 'Jan 2017 – Nov 2017',
      bullets: [
        'Online booking and scheduling software. Customers book from the website or phone, and the system confirms the appointment and sends email and text reminders.',
        'Booking pages, intake forms, waitlists, online payments, and calendar sync with Google, Microsoft 365, Outlook, and Apple.',
      ],
    },
    {
      company: 'Web2Application',
      role: 'Developer',
      dates: 'Jun 2018 – May 2025',
      bullets: [
        'Developed Shopify plugins; implemented maps/geolocation features; Hebrew/RTL development; handled Level 1–5 support escalations.',
      ],
    },
    {
      company: 'ConfigureTerminal',
      role: 'Developer',
      dates: 'Sep 2010 – Nov 2018',
      bullets: ['Handled Level 1–5 support escalations; Jira-based workflow.'],
    },
    {
      company: 'Clean Water Store',
      role: 'Web Developer',
      dates: '~2014 – ~2017',
      bullets: ['Built cleanwaterstore.com from scratch; backend and frontend development for ~3 years.'],
    },
  ],
  projects: [
    {
      id: 'enrg',
      title: 'ENRG Platform Modernization',
      summary:
        'Membership site for the Executive Networking Referral Group: find a group, find a professional, or start a group. Rebuilt as a Laravel app with a Flutter companion and automated store releases.',
      tags: ['Laravel', 'Livewire', 'Next.js', 'Flutter', 'Firebase'],
      categories: ['web', 'mobile'],
      featured: true,
      inProgress: false,
      image: '/images/projects/enrg.webp',
      links: [{ label: 'new-live.enrg.pro', href: 'https://new-live.enrg.pro' }],
    },
    {
      id: 'enrg-ios',
      title: 'ENRG Connect',
      summary:
        'iOS app for ENRG members to pass and track referrals, open the member directory, and follow mastermind work. Login is limited to active members.',
      tags: ['iOS', 'Referrals', 'Networking'],
      categories: ['mobile'],
      featured: false,
      inProgress: false,
      image: '/images/projects/enrg-ios.webp',
      links: [{ label: 'App Store', href: 'https://apps.apple.com/app/enrg-connect/id6788059346' }],
    },
    {
      id: 'enrg-android',
      title: 'ENRG Android',
      summary:
        'Android app for ENRG members to pass and track referrals, open the member directory, and follow mastermind work. Login is limited to active members.',
      tags: ['Android', 'Referrals', 'Networking'],
      categories: ['mobile'],
      featured: false,
      inProgress: false,
      image: '/images/projects/enrg-android.webp',
      links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=pro.enrg.mobile' }],
    },
    {
      id: 'nsmartrac',
      title: 'nSmarTrac CRM & Field App',
      summary:
        'Field-service CRM for scheduling, estimates, invoices, payments, inventory, and eSign, with GPS tracking. Native iOS and Android apps were later moved to Flutter.',
      tags: ['Laravel', 'iOS', 'Android', 'Flutter', 'Google Maps SDK'],
      categories: ['web', 'mobile'],
      featured: true,
      inProgress: false,
      image: '/images/projects/nsmartrac.webp',
      links: [{ label: 'nsmartrac.com', href: 'https://nsmartrac.com' }],
    },
    {
      id: 'nsmartrac-ios',
      title: 'nSmarTrac iOS',
      summary:
        'iOS field app for the nSmarTrac CRM. Techs collect payments, accept appointments, and write estimates, invoices, and inventory updates on site.',
      tags: ['iOS', 'CRM', 'Field service'],
      categories: ['mobile'],
      featured: false,
      inProgress: false,
      image: '/images/projects/nsmartrac-ios.webp',
      links: [{ label: 'App Store', href: 'https://apps.apple.com/app/nsmartrac/id1517179104' }],
    },
    {
      id: 'lead-gen',
      title: 'Lead-Gen Automation for ENRG',
      summary:
        'Finds small-business leads by industry, sends outreach, and books calls, with a dashboard inside the admin panel.',
      tags: ['n8n', 'Make.com', 'Notion'],
      categories: ['automation'],
      featured: false,
      inProgress: false,
      image: '/images/projects/lead-gen.webp',
      links: [{ label: 'new-live.enrg.pro', href: 'https://new-live.enrg.pro' }],
    },
    {
      id: 'facelock-authenticator',
      title: 'FaceLock Authenticator',
      summary:
        'iOS app for liveness-based multi-factor authentication on Microsoft Entra ID. A 3D face scan and a push challenge confirm the person is present.',
      tags: ['iOS', 'FaceTec', 'Microsoft Entra ID'],
      categories: ['mobile'],
      featured: false,
      inProgress: false,
      image: '/images/projects/facelock-authenticator.webp',
      links: [{ label: 'App Store', href: 'https://apps.apple.com/app/facelock-authenticator/id6771837274' }],
    },
    {
      id: 'facelock-authenticator-android',
      title: 'FaceLock Authenticator Android',
      summary:
        'Android app for liveness-based MFA on Microsoft Entra ID. A 3D face scan and a push challenge confirm the person is present.',
      tags: ['Android', 'FaceTec', 'Microsoft Entra ID'],
      categories: ['mobile'],
      featured: false,
      inProgress: false,
      image: '/images/projects/facelock-authenticator-android.webp',
      links: [
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=id.facelock.authenticator',
        },
      ],
    },
    {
      id: 'facelock-reader',
      title: 'FaceLock Reader',
      summary:
        'iOS app that scans a FaceLock QR code, on screen or printed, and checks that the credential is genuine and the face matches. Validation works offline.',
      tags: ['iOS', 'QR', 'Biometrics'],
      categories: ['mobile'],
      featured: false,
      inProgress: false,
      image: '/images/projects/facelock-reader.webp',
      links: [{ label: 'App Store', href: 'https://apps.apple.com/app/facelock-reader/id6757082971' }],
    },
    {
      id: 'facelock-reader-android',
      title: 'FaceLock Reader Android',
      summary:
        'Android app that scans a FaceLock QR code, on screen or printed, and checks that the credential is genuine and the face matches. Validation works offline.',
      tags: ['Android', 'QR', 'Biometrics'],
      categories: ['mobile'],
      featured: false,
      inProgress: false,
      image: '/images/projects/facelock-reader-android.webp',
      links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=id.facelock.reader' }],
    },
    {
      id: 'web2application',
      title: 'Web2Application',
      summary:
        'Turns a mobile-friendly website into Android and iOS apps with native shells, push notifications, and deep links. Work here included a Shopify plugin, maps, and Hebrew/RTL.',
      tags: ['Android', 'iOS', 'Shopify', 'Hebrew/RTL'],
      categories: ['web'],
      featured: false,
      inProgress: false,
      image: '/images/projects/web2application.webp',
      links: [{ label: 'web2application.com', href: 'https://web2application.com/' }],
    },
    {
      id: 'configureterminal',
      title: 'ConfigureTerminal',
      summary:
        'On-demand IT training site for networking professionals, with self-paced Cisco, Linux, Python, and Ansible courses.',
      tags: ['IT Training', 'Cisco', 'Python'],
      categories: ['web'],
      featured: false,
      inProgress: false,
      image: '/images/projects/configureterminal.webp',
      links: [{ label: 'configureterminal.com', href: 'https://www.configureterminal.com/' }],
    },
    {
      id: 'flexbooker',
      title: 'FlexBooker',
      summary:
        'Online appointment scheduling. Customers book on the web or phone, get reminders, pay online, and sync with Google, Microsoft, or Apple calendars.',
      tags: ['Scheduling', 'Payments', 'Calendar'],
      categories: ['web'],
      featured: false,
      inProgress: false,
      image: '/images/projects/flexbooker.webp',
      links: [{ label: 'flexbooker.com', href: 'https://flexbooker.com/' }],
    },
    {
      id: 'dochq',
      title: 'DocHQ',
      summary:
        'Digital physiotherapy for muscle and joint care. Remote chartered physios, motion tracking, prevention plans, and fitness programs.',
      tags: ['Health', 'Physiotherapy', 'Motion tracking'],
      categories: ['web'],
      featured: false,
      inProgress: false,
      image: '/images/projects/dochq.webp',
      links: [{ label: 'dochq.co.uk', href: 'https://dochq.co.uk/' }],
    },
    {
      id: 'cazamio',
      title: 'Apply by Cazamio',
      summary:
        'Android app for New York City agents. Tenants apply, upload documents, and pay for a credit report. The agent downloads a landlord-ready package at no cost.',
      tags: ['Android', 'Rentals', 'NYC'],
      categories: ['mobile'],
      featured: false,
      inProgress: false,
      image: '/images/projects/cazamio.webp',
      links: [
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.cazamio.apply',
        },
        { label: 'applybycazamio.com', href: 'https://applybycazamio.com/' },
      ],
    },
    {
      id: 'cleanwaterstore',
      title: 'cleanwaterstore.com',
      summary:
        'Store for whole-home water treatment: well and city filters, softeners, test kits, and a treatment quiz. Built from scratch over about three years.',
      tags: ['PHP', 'MySQL', 'JavaScript'],
      categories: ['web'],
      featured: false,
      inProgress: false,
      image: '/images/projects/cleanwaterstore.webp',
      links: [{ label: 'cleanwaterstore.com', href: 'https://cleanwaterstore.com' }],
    },
    {
      id: 'buyisrael',
      title: 'buyinisrael.co.il',
      summary:
        'Hebrew marketplace where shoppers buy from verified Israeli stores and get an extra discount at checkout. Built from scratch with a right-to-left interface.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Hebrew/RTL'],
      categories: ['web'],
      featured: false,
      inProgress: false,
      image: '/images/projects/buyisrael.webp',
      links: [{ label: 'buyinisrael.co.il', href: 'https://buyinisrael.co.il' }],
    },
    {
      id: 'benefact',
      title: 'Benefact Financial',
      summary:
        'Independent insurance brokerage site for individual health, Medicare, life, supplemental, and employer benefits, with online quote forms.',
      tags: ['Insurance', 'Medicare', 'Benefits'],
      categories: ['web'],
      featured: false,
      inProgress: false,
      image: '/images/projects/benefact.webp',
      links: [{ label: 'benefactfinancial.com', href: 'https://www.benefactfinancial.com/' }],
    },
    {
      id: 'school',
      title: 'School Management System',
      summary: 'Five role-based dashboards for schools, with a Flutter companion app.',
      tags: ['Laravel', 'Inertia', 'React', 'MongoDB', 'Flutter'],
      categories: ['web', 'mobile'],
      featured: false,
      inProgress: true,
      image: 'TODO: /images/projects/school.webp',
      links: [],
    },
    {
      id: 'clinic',
      title: 'Clinic Patient Records App',
      summary: 'Digital patient records for doctors and clinics.',
      tags: ['TODO: stack'],
      categories: [],
      categoryNote: 'TODO',
      featured: false,
      inProgress: true,
      image: 'TODO: /images/projects/clinic.webp',
      links: [],
    },
  ],
  contact: {
    heading: "Let's build something.",
    subtext:
      'Have a project, a role, or a system that needs fixing? Send a message — I usually reply within one business day.',
    timezone: 'Asia/Manila (UTC+8)',
  },
}

/*
Fill this in when you have permission to publish a quote. Do not invent testimonials.

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  { quote: '', name: '', role: '' },
]
*/
