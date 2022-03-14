import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';
import AppRoutes from './app-routes';
import { useRoutes } from 'react-router-dom';
import WithLoading from '@/hocs/with-loading';
import { Suspense } from 'react';
import Loader from '@/components/common/loader/loader-svg';

const ProtectedRoutes = () => {
  const { isAuthenticated, user } = useAppSelector(authSelector);
  const routes = AppRoutes({ isAuthenticated, role: user?.role });
  return useRoutes(routes);
};

const LoadedRoutes = () => {
  const { loading } = useAppSelector(authSelector);
  const Routes = WithLoading(ProtectedRoutes);

  return (
    <Suspense fallback={<Loader />}>
      <Routes isLoading={loading} />
    </Suspense>
  );
};

export default LoadedRoutes;
