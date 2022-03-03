import { MainLayoutComponent, AuthLayoutComponent } from '@/components/layouts';
import { Navigate } from 'react-router-dom';
import { DashboardPage, SignupPage, LoginPage } from '@/pages';

const AppRoutes = (isAuthenticated: boolean) => {
  return [
    {
      path: '/',
      element: isAuthenticated ? (
        <MainLayoutComponent />
      ) : (
        <Navigate to="/login" />
      ),
      children: [
        { path: 'dashboard', element: <DashboardPage /> },
        { path: '/', element: <Navigate to="/dashboard" />},
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/',
      element: !isAuthenticated ? (
        <AuthLayoutComponent />
      ) : (
        <Navigate to="dashboard" />
      ),
      children: [
        { path: 'signup', element: <SignupPage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'changepassword', element: <div>Change password page</div> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
  ];
};

export default AppRoutes;
