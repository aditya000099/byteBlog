import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'global': {}
  },
  resolve: {
    alias: {
      lowlight: path.resolve(__dirname, 'node_modules/lowlight/lib/core.js'),
    },
  },
})
