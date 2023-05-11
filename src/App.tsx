import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
