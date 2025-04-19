import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import ghpages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    ghpages()

  ],
  base: '/luxereserve_ft/',
});
