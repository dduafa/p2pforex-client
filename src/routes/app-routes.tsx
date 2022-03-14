import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { MainLayout, AuthLayout, AdminLayout } from '@/components/layouts';

const LoginPage = lazy(() => import('@pages/login-page'));
const DashboardPage = lazy(() => import('@pages/dashboard-page'));
const SignupPage = lazy(() => import('@pages/signup-page'));
const ListingsPage = lazy(() => import('@/pages/listings-page'));
const ChangePasswordPage = lazy(() => import('@pages/change-password-page'));

interface UserPermissions {
  isAuthenticated: boolean;
  role: string;
}

const AppRoutes = ({
  isAuthenticated,
  role = 'normaluser',
}: Partial<UserPermissions>) => {
  return [
    {
      path: '/',
      element: isAuthenticated ? <MainLayout /> : <Navigate to="/login" />,
      children: [
        { path: 'listings', element: <ListingsPage /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/',
      element: <AdminLayout />,
      children: [{ path: 'dashboard', element: <DashboardPage role={role} /> }],
    },
    {
      path: '/',
      element: !isAuthenticated ? <AuthLayout /> : <Navigate to="listings" />,
      children: [
        { path: 'signup', element: <SignupPage /> },
        { path: 'adminsignup', element: <SignupPage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'changepassword/:token', element: <ChangePasswordPage /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
  ];
};

export default AppRoutes;
