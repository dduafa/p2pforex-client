import { AuthLayoutComponent } from '@/components/layouts';
import { Navigate } from 'react-router-dom';
import { LoginPage, SignupPage } from '@/pages';

const AuthRoutes = [
  {
    path: 'app',
    element: <AuthLayoutComponent />,
    children: [
      { path: 'signup', element: <SignupPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default AuthRoutes;
