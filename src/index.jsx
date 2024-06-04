import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutGame } from './pages/AboutGame';
import { AboutUs } from './pages/AboutUs';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);

// createRoot(document.querySelector('#app')).render(<HomePage />);
