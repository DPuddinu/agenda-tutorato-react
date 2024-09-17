import { api } from '@/core/api';
import { LoginPayload, RegisterPayload } from '../types/auth.types';

export async function login(data: LoginPayload) {
  const response = await api.post('/auth/login', data, false);
  if (!response.ok) {
    throw new Error('Login failed!');
  }
  const res = await response.json();
  if (res.token) {
    sessionStorage.setItem(import.meta.env.VITE_AUTH_TOKEN, res.token);
    return {
      status: 'success'
    };
  } else {
    return {
      status: 'error'
    };
  }
}

export async function register(data: RegisterPayload) {
  const response = await api.post('/auth/register', data, false);

  if (!response.ok) {
    throw new Error('Register failed!');
  }
  const res = await response.json();

  if (res.token) {
    sessionStorage.setItem(import.meta.env.VITE_AUTH_TOKEN, res.token);
    return {
      status: 'success'
    };
  } else {
    return {
      status: 'error'
    };
  }
}
