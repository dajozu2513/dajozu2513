import { Application } from '@splinetool/runtime';

// Scene served from public/. BASE_URL keeps the path correct when the site is deployed under a subpath.
const SCENE_URL = `${import.meta.env.BASE_URL}scene.splinecode`;

// Scene objects hidden after loading. 'logo' is the group of letter shapes behind the robot.
const HIDDEN_OBJECTS = ['logo'];

const canvas = document.getElementById('canvas3d');
const loader = document.getElementById('loader');
const loaderText = loader.querySelector('.loader__text');

function hideLoader() {
  loader.classList.add('is-hidden');
}

function showError(message) {
  loader.classList.add('is-error');
  loader.setAttribute('role', 'alert');
  loaderText.textContent = message;
}

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

async function init() {
  let app;
  try {
    // 'sandbox' is the runtime's default; set explicitly because the scene is a remix
    // of another author's file and its HTML content must not run in this page.
    app = new Application(canvas, { htmlContentMode: 'sandbox' });
  } catch (error) {
    console.error('Could not start the 3D renderer.', error);
    showError('Your browser could not start the 3D viewer.');
    return;
  }

  try {
    await app.load(SCENE_URL);
  } catch (error) {
    console.error(`Could not load scene from ${SCENE_URL}`, error);
    showError('The 3D scene could not be loaded. Please check your connection and refresh the page.');
    return;
  }

  hideSceneObjects(app);
  hideLoader();
}

init();
