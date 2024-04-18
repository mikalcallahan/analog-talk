/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, { PrerenderContentFile } from '@analogjs/platform';
import { PrerenderRoute } from 'nitropack';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      prerender: {
        routes: async () => [
          '/',
          '/about',
          '/contact',
          {
            contentDir: 'src/content/help',
            transform: (file: PrerenderContentFile) => {
              // use the slug from frontmatter if defined, otherwise use the files basename
              const slug = file.attributes['slug'] || file.name;

              return `/help/${slug}`;
            },
          },
        ],
        postRenderingHooks: [
          async (route: PrerenderRoute) => console.log('route is ', route),
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
