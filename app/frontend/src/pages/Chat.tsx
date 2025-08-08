import { useParams } from 'react-router-dom';

export default function Chat() {
  const { id } = useParams();
  const messages = [
    { id: 'm1', body: 'Hola', direction: 'in' },
    { id: 'm2', body: 'Hola, ¿en qué puedo ayudarte?', direction: 'out' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <main style={{ flex: 1, padding: 16 }}>
        <h3>Chat {id}</h3>
        <div>
          {messages.map((m) => (
            <div key={m.id} style={{ textAlign: m.direction === 'out' ? 'right' : 'left' }}>
              <div style={{ display: 'inline-block', padding: 8, background: '#f5f5f5', margin: 4 }}>
                {m.body}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <input style={{ width: '80%' }} placeholder="Escribe un mensaje" />
          <button>Enviar</button>
        </div>
      </main>
      <aside style={{ width: 320, borderLeft: '1px solid #ddd', padding: 12 }}>
        <h4>Etiquetas</h4>
        <div>
          <span style={{ background: '#eee', padding: '2px 6px', marginRight: 4 }}>Seguimiento</span>
        </div>
        <h4 style={{ marginTop: 16 }}>Tipificación</h4>
        <select>
          <option>Información general</option>
          <option>Cita agendada</option>
        </select>
        <button style={{ marginTop: 8 }}>Cerrar conversación</button>
      </aside>
    </div>
  );
}