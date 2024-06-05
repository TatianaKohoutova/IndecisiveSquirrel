import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
// import { AboutGame } from '../pages/AboutGame';
// import { AboutUs } from '../pages/AboutUs';
import './global.css';
import { AboutGame } from './pages/AboutGame/game';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/game',
    element: <AboutGame />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);

// createRoot(document.querySelector('#app')).render(<HomePage />);
