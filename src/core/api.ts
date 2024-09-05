import fetch, { RequestInit } from 'node-fetch';

export const AUTH_TOKEN = 'auth-token';
export const BASE_URL = 'http://localhost:3001';

export const commonHeaders = {
  'Content-Type': 'application/json'
};

export function getToken() {
  const token = sessionStorage.getItem(AUTH_TOKEN);
  return token ? { Authorization: `Bearer ${token}` } : undefined;
}

async function fetchWithAuth(path: string, options: RequestInit, withAuth: boolean) {
  const headers = {
    ...(withAuth && getToken()),
    ...commonHeaders,
    ...options.headers
  };

  return fetch(`${BASE_URL}${path}`, { ...options, headers });
}

export const api = {
  get: async (path: string, withAuth = true) =>
    fetchWithAuth(
      path,
      {
        method: 'GET'
      },
      withAuth
    ),

  post: async (path: string, body: unknown, withAuth = true) =>
    fetchWithAuth(
      path,
      {
        method: 'POST',
        body: JSON.stringify(body)
      },
      withAuth
    ),

  put: async (path: string, body: unknown, withAuth = true) =>
    fetchWithAuth(
      path,
      {
        method: 'PUT',
        body: JSON.stringify(body)
      },
      withAuth
    ),

  patch: async (path: string, body: unknown, withAuth = true) =>
    fetchWithAuth(
      path,
      {
        method: 'PATCH',
        body: JSON.stringify(body)
      },
      withAuth
    ),

  delete: async (path: string, withAuth = true) =>
    fetchWithAuth(
      path,
      {
        method: 'DELETE'
      },
      withAuth
    )
};
