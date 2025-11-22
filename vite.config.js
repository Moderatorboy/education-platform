// vite.config.js (ESM Format)

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  
  css: {
    postcss: './postcss.config.js',
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 5173,
    open: true,
    watch: {
      usePolling: true, // Live editing fix (file change detect)
    },
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,   // Old build delete, most important
    assetsDir: 'assets', // Proper asset handling
  },
})
