import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  optimizeDeps: {
    exclude: ['@jsquash/avif', '@jsquash/webp']
  },
  worker: {
    format: 'es'
  }
});
