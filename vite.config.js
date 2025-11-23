// vite.config.js (ESM Format, Fixed for Vercel + ESM)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  css: {
    postcss: './postcss.config.js', // okay for local, Vercel picks automatically
    // Alternatively: postcssOptions: { plugins: [require('autoprefixer')] }
  },

  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },

  server: {
    port: 5173,
    open: true,
    // usePolling only for local dev, remove for Vercel prod
    // watch: { usePolling: true },
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,   // Clean old builds
    assetsDir: 'assets', // Proper asset handling
    target: 'esnext',    // Ensure modern ESM support
  },
})
