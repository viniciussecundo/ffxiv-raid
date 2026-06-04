import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://viniciussecundo.github.io/ffxiv-raid',
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: true,
  },
});
