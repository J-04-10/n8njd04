# Hospital María Auxiliadora WhatsApp Panel (MVP)

Monorepo con backend NestJS, frontend React Vite y conector WhatsApp (Baileys).

## Arranque rápido

1. Copia `.env.example` a `.env` y ajusta variables.
2. Construye y levanta:

```bash
cd infra
docker-compose up -d --build
```

3. Corre migraciones y seeds (en el contenedor backend o local con DATABASE_URL apuntando a postgres del compose):

```bash
cd app/backend
npm run prisma:migrate
npm run seed
```

4. Accede:
- Frontend: http://localhost:5173
- API: http://localhost:8080 (o vía Nginx en `/api`)

## Directorios
- `app/backend` NestJS + Prisma
- `app/frontend` React + Vite + Zustand + Socket.IO
- `app/wa-connector` Baileys (stub)
- `infra` Docker Compose y Nginx
- `docs` OpenAPI y documentación
