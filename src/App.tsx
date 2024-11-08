import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyHome, LazyComponents } from './features';
import Layout from './Layout';
import { routes } from './routes';
import AuthRoutes from './features/auth/AuthRoutes';
import RequireAuth from './features/auth/components/RequireAuth';

const router = createBrowserRouter([
  {
    path: routes.home,
    children: [
      {
        element: <RequireAuth />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                path: routes.home,
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyHome />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },

      // Auth routes
      ...AuthRoutes,

      // Development route
      {
        path: routes.devComponents,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponents />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
