import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static/',
  build: {
    outDir: '../MEMORYBOOK/static/',
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [react()]
})
