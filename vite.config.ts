import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/INF172_DrYoung_Podcast_LandingPage/',
  plugins: [react()],
})
