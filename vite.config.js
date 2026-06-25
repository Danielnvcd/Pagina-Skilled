import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // El Chromium que usa react-snap (prerender) no soporta sintaxis ES2020+
    // (optional chaining `?.`, nullish `??`). Transpilamos a es2019 para que
    // el prerender pueda ejecutar el bundle y capturar el HTML.
    target: 'es2019',
  },
})
