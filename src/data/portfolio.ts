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
  /** Capability lines under the summary, for a project that needs more than one paragraph. */
  details?: string[]
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
      company: 'Halloyi Automobile',
      role: 'Backend Developer & Team Lead',
      dates: 'Oct 2026 – Present',
      bullets: ['Team leader and backend developer.'],
    },
    {
      company: 'Josh Bauer Team',
      role: 'Mobile/Web Developer',
      dates: 'Jan 2026 – Present',
      bullets: ['Created the Josh Bauer iOS app.', 'Created websites for clients.'],
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
      dates: 'Jan 2018 – Mar 2018',
      bullets: [
        'Mobile app development for DocHQ, a digital physiotherapy platform for muscle and joint care.',
        'Remote chartered physios, motion tracking, prevention plans, and fitness programs.',
      ],
    },
    {
      company: 'FlexBooker',
      role: 'iOS and Android App Developer',
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
      summary:
        'School management for a Philippine private K-12 school. Staff, parents, and students use a Laravel and React web app, and parents and teachers also have a Flutter app. Students, grades, attendance, and fees for each school are stored in MongoDB.',
      details: [
        'The seats are super admin, school admin, registrar, teacher, finance, parent, and student. The admin opens a school year and sets grade levels, sections, and subjects. The registrar enrolls learners and records transfers. Teachers mark attendance, enter grades, and message families.',
        'Parents and students open grades, attendance, the class schedule, and the balance still due. Finance sees who still owes and records payments taken at the cashier. Online payment is optional. When it is turned off, families pay at the desk.',
        'Report cards print as DepEd SF9 and SF10. Learner records export for the Learner Information System. The screens are available in English and Filipino.',
        'The phone app uses the same API. A teacher can save attendance with no signal, and the app sends that queue when the connection returns.',
      ],
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
      summary:
        'Patient records for a small clinic with one doctor and one secretary. Both share the roster, the schedule, and billing. Only the doctor opens the clinical chart. The web app is Laravel and Livewire on MongoDB, with a Flutter app for visits away from the desk.',
      details: [
        'The doctor writes the visit on one screen: the SOAP note, the prescription, and the next step. Allergies and current medicines stay pinned above the note. Prescriptions, medical certificates, invoices, and numbered receipts print from the chart. The secretary uploads lab files and does not see diagnoses or visit notes.',
        'Both seats book, move, and cancel appointments. Patients can book online and pay a deposit by GCash, Maya, or bank transfer. The desk matches the payment reference. The secretary runs check-in. The doctor flags recalls, including the next vaccine dose.',
        'Invoices take cash, GCash, Maya, or a bank transfer, recorded by hand. A paid booking deposit is applied to the consultation bill. Revenue stays on the doctor seat. An audit log records who opened a chart, and staff can turn on two-factor sign-in.',
        'Patients sign in to a portal with a code sent by email. They see the summary, prescription, and lab file the doctor chose to share. The SOAP note stays on the clinic side. The phone keeps the last schedule and opened charts for reading offline. A new note waits until the server accepts it.',
      ],
      tags: ['Laravel', 'Livewire', 'MongoDB', 'Flutter'],
      categories: ['web', 'mobile'],
      featured: false,
      inProgress: true,
      image: 'TODO: /images/projects/clinic.webp',
      links: [],
    },
    {
      id: 'delivery-food-ride',
      title: 'Delivery, Food & Ride',
      summary:
        'On-demand app for motorcycle rides, parcels, restaurant food, and pabili (buy it for me). Customers and drivers use Flutter. Merchants and operators share one Laravel portal, with live dispatch and tracking.',
      details: [
        'A ride is one passenger on a motorcycle. A parcel is a pickup and drop-off, with optional cash collection. Food is one merchant per order, with options, a minimum, and a delivery radius. For pabili, the driver buys the shopping list and the customer pays the item cost plus fees in cash on arrival.',
        'Sign-in is a phone number and a one-time code, with consent for the Data Privacy Act and account deletion in the app. Dispatch offers the job to the nearest online driver, then the next driver after a timeout. A food order also waits for the merchant and uses a pickup code.',
        'The customer follows the trip live, can share a read-only link, and sees the driver name, photo, and plate. An SOS button alerts the admin map. Fares combine base, distance, waiting, night, and surge, and amounts are stored as centavos. Cash and a driver wallet settle the job on a ledger that only appends rows.',
        'Admins approve drivers and merchants, set fare rules, service areas, and banned items, and handle payouts and reports. Merchants run the menu and incoming orders. Maps use Google Maps. Live updates use Laravel Reverb. GCash and Maya can be added later through a payment gateway.',
      ],
      tags: ['Laravel', 'Inertia', 'React', 'MongoDB', 'Flutter'],
      categories: ['web', 'mobile'],
      featured: false,
      inProgress: true,
      image: 'TODO: /images/projects/delivery-food-ride.webp',
      links: [],
    },
    {
      id: 'hris',
      title: 'HRIS',
      summary:
        'Human resource system for Philippine employers that run more than one company. It follows an employee from hiring through payroll, separation, and year-end filings. A Laravel API serves a Next.js admin console and an employee portal.',
      details: [
        'The record covers the org chart, the 201 file, company assets, and documents. Government IDs, bank accounts, and salary history are encrypted. Hiring starts from a manpower request and a public careers page, then an offer and an onboarding checklist.',
        'Timekeeping uses schedules, shifts, and holidays, including a holiday for one city. Staff clock in from the portal, a kiosk, or an imported biometric log. Leave starts from Philippine defaults, and each company can change the entitlement, accrual, and conversion to cash.',
        'Payroll runs weekly, semi-monthly, or monthly. A run computes basic pay, allowances, overtime, night differential, SSS, PhilHealth, Pag-IBIG, withholding tax, loans, and cash advances. The person who computes a run cannot approve it. Year-end work produces BIR Form 2316, the alphalist, 13th-month pay, and a remittance record per agency.',
        'The same approval inbox covers leave, overtime, claims, and payroll. Offboarding runs clearance, an exit interview, and final pay. After the account closes, the portal still serves payslips and Form 2316. Privacy requests follow the Data Privacy Act, and an auditor role is read-only.',
      ],
      tags: ['Laravel', 'Next.js', 'MySQL', 'Redis'],
      categories: ['web'],
      featured: false,
      inProgress: true,
      image: 'TODO: /images/projects/hris.webp',
      links: [],
    },
    {
      id: 'elite-erp',
      title: 'Elite ERP',
      summary:
        'Business system for Elite Ace Trading. One Laravel API and one MySQL database serve the web desks and a Flutter app for Android and iOS. This phase covers CRM, sales, inventory, requisitions, people and payroll, projects, and chat. The finance ledger follows.',
      details: [
        'A company has branches and warehouses. People see only the companies they belong to. A sales officer sees only their own pipeline, clients, and invoices. The lead pool stays shared. Salary is limited to the employee, HR, payroll, and authorized finance roles.',
        'CRM is a shared lead pool and a private 15-stage pipeline, with queues, appointments, and daily targets. Booking a lead opens the client and a draft proforma. Sales then takes a signature and records payment. Bookkeeper, Finance Head, and President approve that payment in order. A release order prints only when the invoice is approved, paid in full, and verified.',
        'Inventory counts stock from movements and turns low items into a requisition. Requisitions pass approval, then a voucher and a disbursement. Payroll approval opens a funding request for the net pay. Project stages are owned by departments. Document numbers are never reused.',
        'Chat, the approvals inbox, and email notices are in this phase. Management, finance, and HR use an authenticator at login. The phone covers leads, cash payments, approvals, stock lookup, leave, payslips, and chat.',
      ],
      tags: ['Laravel', 'Livewire', 'Flutter', 'MySQL'],
      categories: ['web', 'mobile'],
      featured: false,
      inProgress: true,
      image: 'TODO: /images/projects/elite-erp.webp',
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
