import { defineConfig } from 'vitest';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: 'vite',
    transform: {
      '^.+\\.js$': '@babel/register'
    },
    setupFiles: './modal.jsx'
  },
});