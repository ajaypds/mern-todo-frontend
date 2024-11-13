import { createBrowserRouter } from "react-router-dom";
import Projects from "../pages/Projects";
import MainContent from "../pages/MainContent";
import Layout from "../layout/Layout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <MainContent />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/project',
                element: <div>Project page</div>
            },
            {
                path: '/todos',
                element: <div>Todos page</div>
            },
            {
                path: '*',
                element: <div>Not found</div>
            }
        ]
    },
    {
        path: '/login',
        element: <div>Login Page</div>
    },
    {
        path: '*',
        element: <div>Not found</div>
    }

],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true
        }
    })

export default router;