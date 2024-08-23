import { useAuth } from '@/hooks/useAuth';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedPage = ({ children }: PropsWithChildren) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
