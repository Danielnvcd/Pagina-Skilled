import App from './App';
import Home from './pages/Home';

// Home se mantiene en el bundle inicial (es la landing principal y la página
// más visitada). Las páginas internas se cargan de forma diferida (code-split)
// para no enviar su JS en la primera carga. vite-react-ssg resuelve estos
// `import()` durante el prerender, así que el SSG/SEO no se ve afectado.
export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'servicios', lazy: async () => ({ Component: (await import('./pages/ServicesPage')).default }) },
      { path: 'proyectos', lazy: async () => ({ Component: (await import('./pages/ProjectsPage')).default }) },
      { path: 'proveedores', lazy: async () => ({ Component: (await import('./pages/ProvidersPage')).default }) },
      { path: 'historia', lazy: async () => ({ Component: (await import('./pages/HistoryPage')).default }) },
    ],
  },
];
