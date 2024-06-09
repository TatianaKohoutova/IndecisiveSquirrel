import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './global.css'
import { AboutGame } from './pages/AboutGame/game'
import { AboutUs } from './pages/AboutUs/about'
import { QuestionForm } from './pages/QuestionForm'
import { Header } from './pages/Components/Menu/menu'
import { Footer } from './pages/Components/Footer'
import { Main } from './pages/Main/main'
import { RecepyPage } from './pages/RecepyPage'
import { RecepyList } from './pages/Components/RecepyList'
import ErrorPage from './pages/Components/ErrorPage'

export const App = () => {
    const location = useLocation()
    const isAboutPage = location.pathname === '/about'

    return (
        <div className={`main ${isAboutPage ? 'auto-height' : 'full-height'}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Main /> },
            { path: '/game', element: <AboutGame /> },
            { path: '/about', element: <AboutUs /> },
            { path: '/questionForm/:questionId', element: <QuestionForm /> },
            { path: '/questionForm', element: <QuestionForm /> },
            { path: '/recepy/:recepyId', element: <RecepyPage /> },
            { path: '/recepyList', element: <RecepyList /> },
        ],
    },
])

// const router = createBrowserRouter([
//   {path: '/', element: <HomePage />,},
//   {path: '/game', element: <AboutGame />,},
//   {path: '/about', element: <AboutUs />,},
//   {path: '/questionForm', element: <QuestionForm />, },
// ]);

createRoot(document.querySelector('#app')).render(<RouterProvider router={router} />)

// createRoot(document.querySelector('#app')).render(<HomePage />);
