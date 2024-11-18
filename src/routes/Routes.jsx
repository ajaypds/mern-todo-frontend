import { createBrowserRouter } from "react-router-dom";
import Projects from "../pages/Projects";
import MainContent from "../pages/MainContent";
import Layout from "../layout/Layout";
import Project from "../pages/Project";
import Inbox from "../pages/Inbox";
import Today from "../pages/Today";
import Upcoming from "../pages/Upcoming";
import FilterLabels from "../pages/FilterLabels";


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
                element: <Projects />,
                children: [

                ]
            },
            {
                path: '/project/:id',
                element: <Project />
            },
            {
                path: '/todos',
                element: <div>Todos page</div>
            },
            {
                path: '/inbox',
                element: <Inbox />
            },
            {
                path: '/today',
                element: <Today />
            },
            {
                path: '/upcoming',
                element: <Upcoming />
            },
            {
                path: '/filter-labels',
                element: <FilterLabels />
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