import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.fugerit.org',
  outDir: './dist',
  build: {
    assets: 'assets',
  },
});
