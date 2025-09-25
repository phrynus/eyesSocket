import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Font from 'vite-plugin-font'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Font.vite({
      scanFiles: ['./src/*.{vue,ts}', './src/**/*.{vue,ts}'],
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
