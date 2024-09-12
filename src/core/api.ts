export const commonHeaders = {
  'Content-Type': 'application/json'
};

export function getToken() {
  const token = sessionStorage.getItem(import.meta.env.VITE_AUTH_TOKEN);
  return token ? { Authorization: `Bearer ${token}` } : undefined;
}

async function fetchWithAuth(path: string, options: RequestInit, withAuth: boolean) {
  const headers = {
    ...(withAuth && getToken()),
    ...commonHeaders,
    ...options.headers
  };
  return fetch(`${import.meta.env.VITE_BASE_DB_URL}${path}`, { ...options, headers });
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
