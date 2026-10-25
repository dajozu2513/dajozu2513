import { defineConfig } from 'vite';

// Where the built site is served from:
// - GitHub Pages: https://dajozu2513.github.io/dajozu2513/ (a subpath).
// - Render: https://dajozu2513.onrender.com/ (the domain root). Render sets RENDER=true
//   in its build environment.
// BASE_PATH overrides both, for any other host. The dev server always uses the root.
function productionBase() {
  if (process.env.BASE_PATH) return process.env.BASE_PATH;
  if (process.env.RENDER) return '/';
  return '/dajozu2513/';
}

// Production builds and `vite preview` (which serves them) use the production base.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? productionBase() : '/',
}));
