import { initI18n, onLanguageChange } from './i18n.js';
import { renderSections } from './sections.js';
import { initMenu, initActiveSection } from './menu.js';

// Apply the stored language first, before the large 3D runtime is fetched and parsed.
initI18n();
renderSections();
onLanguageChange(renderSections);

initMenu();
initActiveSection();

const header = document.getElementById('site-header');
const hero = document.getElementById('top');

// Header is transparent over the robot and turns solid once the page scrolls.
function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Loaded on demand so the Spline runtime does not delay text, layout or language.
import('./robot.js').then(({ initRobot }) =>
  initRobot({
    canvas: document.getElementById('canvas3d'),
    loader: document.getElementById('loader'),
    visibilityTarget: hero,
  }),
);
