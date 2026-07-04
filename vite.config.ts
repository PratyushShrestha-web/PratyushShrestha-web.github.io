import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Allows GitHub Pages (or any subpath host) to override the base path,
// e.g. VITE_BASE_PATH=/my-repo-name/ set by the deploy workflow below.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
});
