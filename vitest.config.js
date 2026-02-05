import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add this line below to fix the blank page:
  base: '/educational-app-for-IOE-and-MBBs/', 
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [],
  },
})
