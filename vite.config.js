import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // Ensure correct asset paths when served from https://<user>.github.io/portfolio/
    base: mode === 'production' ? '/portfolio/' : '/',
    plugins: [react()],
  };
});
