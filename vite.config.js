import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': 'http://localhost:5000', // Use local backend during development
    } : {}, 
  },
  plugins: [react()  ,tailwindcss(),],
  base : "./"
})
