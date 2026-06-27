export function initCursor() {
  const dot = document.querySelector('.cursor__dot');
  const ring = document.querySelector('.cursor__ring');
  const cursor = document.querySelector('.cursor');
  if (!dot || !ring) return;

  let ringX = 0, ringY = 0;
  let dotX = 0, dotY = 0;
  let raf;

  const moveDot = (x, y) => {
    dotX = x;
    dotY = y;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  };

  const lerpRing = () => {
    ringX += (dotX - ringX) * 0.14;
    ringY += (dotY - ringY) * 0.14;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    raf = requestAnimationFrame(lerpRing);
  };

  window.addEventListener('mousemove', (e) => {
    moveDot(e.clientX, e.clientY);
  });

  // Hover state for interactive elements
  const hoverEls = document.querySelectorAll('a, button, .project-card, [data-cursor]');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => cursor?.classList.add('cursor--hover'));
    el.addEventListener('mouseleave', () => cursor?.classList.remove('cursor--hover'));
  });

  lerpRing();
}

export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

export function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

export function initLoader() {
  const loader = document.querySelector('.loader');
  const fill = document.querySelector('.loader__bar-fill');
  const num = document.querySelector('.loader__num');
  if (!loader) return;

  let progress = 0;
  const target = 100;
  const duration = 1600; // ms

  const start = performance.now();

  const tick = (now) => {
    const elapsed = now - start;
    progress = Math.min((elapsed / duration) * 100, 100);

    if (fill) fill.style.width = `${progress}%`;
    if (num) num.textContent = `${Math.floor(progress).toString().padStart(3, '0')}%`;

    if (progress < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => {
        loader.classList.add('is-hidden');
      }, 300);
    }
  };

  requestAnimationFrame(tick);
}

export function initSplitText() {
  const targets = document.querySelectorAll('[data-split]');
  targets.forEach(el => {
    const text = el.innerHTML;
    const words = text.split(' ');

    el.innerHTML = words.map((word, wi) => {
      const chars = word.split('').map((char, ci) => {
        const delay = (wi * 4 + ci) * 0.03;
        return `<span class="split-char" style="animation-delay:${delay + 0.3}s">${char}</span>`;
      }).join('');
      return `<span class="split-word">${chars}</span>`;
    }).join('<span style="display:inline-block;width:0.3em"></span>');
  });
}

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
