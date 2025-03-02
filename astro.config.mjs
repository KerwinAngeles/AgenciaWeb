// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: {
    port: 4321, // Aquí defines el puerto que prefieras
  },
  vite: {
    define: {
      "import.meta.env.VITE_PHONE_NUMBER": JSON.stringify(process.env.VITE_PHONE_NUMBER),
    },
  },
});