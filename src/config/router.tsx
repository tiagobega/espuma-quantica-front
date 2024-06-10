import Layout from '@components/layout';
import HomeView from '@views/home';
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{index: true, element: <HomeView />}],
  },
];

// const router = createBrowserRouter(routes, {basename: ''appConfig.path});
const router = createBrowserRouter(routes);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
