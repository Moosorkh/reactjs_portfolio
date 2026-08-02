import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons-vendor': ['react-icons/fa', 'react-icons/si', 'react-icons/di', '@remixicon/react'],
          'mui-vendor': ['@mui/material', '@emotion/react', '@emotion/styled'],
          'emailjs-vendor': ['@emailjs/browser'],
          'transition-vendor': ['react-transition-group'],
        },
      },
    },
  },
})
