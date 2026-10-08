# Jonah Pacas-Abanil — portfolio

One-page site for a senior full-stack developer. All copy lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). The build brief is [`plan.md`](plan.md).

## Run

```bash
npm install
npm run dev
```

Open http://127.0.0.1:5173.

Other scripts:

- `npm run build` — typecheck and production build into `dist/`
- `npm run preview` — serve the production build
- `npm run lint` — oxlint

## Edit the site

Change text, links, jobs, and projects in `src/data/portfolio.ts` only. The page reads that file for every section.

- A `TODO` string stays on the page as a dashed chip until you replace it. A project card whose summary still contains `TODO` also gets a dashed border.
- Experience lists the first five roles until **Show all experience**. The All filter lists the first six of the 14 projects until **Show more projects**. Other project filters show every match.
- The profile photo is `public/images/jonah.jpeg`, referenced as `/images/jonah.jpeg`.
- Set `github` to a full `https://` URL to turn the icon into a link.
- Set `image` on a project to a path such as `/images/projects/enrg.webp`. Until then the card shows a gradient and an icon.
- Clear `resumeNote` after you replace `public/resume.pdf`.
- The testimonials block at the bottom of the data file is commented out on purpose.

## EmailJS

The form uses [EmailJS](https://www.emailjs.com/) when all three keys are set. Otherwise submit opens a prefilled `mailto:` link.

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Map the template to these variables: `from_name`, `from_email`, `reply_to`, `subject`, `message`.

Restart `npm run dev` after changing `.env`.

## Deploy

The build is static (`dist/`). No server is required.

**Vercel** — import the repo, framework preset Vite, output `dist`. Add the three `VITE_EMAILJS_*` variables in the project settings.

**Netlify** — build command `npm run build`, publish directory `dist`. Add the same environment variables.

**GitHub Pages** — if the site is served from a subpath, set `base` in `vite.config.ts` to the repository name, then publish `dist/`.
