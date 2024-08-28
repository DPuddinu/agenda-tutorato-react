import { ProtectedPage } from '@/components/protected-page';
import { AppointmentsPage } from '@/pages/appointments/appointments-page';
import { LandingPageComponent } from '@/pages/landingPage/landing-page';
import { LoginPage } from '@/pages/login/login-page';
import { RegisterPage } from '@/pages/register/register-page';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageComponent />
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
        <AppointmentsPage />
      </ProtectedPage>
    )
  }
]);

