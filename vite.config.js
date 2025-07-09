/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Tambahkan blok 'test' di sini
  test: {
    // Aktifkan API yang kompatibel dengan Jest secara global
    globals: true,
    // Gunakan jsdom untuk mensimulasikan DOM
    environment: 'jsdom',
  },
})