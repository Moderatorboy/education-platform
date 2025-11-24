// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },

  server: {
    port: 5173,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    assetsDir: 'assets',
  },
})
