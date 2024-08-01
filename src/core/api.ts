
export const AUTH_TOKEN = 'auth-token';

// {
//   token : string
// }
function getToken(){
  const token = sessionStorage.getItem(AUTH_TOKEN);
  if(!token) throw new Error('user must be logged in');
  return JSON.parse(token);
}

export const api = {
  GET: (url: string) =>  fetch(url, {
    method: 'GET'
  }),
   POST: <T>(url: string, body: T, withAuth = true) => {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    if (withAuth) {
      const token = getToken();
      headers['Authorization'] = `Bearer ${token}`;
    }
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });
  },
  PUT: <T>(url: string, body: T, withAuth = true) => {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    if (withAuth) {
      const token = getToken();
      headers['Authorization'] = `Bearer ${token}`;
    }
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers,
    });
  },
  DELETE: (url: string, withAuth = true) => {
    const headers: HeadersInit = {};
    if (withAuth) {
      const token = getToken();
      headers['Authorization'] = `Bearer ${token}`;
    }
    return fetch(url, {
      method: 'DELETE',
      headers,
    });
  },
};
