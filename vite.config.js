import { defineConfig } from 'vite';

// GitHub Pages serves this repository at https://dajozu2513.github.io/dajozu2513/,
// so production builds (and `vite preview`, which serves them) use that subpath.
// The dev server stays at the root: http://localhost:5173/
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/dajozu2513/' : '/',
}));
