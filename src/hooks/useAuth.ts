import { getToken } from '@/core/api';

export const useAuth = () => {
  return getToken();
};
