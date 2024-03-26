import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import ViteComponents from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    }),
    ViteComponents({
      resolvers: [
        PrimeVueResolver()
      ],
      dts: 'src/components.js'
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vitest'],
      dirs: [
        // './composables' // only root modules
        // './composables/**', // all nested modules
        'src/directives/**',
        'src/api/**',
        'src/utils/**',
        'src/composable/**',
        'src/constants/**',
        'src/utils/**'
      ],
      dts: 'src/auto-imports.js',
      eslintrc: {
        enabled: true
      }
    }),
    VueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
