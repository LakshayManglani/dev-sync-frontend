import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Components from './pages/dev/components';
import Layout from './Layout';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
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
