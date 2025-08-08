import { create } from 'zustand';

type Role = 'ADMIN' | 'SUPERVISOR' | 'AGENT';

interface User {
  id: string;
  email: string;
  role: Role;
}

interface AuthState {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  async login(email: string, _password: string) {
    // TODO: call backend /auth/login
    set({ user: { id: 'u1', email, role: 'ADMIN' }, token: 'mock' });
  },
  logout() {
    set({ user: null, token: null });
  },
}));