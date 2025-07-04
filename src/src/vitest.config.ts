import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    // setupFiles: './src/setupTests.ts', // Descomenta solo si tienes este archivo
  },
});