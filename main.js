import { CONFIG } from './config.js';
import { initScene } from './scene.js';
import {
  initCursor,
  initScrollReveal,
  initNavScroll,
  initLoader,
  initSplitText,
  initSmoothScroll,
} from './interactions.js';

// ─── Render DOM ───────────────────────────────────────────
function buildDOM() {
  const app = document.getElementById('app');
  const { name, role, email, location, available, year, socials, navLinks, projects, skills } = CONFIG;

  app.innerHTML = `
    <!-- Loader -->
    <div class="loader" role="status" aria-label="Loading">
      <div class="loader__bar-wrap">
        <span class="loader__num">000%</span>
        <div class="loader__bar"><div class="loader__bar-fill"></div></div>
      </div>
    </div>

    <!-- Cursor -->
    <div class="cursor" aria-hidden="true">
      <div class="cursor__dot"></div>
    </div>
    <div class="cursor__ring" aria-hidden="true"></div>

    <!-- Nav -->
    <nav class="nav" role="navigation">
      <a href="#" class="nav__logo">${name.split(' ')[0]}<span style="color:var(--c-accent)">.</span></a>

      <div class="nav__status">
        <span class="nav__status-dot"></span>
        <span>${available ? 'Available for work' : 'Currently unavailable'}</span>
      </div>

      <ul class="nav__links">
        ${navLinks.map(l => `<li><a class="nav__link" href="${l.href}">${l.label}</a></li>`).join('')}
      </ul>
    </nav>

    <!-- Hero -->
    <section class="section--hero" id="home">
      <div class="container">
        <p class="hero__eyebrow">Creative Developer — ${location}</p>
        <h1 class="hero__headline" data-split>
          Building<br>digital<br><em>experiences</em>
        </h1>
        <div class="hero__meta">
          <p class="hero__desc">
            I craft immersive web experiences at the intersection of design, code, and motion. Based globally, working with ambitious brands.
          </p>
          <div class="hero__scroll-hint" aria-hidden="true">
            <div class="hero__scroll-line"></div>
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Work -->
    <section class="section--work" id="work">
      <div class="container">
        <div class="work__header reveal">
          <span class="section-label">Selected Work</span>
          <span class="work__count">${projects.length.toString().padStart(2,'0')} Projects</span>
        </div>

        <div class="work__grid">
          ${projects.map((p, i) => `
            <article class="project-card reveal reveal--delay-${(i % 2) + 1}">
              <a href="${p.href}" class="project-card__inner" aria-label="View ${p.name} project">
                <div class="project-card__num">${p.num}</div>

                <div class="project-card__preview">
                  <div class="project-card__preview-bg" style="background: linear-gradient(135deg, ${p.accent}18 0%, ${p.accent}06 60%, transparent 100%);">
                    <svg width="100%" height="100%" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="position:absolute;inset:0;opacity:0.4">
                      <defs>
                        <radialGradient id="g${i}" cx="30%" cy="40%" r="60%">
                          <stop offset="0%" stop-color="${p.accent}" stop-opacity="0.5"/>
                          <stop offset="100%" stop-color="${p.accent}" stop-opacity="0"/>
                        </radialGradient>
                      </defs>
                      <rect width="400" height="220" fill="url(#g${i})"/>
                      <!-- Geometric lines -->
                      <line x1="40" y1="180" x2="360" y2="40" stroke="${p.accent}" stroke-width="0.5" opacity="0.3"/>
                      <line x1="80" y1="200" x2="320" y2="20" stroke="${p.accent}" stroke-width="0.5" opacity="0.2"/>
                      <circle cx="200" cy="110" r="60" fill="none" stroke="${p.accent}" stroke-width="0.5" opacity="0.25"/>
                      <circle cx="200" cy="110" r="90" fill="none" stroke="${p.accent}" stroke-width="0.3" opacity="0.15"/>
                    </svg>
                  </div>
                </div>

                <div class="project-card__bottom">
                  <div class="project-card__info">
                    <h2 class="project-card__name">${p.name}</h2>
                    <div class="project-card__tags">
                      ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                  </div>
                  <div class="project-card__arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </a>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="section--about" id="about">
      <div class="container">
        <div class="about__grid">
          <div class="about__text-block">
            <span class="section-label reveal">About</span>
            <h2 class="about__headline reveal reveal--delay-1">
              Design &amp; code.<br>No compromise.
            </h2>
            <p class="about__body reveal reveal--delay-2">
              I'm a creative developer with a deep obsession for the space where design meets engineering. I believe the best digital experiences feel inevitable — perfectly crafted, nothing wasted.
            </p>
            <p class="about__body reveal reveal--delay-3">
              Currently open to full-time roles and select freelance projects. I work across the full stack — from Figma frames to deployed product — with a particular focus on motion-rich web.
            </p>
            <div class="reveal reveal--delay-4">
              <a href="#contact" class="btn">Let's talk
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="about__skills reveal reveal--delay-2">
            ${skills.map(s => `
              <div class="skill-row">
                <span class="skill-row__name">${s.name}</span>
                <span class="skill-row__level">${s.level}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section--contact" id="contact">
      <div class="container">
        <span class="section-label reveal">Contact</span>
        <a href="mailto:${email}" class="contact__big-link reveal reveal--delay-1">
          ${email}
        </a>
        <div class="contact__socials reveal reveal--delay-2">
          ${socials.map(s => `<a href="${s.href}" class="social-link" target="_blank" rel="noopener noreferrer">${s.label}</a>`).join('')}
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer__copy">© ${year} ${name}. All rights reserved.</p>
      <p class="footer__copy" style="color:var(--c-text-muted)">Designed & built with intention.</p>
    </footer>
  `;
}

// ─── Boot ─────────────────────────────────────────────────
async function boot() {
  buildDOM();

  initLoader();
  initSplitText();
  initCursor();
  initNavScroll();
  initSmoothScroll();

  // Wait a beat then init scroll reveals and scene
  requestAnimationFrame(() => {
    initScrollReveal();

    // Init Three.js scene (only if WebGL is available)
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        initScene();
      }
    } catch (e) {
      console.warn('WebGL not available, skipping 3D scene.', e);
    }
  });
}

boot();
