import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyHome, LazyComponents } from './features';
import Layout from './Layout';
import { routes } from './routes';
import AuthRoutes from './features/auth/AuthRoutes';
import RequireAuth from './features/auth/components/RequireAuth';
import ProfileRoutes from './features/profile/ProfileRoutes';
import { useSelfQuery } from './app/services/user';
import { selectCurrentUser } from './features/auth/auth.slice';
import { useAppSelector } from './app/hooks';
import { FallbackLoader } from './components';

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
                  <Suspense fallback={<FallbackLoader />}>
                    <LazyHome />
                  </Suspense>
                ),
              },
              ...ProfileRoutes,
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
  const user = useAppSelector(selectCurrentUser);
  const { isLoading } = useSelfQuery(undefined, {
    skip: user.isLoggedIn,
  });

  if (isLoading) {
    return <FallbackLoader />;
  }

  return <RouterProvider router={router} />;
}

export default App;
