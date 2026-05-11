import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@jsquash/avif', '@jsquash/webp']
  }
});
