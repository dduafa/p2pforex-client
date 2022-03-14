import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import {
  MainLayoutComponent,
  AuthLayoutComponent,
  AdminLayoutComponent,
} from '@/components/layouts';

const LoginPage = lazy(() => import('@pages/login-page'));
const DashboardPage = lazy(() => import('@pages/dashboard-page'));
const SignupPage = lazy(() => import('@pages/signup-page'));
const ListingsPage = lazy(() => import('@/pages/listings-page'));
const ChangePasswordPage = lazy(() => import('@pages/change-password-page'));

const AppRoutes = (isAuthenticated: boolean) => {
  return [
    {
      path: '/',
      element: isAuthenticated ? (
        <AdminLayoutComponent />
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
      element: isAuthenticated ? (
        <MainLayoutComponent />
      ) : (
        <Navigate to="/login" />
      ),
      children: [
        { path: 'listings', element: <ListingsPage /> },
        { path: '/', element: <Navigate to="/listings" /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '/',
      element: !isAuthenticated ? (
        <AuthLayoutComponent />
      ) : (
        <Navigate to="listings" />
      ),
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
