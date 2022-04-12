import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  base: './',
  build: {
    outDir: 'docs',
    chunkSizeWarningLimit: 800
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, './src')
    }
  }
})
