# Portfolio — Alex Mora

A dark, immersive creative developer portfolio inspired by Newway/Behance aesthetic. Features a Three.js particle field, GSAP-style scroll reveals, a custom magnetic cursor, and a split-text hero.

## Stack

- **Vanilla JS (ESM)** — no build step required
- **Three.js** — particle sphere background with custom GLSL shaders
- **CSS Custom Properties** — token-based design system
- **CSS animations** — scroll-driven reveals, split-text, cursor

## Structure

```
index.html          Entry point
assets/
  favicon.svg       SVG favicon
scripts/
  dev-server.js     Node.js dev server with live reload
src/
  js/
    config.js       Site data & settings (edit me!)
    scene.js        Three.js particle scene
    interactions.js Cursor, scroll reveal, loader, nav
    main.js         DOM render + boot sequence
  styles/
    tokens.css      Color / type / spacing tokens
    base.css        Reset & foundations
    layout.css      Nav, sections, grid, footer
    components.css  Cards, cursor, hero, buttons
    animations.css  Keyframes & reveal classes
    responsive.css  Breakpoints & reduced motion
    main.css        Imports all partials
```

## Getting Started

```bash
node scripts/dev-server.js
# → http://localhost:3000
```

No npm install needed — Three.js loads from CDN via an importmap.

## Customizing

All content lives in `src/js/config.js`:

- **name / role / email / location** — personal info
- **projects** — add/remove project cards (name, tags, accent color)
- **skills** — skill rows in the About section
- **socials** — footer links
- **scene** — tweak particle count, speed, mouse sensitivity

Colors, type, and spacing live in `src/styles/tokens.css`.

## Deploying

Drop the entire folder on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). No build step.

---

Designed & built with intention.
