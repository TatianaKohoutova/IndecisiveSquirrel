import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
// import { AboutGame } from '../pages/AboutGame';
// import { AboutUs } from '../pages/AboutUs';
import './global.css';
import { AboutGame } from './pages/AboutGame/game';
import { AboutUs } from './pages/AboutUs/about';
import { QuestionForm } from './pages/Components/QuestionForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/game',
    element: <AboutGame />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
  {
    path: '/questionForm',
    element: <QuestionForm />,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);

// createRoot(document.querySelector('#app')).render(<HomePage />);
