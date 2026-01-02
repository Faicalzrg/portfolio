import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // Assure la compatibilité avec l'URL GitHub Pages
  plugins: [react()],
})