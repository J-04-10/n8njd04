# RUNBOOK

## Conector WhatsApp (Baileys)
- Endpoint QR: `GET /channels/{id}/qr` (actualmente mock en wa-connector y backend)
- Sesión: almacenar en Redis (pendiente implementar). Watchdog para reconectar.

## Despliegue local
- `docker-compose up -d --build`
- Migraciones y seed desde `app/backend` como se indica en README.

## Troubleshooting
- Backend no arranca: revisar `DATABASE_URL`, que Postgres esté listo.
- Sin QR: confirmar que el servicio `wa-connector` responde en `:3001/health`.