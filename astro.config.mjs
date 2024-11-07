import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://andrewdavis.dev',
  srcDir: './src',
  outDir: './dist',
  publicDir: './public',
  integrations: [mdx(), react(), sitemap()],
});
