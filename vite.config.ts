import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Removing exclusion to allow proper bundling
  // optimizeDeps: {
  //   exclude: ['lucide-react'],
  // },
});
