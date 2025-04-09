import { defineConfig } from '@tanstack/react-start/config';
import tsConfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['pg-native']
    },
    plugins: [
      tailwindcss(),
      tsConfigPaths({
        projects: ['./tsconfig.json']
      })
    ]
  },
  server: {
    preset: 'node-server'
  }
});
