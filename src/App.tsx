import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Components from './pages/dev/components';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <h1>Index Page</h1>,
      },
      {
        path: 'dev',
        children: [
          {
            path: 'components',
            element: <Components />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
