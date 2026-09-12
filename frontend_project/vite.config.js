import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // 🆕 Это заставит Vite на домашнем ПК перенаправлять относительные пути /api/ на Django порт 8000
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', 
        changeOrigin: true,
      },
      '/admin': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      }
    }
  }
})
