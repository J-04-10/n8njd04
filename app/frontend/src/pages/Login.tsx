import { type FormEvent, useState } from 'react';
import { useAuthStore } from '../store/auth';

export default function Login() {
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div style={{ maxWidth: 360, margin: '80px auto' }}>
      <h2>Ingresar</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}