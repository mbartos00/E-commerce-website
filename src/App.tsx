import Home from './Pages/Home';
import GlobalStyle from './globalStyles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
