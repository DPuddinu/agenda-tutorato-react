import { ProtectedPage } from '@/components/protected-page';
import { LandingPage } from '@/pages/landing-page';
import { LoginPage } from '@/pages/login/login-page';
import { RegisterPage } from '@/pages/register/register-page';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/appointments',
    element: (
      <ProtectedPage>
        <div>appointments</div>
      </ProtectedPage>
    )
  }
]);
