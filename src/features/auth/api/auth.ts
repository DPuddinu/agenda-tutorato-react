import { api } from '@/core/api';

export async function login(username: string, password: string) {
  const response = await api.post(
    '/auth/login',
    {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    false
  );

  if (!response.ok) {
    throw new Error('Login failed!');
  }
  return await response.json();
}

export async function register(username: string, password: string, confirm: string) {
  const response = await api.post(
    '/auth/register',
    {
      method: 'POST',
      body: JSON.stringify({ username, password, confirm }),
      headers: {
        'Content-Type': 'application/json'
      }
    },
    false
  );

  if (!response.ok) {
    throw new Error('Register failed!');
  }
  return await response.json();
}
