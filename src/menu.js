// Section navigation: the small-screen menu and the "current section" marker.
import { t } from './i18n.js';

// Must match the breakpoint in style.css where the inline nav appears.
const DESKTOP_NAV = window.matchMedia('(min-width: 1280px)');

export function initMenu() {
  const header = document.getElementById('site-header');
  const button = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');

  const isOpen = () => button.getAttribute('aria-expanded') === 'true';

  function setOpen(open, { returnFocus = false } = {}) {
    header.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    // Stored as an i18n key so the label also follows language changes.
    button.dataset.i18n = open ? 'ui.menuClose' : 'ui.menuOpen';
    button.textContent = t(button.dataset.i18n);
    if (open) {
      nav.querySelector('a')?.focus();
    } else if (returnFocus) {
      button.focus();
    }
  }

  button.addEventListener('click', () => setOpen(!isOpen()));

  // Choosing a section closes the menu; the browser then scrolls to the anchor.
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a') && isOpen()) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) setOpen(false, { returnFocus: true });
  });

  // A click anywhere outside the header closes it.
  document.addEventListener('click', (event) => {
    if (isOpen() && !header.contains(event.target)) setOpen(false);
  });

  // Widening to the desktop layout shows the inline nav, so the panel state is reset.
  DESKTOP_NAV.addEventListener('change', (event) => {
    if (event.matches && isOpen()) setOpen(false);
  });
}

// Marks the nav link of the section crossing the middle of the viewport.
export function initActiveSection() {
  if (!('IntersectionObserver' in window)) return;

  const links = new Map(
    [...document.querySelectorAll('.site-nav a[href^="#"]')].map((link) => [link.hash.slice(1), link]),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const link = links.get(entry.target.id);
        if (!link) continue;
        if (entry.isIntersecting) {
          for (const other of links.values()) other.removeAttribute('aria-current');
          link.setAttribute('aria-current', 'location');
        } else if (link.getAttribute('aria-current')) {
          link.removeAttribute('aria-current');
        }
      }
    },
    // A thin band across the middle of the viewport: one section at a time.
    { rootMargin: '-45% 0px -50% 0px' },
  );

  for (const id of links.keys()) {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  }
}
