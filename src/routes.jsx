import App from './App';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProvidersPage from './pages/ProvidersPage';
import HistoryPage from './pages/HistoryPage';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'servicios', element: <ServicesPage /> },
      { path: 'proyectos', element: <ProjectsPage /> },
      { path: 'proveedores', element: <ProvidersPage /> },
      { path: 'historia', element: <HistoryPage /> },
    ],
  },
];
