/*
/ <reference types="vitest />
/ <reference types="vite/client />
*/

import {defineConfig, type UserConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './tests/setup.ts'
  }
} as UserConfig)
