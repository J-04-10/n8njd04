# ERD (resumen)

Entidades principales: `User` (1-1) `Agent` — `Channel` — `Contact` — `Conversation` — `Message`.

- `Conversation` relaciona `Channel` y `Contact`, y referencia a etiquetas (via `ConversationLabel`) y tipificaciones (via `ConversationTypification`).
- `BotSession` guarda el estado del flujo de triage por `Contact`.
- `WebhookEvent` y `AuditLog` registran eventos y auditoría.