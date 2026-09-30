import type { Animal } from '../types/animal.types';
import { clearToken, getToken } from './storage';

const API_URL = import.meta.env.PUBLIC_API_URL ?? 'http://localhost:3000';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (response.status === 401 && typeof window !== 'undefined') {
    clearToken();
    window.location.href = '/login';
  }
  if (!response.ok) throw new Error(data.error ?? 'No fue posible completar la solicitud');
  return data as T;
}

export function listAnimals(filters: Record<string, string> = {}): Promise<Animal[]> {
  const params = new URLSearchParams(Object.entries(filters).filter(([, value]) => value));
  return request<Animal[]>(`/animals${params.size ? `?${params}` : ''}`);
}

export function createAnimal(animal: Omit<Animal, 'identificador' | 'fechaIngreso'>): Promise<Animal> {
  return request<Animal>('/animals', { method: 'POST', body: JSON.stringify(animal) });
}

export function updateAnimal(id: number, animal: Omit<Animal, 'identificador' | 'fechaIngreso'>): Promise<Animal> {
  return request<Animal>(`/animals/${id}`, { method: 'PUT', body: JSON.stringify(animal) });
}


