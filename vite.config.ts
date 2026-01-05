import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Serve assets under https://aswdBatch.github.io/urbanshade-OS/
  base: '/urbanshade-OS/',
  plugins: [react()],
})
