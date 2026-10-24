import { Application } from '@splinetool/runtime';
import { t } from './i18n.js';

// Scene served from public/. BASE_URL keeps the path correct when the site is deployed under a subpath.
const SCENE_URL = `${import.meta.env.BASE_URL}scene.splinecode`;

// Scene objects hidden after loading. 'logo' is the group of letter shapes behind the robot.
const HIDDEN_OBJECTS = ['logo'];

function hideSceneObjects(app) {
  for (const name of HIDDEN_OBJECTS) {
    const object = app.findObjectByName(name);
    if (object) {
      object.visible = false;
    } else {
      console.warn(`Scene object "${name}" not found; nothing to hide.`);
    }
  }
}

// Stop rendering while the hero is scrolled out of view; resume when it comes back.
function pauseWhenOffscreen(app, target) {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (app.isStopped) app.play();
    } else if (!app.isStopped) {
      app.stop();
    }
  });
  observer.observe(target);
}

export async function initRobot({ canvas, loader, visibilityTarget }) {
  const loaderText = loader.querySelector('.loader__text');

  const hideLoader = () => loader.classList.add('is-hidden');
  // The message is stored as an i18n key so it follows later language changes.
  const showError = (key) => {
    loader.classList.add('is-error');
    loader.setAttribute('role', 'alert');
    loaderText.dataset.i18n = key;
    loaderText.textContent = t(key);
  };

  let app;
  try {
    // 'sandbox' is the runtime's default; set explicitly because the scene is a remix
    // of another author's file and its HTML content must not run in this page.
    app = new Application(canvas, { htmlContentMode: 'sandbox' });
  } catch (error) {
    console.error('Could not start the 3D renderer.', error);
    showError('robot.startError');
    return null;
  }

  try {
    await app.load(SCENE_URL);
  } catch (error) {
    console.error(`Could not load scene from ${SCENE_URL}`, error);
    showError('robot.loadError');
    return null;
  }

  hideSceneObjects(app);
  hideLoader();
  pauseWhenOffscreen(app, visibilityTarget);
  return app;
}
