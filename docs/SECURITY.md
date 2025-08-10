# Seguridad

- Autenticación: JWT (mock en MVP). Usar HTTPS detrás de Nginx.
- Variables sensibles en `.env` no versionadas.
- Minimización de datos personales; retención definida por políticas (pendiente).
- Auditoría: `AuditLog` registrará acciones relevantes (pendiente implementación completa).
- Cumplimiento Habeas Data Ley 1581: consentimiento, finalidad, acceso, rectificación y supresión (documentar en producción).