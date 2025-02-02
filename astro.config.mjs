// @ts-check
import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import vue from '@astrojs/vue';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [vue(), icon(), pagefind()],
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: ["rehype-katex"]
  }
});