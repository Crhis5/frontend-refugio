import { clearToken, getToken, saveToken } from './storage';

export async function login(usuario: string, contrasena: string): Promise<void> {
  const response = await fetch(`${import.meta.env.PUBLIC_API_URL ?? 'http://localhost:3000'}/auth/login`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ usuario, contrasena })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error ?? 'No fue posible iniciar sesión');
  saveToken(data.token);
}

export async function logout(): Promise<void> {
  const token = getToken();
  if (token) await fetch(`${import.meta.env.PUBLIC_API_URL ?? 'http://localhost:3000'}/auth/logout`, { method: 'POST', headers: { Authorization: `Bearer ${token}` } }).catch(() => undefined);
  clearToken();
}


