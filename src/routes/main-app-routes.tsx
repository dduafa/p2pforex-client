import { MainLayoutComponent } from '@/components/layouts';
import { Navigate } from 'react-router-dom';
import { DashboardPage } from '@/pages';

const MainRoutes = [
  {
    path: 'app',
    element: <MainLayoutComponent />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },

      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default MainRoutes;
