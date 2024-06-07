import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './global.css';

import { AboutGame } from './pages/AboutGame/game';
import { AboutUs } from './pages/AboutUs/about';
import { QuestionForm } from './pages/Components/QuestionForm';
import { Header } from './pages/Components/Menu/menu';
import { Footer } from './pages/Components/Footer';
import { Main } from './pages/Main/main';

export const App = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/game', element: <AboutGame /> },
      { path: '/about', element: <AboutUs /> },
      { path: '/questionForm', element: <QuestionForm /> },
    ],
  },
]);

// const router = createBrowserRouter([
//   {path: '/', element: <HomePage />,},
//   {path: '/game', element: <AboutGame />,},
//   {path: '/about', element: <AboutUs />,},
//   {path: '/questionForm', element: <QuestionForm />, },
// ]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);

// createRoot(document.querySelector('#app')).render(<HomePage />);
