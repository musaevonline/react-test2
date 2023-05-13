import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider , Navigate} from "react-router-dom";
import APage from './pages/A';
import A1Page from './pages/A1';
import BPage from './pages/B'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "a",
                element: <APage />,
                children: [
                    {
                        path: 'a1',
                        element: <A1Page />
                    }
                ]
            },
            {
                path: "b/:id",
                element: <BPage />,
            },
            {
                path: "b",
                element: <Navigate replace to="/b/1" />,
            },
            {
                index: true,
                element: <div>Main</div>,
            },
        ]
    },
]);


const root = createRoot(document.querySelector('#lalala'));
root.render(<RouterProvider router={router} />)