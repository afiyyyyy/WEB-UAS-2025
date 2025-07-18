import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ← ini biar bisa diakses dari IP lokal
    port: 3000       // ← sesuaikan dengan port yang kamu pakai
  }
})
