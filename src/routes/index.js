import StoreListPage from 'src/containers/StoreListPage';
import StoreDetailPage from 'src/containers/StoreDetailPage';
import Login from 'src/containers/Login';
import Logout from 'src/containers/Logout';
import NotFound from 'src/components/ErrorPages/NotFound';

export const publicRoutes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/logout',
    exact: true,
    component: Logout,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export const privateRoutes = [
  {
    path: '/stores/:id',
    component: StoreDetailPage,
  },
  {
    path: '/stores',
    component: StoreListPage,
  },
];
