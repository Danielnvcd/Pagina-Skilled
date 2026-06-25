import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './styles/index.css'

// vite-react-ssg gestiona el render (SSG en build, hidratación en cliente)
// y el <head> vía el componente Head (ver src/components/Seo.jsx).
export const createRoot = ViteReactSSG({ routes })
