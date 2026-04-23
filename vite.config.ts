import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //plugins: [react()],
  server: {
    allowedHosts: [
      'unthawed-whinny-giggly.ngrok-free.dev'  
      
    ]
  },
  plugins: [react()],
  base: '/hellowold-prototype2/'
})
