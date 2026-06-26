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
  // Opciones de vite-react-ssg (Critical CSS vía beasties).
  ssgOptions: {
    beastiesOptions: {
      // Inlinea el CSS crítico y difiere el <link> restante con media="print"
      // + onload (no bloquea el render). Usamos 'media' en vez de 'swap' porque
      // el modo swap deja el rel="stylesheet" intacto en este pipeline (sigue
      // bloqueando); 'media' no depende de reescribir rel.
      preload: 'media',
    },
  },
})
