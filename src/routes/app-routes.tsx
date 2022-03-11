import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { MainLayoutComponent, AuthLayoutComponent } from '@/components/layouts';

const LoginPage = lazy(() => import('@pages/login-page'));
const SignupPage = lazy(() => import('@pages/signup-page'));
const DashboardPage = lazy(() => import('@pages/dashboard-page'));

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
        { path: '/', element: <Navigate to="/dashboard" /> },
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
        { path: 'adminsignup', element: <SignupPage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'changepassword', element: <div>Change password page</div> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
  ];
};

export default AppRoutes;
