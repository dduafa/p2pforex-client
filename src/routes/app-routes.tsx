import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { MainLayout, AuthLayout, AdminLayout } from 'components/layouts';
import { useAppSelector } from 'redux/hooks';
import { authSelector } from 'features/auth/auth-reducer';
import WithLoading from 'hocs/with-loading';

const LoginPage = lazy(() => import('pages/login-page'));
const DashboardPage = lazy(() => import('pages/dashboard-page'));
const SignupPage = lazy(() => import('pages/signup-page'));
const ListingsPage = lazy(() => import('pages/listings-page'));
const ChangePasswordPage = lazy(() => import('pages/change-password-page'));

const AppRoutes = () => {
  const { isAuthenticated } = useAppSelector(authSelector);

  const elements = [
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
      children: [
        { path: 'dashboard', element: <DashboardPage /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/',
      element: !isAuthenticated ? <AuthLayout /> : <Navigate to="/listings" />,
      children: [
        { path: 'signup', element: <SignupPage /> },
        { path: 'adminsignup', element: <SignupPage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'changepassword/:token', element: <ChangePasswordPage /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '/404', element: <h1>Page Not Found</h1> },
  ];

  return useRoutes(elements);
};

export default WithLoading(AppRoutes);
