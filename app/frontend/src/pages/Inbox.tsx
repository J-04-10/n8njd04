import { Link } from 'react-router-dom';

export default function Inbox() {
  const conversations = [
    { id: 'c1', contact: 'Juan Perez', last: 'Hola', status: 'open' },
    { id: 'c2', contact: 'Maria', last: 'Necesito cita', status: 'open' },
  ];
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: 300, borderRight: '1px solid #ddd', padding: 12 }}>
        <h3>Bandeja</h3>
        <input placeholder="Buscar..." />
        <div style={{ marginTop: 12 }}>
          {conversations.map((c) => (
            <div key={c.id} style={{ padding: 8 }}>
              <Link to={`/chat/${c.id}`}>{c.contact}</Link>
              <div style={{ color: '#666' }}>{c.last}</div>
            </div>
          ))}
        </div>
      </aside>
      <main style={{ flex: 1, padding: 16 }}>
        <h3>Selecciona una conversación</h3>
      </main>
    </div>
  );
}