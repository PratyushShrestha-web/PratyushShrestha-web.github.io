# Pratyush Shrestha -- AI/ML Engineer Portfolio

A dark-themed, animated developer portfolio landing page built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React — adapted from a 3D-creator template into a resume-driven site for an aspiring AI/ML engineer.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/sections/`
  - `HeroSection` — name, tagline, and an animated SVG terminal illustration (swap in a real photo whenever you'd like — see notes below)
  - `MarqueeSection` — two scroll-driven rows of tech-stack tag chips (languages, ML tools, dev tools, core strengths)
  - `AboutSection` — resume objective as a character-by-character scroll reveal, with icon-based corner decorations
  - `ServicesSection` — repurposed as **Skills**, using the four Technical Skills categories from the resume
  - `ShowcaseProjectsSection` — **Projects**, an editable grid of project cards with tech tags and live demo / GitHub links (this is where you add your own work)
  - `ProjectsSection` — repurposed as **Work**, a simple GitHub / LinkedIn / current-projects link list
  - `ContactSection` — closing call-to-action with email, phone, location, and social links
- `src/components/` — `FadeIn` (scroll-in animation), `Magnet` (cursor-magnetic hover), `AnimatedText` (character-by-character scroll reveal), `ContactButton` (mailto pill), `LiveProjectButton` (kept for future use, currently unused)
- `src/index.css` — global reset, dark background, Kanit font, and the `.hero-heading` gradient text utility

## Deploying to GitHub Pages

This project includes a ready-to-go GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push this project to a new GitHub repository (as the repo root — `package.json` should sit at the top level).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). It will build the site and deploy it automatically.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

The workflow automatically sets the Vite base path to `/<repo-name>/` so assets resolve correctly under that subpath — no manual config needed, even if you rename the repo.

**Using a custom domain or a `<username>.github.io` root repo instead?** Set `VITE_BASE_PATH` to `/` (or remove the `env:` line in the workflow) since the site won't be under a subpath in that case.

**Prefer Netlify or Vercel instead?** Both work with zero config — just point them at this repo; they'll detect Vite automatically (build command `npm run build`, output directory `dist`).

## Personalizing further

- **Placeholder contact details**: the phone number is still the masked `+977-98XXXXXXXX` from the resume — update it (and the email, if it's a placeholder) in `HeroSection.tsx`'s `ContactButton`, `ContactSection.tsx`, and `ContactButton.tsx`.
- **GitHub/LinkedIn links**: update the `href`s in `ProjectsSection.tsx` and `ContactSection.tsx` once real profile URLs are confirmed.
- **Hero visual**: the SVG terminal illustration in `HeroSection.tsx` is a stand-in for a headshot or a real graphic — swap the `<svg>` block for an `<img>` (the surrounding `Magnet` + `FadeIn` wiring will keep working the same way).
- **Real projects**: the `PROJECTS` array in `src/sections/ShowcaseProjectsSection.tsx` is where you add your own project cards — each one takes a title, description, a list of tech tags, and optional `liveUrl` / `githubUrl` links. Leave `liveUrl` out and the "Live Demo" button just shows disabled instead of linking anywhere.

## Notes

- The Kanit font is loaded from Google Fonts in `index.html` (weights 300–900).
- Fully responsive from mobile up through ultra-wide screens using Tailwind breakpoints and `clamp()`-based fluid type.
