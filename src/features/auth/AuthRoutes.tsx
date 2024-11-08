import { RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from '../../routes';
import AuthPage from './components/AuthPage';
import NoAuth from './components/NoAuth';
import Verify from './components/Verify';

const AuthRoutes: RouteObject[] = [
  {
    element: <NoAuth />,
    children: [
      {
        path: routes.login,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AuthPage />
          </Suspense>
        ),
      },
      {
        path: routes.register,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AuthPage />
          </Suspense>
        ),
      },
      {
        path: routes.verify,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Verify />
          </Suspense>
        ),
      },
    ],
  },
];

export default AuthRoutes;
