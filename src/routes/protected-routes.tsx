import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';
import AppRoutes from './app-routes';
import { useRoutes } from 'react-router-dom';
import WithLoading from '@/hocs/with-loading';

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAppSelector(authSelector);
  const routes = AppRoutes(isAuthenticated);
  return useRoutes(routes);
};

const LoadedRoutes = () => {
  const { loading } = useAppSelector(authSelector);
  const Routes = WithLoading(ProtectedRoutes);

  return <Routes isLoading={loading} />;
};

export default LoadedRoutes;
