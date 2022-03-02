import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';
import AppRoutes from './app-routes';
import { useRoutes } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAppSelector(authSelector);
  const routes = AppRoutes(isAuthenticated);
  return useRoutes(routes);
};

export default ProtectedRoutes;
