import { ProtectedPage } from '@/components/protected-page';
import { AppointmentsPage } from '@/pages/appointments/appointments-page';
import { LandingPageComponent } from '@/pages/landingPage/landing-page';
import { Link2 } from '@/pages/link2/link2';
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
    path: '/dashboard',
    element: (
      <ProtectedPage>
        <AppointmentsPage />
      </ProtectedPage>
    )
  },
  {
    path: '/link2',
    element: (
      <ProtectedPage>
        <Link2 />
      </ProtectedPage>
    )
  }
]);
