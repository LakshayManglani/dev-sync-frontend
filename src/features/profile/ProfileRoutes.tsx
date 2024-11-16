import { RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from '../../routes';
import Profile from './Profile';
import Info from './components/info/Info';

const ProfileRoutes: RouteObject[] = [
  {
    path: routes.profile,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Info />
          </Suspense>
        ),
      },
      {
        path: routes.posts,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <h1>Posts</h1>
          </Suspense>
        ),
      },
    ],
  },
];

export default ProfileRoutes;
