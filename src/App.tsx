import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';
import { useRoutes } from 'react-router-dom';
import AppRoutes from '@/routes/app-routes';

function App() {
  const { isAuthenticated } = useAppSelector(authSelector);

  const routes = AppRoutes(isAuthenticated);

  return useRoutes(routes);
}

export default App;
